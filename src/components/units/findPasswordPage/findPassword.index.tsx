import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import {
  IMutation,
  IMutationCheckEmailTokenArgs,
  IMutationGetTokenEmailArgs,
  IMutationUpdateUserPwdArgs,
} from "../../../commons/types/generated/types";
import * as S from "./findPassword.styles";

const UPDATE_USER_PWD = gql`
  mutation updateUserPwd($pwd: String!, $email: String!) {
    updateUserPwd(pwd: $pwd, email: $email)
  }
`;

const GET_TOKEN_EMAIL = gql`
  mutation getTokenEmail($email: String!, $method: String!) {
    getTokenEmail(email: $email, method: $method)
  }
`;

const CHECK_EMAIL_TOKEN = gql`
  mutation checkEmailToken($email: String!, $token: String!) {
    checkEmailToken(email: $email, token: $token)
  }
`;

export default function FindPassword(): JSX.Element {
  const router: NextRouter = useRouter();

  // 이메일 입력값 담기
  const [email, setEmail] = useState<string>("");

  // 비밀번호 입력값, 일치 여부
  const [pwd, setPwd] = useState<string>("");
  const [pwdErr, setPwdErr] = useState<boolean>(false);

  // 이메일 인증 관련 (1. 인증 2. 인증완료 3. 인증번호)
  const [verify, SetVerify] = useState<boolean>(false);
  const [verified, SetVerified] = useState<boolean>(false);
  const [verifyNum, SetVerifyNum] = useState<string>("");

  // 뮤테이션 함수
  const [getTokenEmail] = useMutation<
    Pick<IMutation, "getTokenEmail">,
    IMutationGetTokenEmailArgs
  >(GET_TOKEN_EMAIL);
  const [checkEmailToken] = useMutation<
    Pick<IMutation, "checkEmailToken">,
    IMutationCheckEmailTokenArgs
  >(CHECK_EMAIL_TOKEN);
  const [updateUserPwd] = useMutation<
    Pick<IMutation, "updateUserPwd">,
    IMutationUpdateUserPwdArgs
  >(UPDATE_USER_PWD);

  // 비밀번호 유효성 검사 함수
  const isPasswordValid = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].{7,16}$/;
    return passwordRegex.test(password);
  };

  // 재설정 요청
  const onClickFind: MouseEventHandler<
    HTMLButtonElement
  > = async (): Promise<void> => {
    if (!isPasswordValid(pwd)) {
      Modal.error({ content: "비밀번호가 올바른 형식이 아닙니다." });
      return;
    }
    try {
      const result = await updateUserPwd({
        variables: {
          pwd,
          email,
        },
      });
      // console.log(result);
      Modal.info({
        content: "비밀번호 설정이 완료되었습니다. 다시 로그인해 주세요.",
      });
      router.push(`/loginPage`);
    } catch (error) {
      Modal.error({
        content: "비밀번호 재설정에 실패했습니다. 다시 시도해 주세요.",
      });
    }
  };

  // 비밀번호 입력값, 확인
  const onChangePwd = (event: ChangeEvent<HTMLInputElement>): void => {
    const newPwd = event.target.value;
    setPwd(newPwd);
    if (!isPasswordValid(newPwd)) {
      setPwdErr(true);
    } else {
      setPwdErr(false);
    }
  };

  // 이메일 입력값
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event?.currentTarget.value);
  };

  // 이메일 인증번호 입력값
  const onChangeVerifyNum = (event: ChangeEvent<HTMLInputElement>): void => {
    SetVerifyNum(event.target.value);
  };

  // 이메일 인증번호 발급
  const onClickVerify = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      if (!email) return;
      const result = await getTokenEmail({
        variables: {
          email,
          method: "update",
        },
      });
      // console.log(result);
      SetVerify(true);
    } catch (error) {
      // 에러 처리
      // console.log("이메일 인증번호 발급 실패");
      // console.error(error);
      // alert("이메일을 확인해 주세요");
      Modal.error({ content: "이메일을 확인해 주세요." });
    }
  };

  // 이메일 인증번호 확인
  const onClickVerified = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      const result = await checkEmailToken({
        variables: {
          email,
          token: verifyNum,
        },
      });
      // console.log(result);
      if (result.data?.checkEmailToken) {
        SetVerified(true);
      } else {
        Modal.error({ content: "인증번호가 틀렸습니다, 다시 시도해 주세요" });
      }
    } catch (error) {
      // console.log("이메일 인증 실패");
      Modal.error({ content: "이메일 인증에 실패했습니다." });
    }
  };

  const handleVerify = verify ? onClickVerified : onClickVerify;

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.HeaderTitle>비밀번호 재설정</S.HeaderTitle>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.defaultInput
              placeholder="가입시 등록한 아이디를 입력해 주세요"
              onChange={onChangeEmail}
            />
            {verified ? (
              <S.VerifyFinished>이메일 인증이 완료되었습니다</S.VerifyFinished>
            ) : (
              <S.VerifyWrapper>
                {verify && (
                  <S.VerifyNumber
                    placeholder="인증번호 입력"
                    onChange={onChangeVerifyNum}
                  />
                )}
                <S.VerifyButton onClick={handleVerify}>
                  {verify ? "인증 완료" : "인증번호 발송"}
                </S.VerifyButton>
              </S.VerifyWrapper>
            )}
          </S.InputWrapper>
          {verified && (
            <S.InputWrapper>
              <S.Label>비밀번호 재설정</S.Label>
              <S.defaultInput
                placeholder="영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요"
                onChange={onChangePwd}
              />
            </S.InputWrapper>
          )}
          {pwdErr && <S.Error>비밀번호가 올바르지 않습니다</S.Error>}
          <S.FindButtonWrapper>
            <S.FindButton onClick={onClickFind}>비밀번호 재설정</S.FindButton>
          </S.FindButtonWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
