import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCheckEmailTokenArgs,
  IMutationCheckPhoneTokenArgs,
  IMutationGetTokenEmailArgs,
  IMutationGetTokenPhoneArgs,
} from "../../../commons/types/generated/types";
import { UseMutationCreateUser } from "../../commons/hooks/useMutations/signup/UseMutationCreateUser";
import {
  CHECK_PHONE_TOKEN,
  GET_TOKEN_PHONE,
} from "../../commons/hooks/useMutations/verifyPhone/useMutationVerifyPhone";

import * as S from "./signUp.styles";
import { IFormSignUpData } from "./signUp.types";
import { SignUpSchema } from "./signUp.validation";

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

export default function SignUp(): JSX.Element {
  // 이메일 인증 관련 (1. 인증 2. 인증완료 3. 인증번호)
  const [verify, SetVerify] = useState<boolean>(false);
  const [verified, SetVerified] = useState<boolean>(false);
  const [verifyNum, SetVerifyNum] = useState<string>("");

  // 휴대전화 인증 관련 (1. 인증 2. 인증완료 3. 인증번호)
  const [phoneVerify, SetPhoneVerify] = useState<boolean>(false);
  const [phoneVerified, SetPhoneVerified] = useState<boolean>(false);
  const [phoneVerifyNum, SetPhoneVerifyNum] = useState<string>("");

  // 뮤테이션
  const [getTokenEmail] = useMutation<
    Pick<IMutation, "getTokenEmail">,
    IMutationGetTokenEmailArgs
  >(GET_TOKEN_EMAIL);
  const [checkEmailToken] = useMutation<
    Pick<IMutation, "checkEmailToken">,
    IMutationCheckEmailTokenArgs
  >(CHECK_EMAIL_TOKEN);
  const [getTokenPhone] = useMutation<
    Pick<IMutation, "getTokenPhone">,
    IMutationGetTokenPhoneArgs
  >(GET_TOKEN_PHONE);
  const [checkPhoneToken] = useMutation<
    Pick<IMutation, "checkPhoneToken">,
    IMutationCheckPhoneTokenArgs
  >(CHECK_PHONE_TOKEN);

  // 이메일 인증번호 입력값
  const onChangeVerifyNum = (event: ChangeEvent<HTMLInputElement>): void => {
    SetVerifyNum(event.target.value);
  };

  // 휴대전화 인증번호 입력값
  const onChangePhoneVerifyNum = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    SetPhoneVerifyNum(event.target.value);
  };

  // useForm 설정
  const { register, handleSubmit, formState, getValues } =
    useForm<IFormSignUpData>({
      resolver: yupResolver(SignUpSchema),
      mode: "onChange",
    });

  // createUser hooks(API) 호출
  const { SubmitCreateUser } = UseMutationCreateUser();

  // 전화번호, 이메일 입력값이 있는지 여부
  const usePhoneNum = getValues("phone");
  const useEmail = getValues("email");

  // 최종 회원가입 요청
  const onSubmitForm = async (data: IFormSignUpData) => {
    if (!verified) {
      Modal.error({ content: "이메일을 인증해 주세요" });
      return;
    }

    if (usePhoneNum && !phoneVerified) {
      Modal.error({ content: "전화번호를 인증해 주세요" });
      return;
    }

    const { email, passwordCheck, phone, ...value } = getValues();
    await SubmitCreateUser({ ...value, email, phone }); // 이메일, 전화번호 값을 포함하여 전달
  };

  // 이메일 인증번호 발급
  const onClickVerify = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      const email = getValues("email");
      if (!email) return;
      const result = await getTokenEmail({
        variables: {
          email,
          method: "create",
        },
      });
      // console.log(result);
      SetVerify(true);
    } catch (error) {
      // 에러 처리
      // console.log("이메일 인증번호 발급 실패");
      alert("이메일을 확인해 주세요");
    }
  };

  // 이메일 인증번호 확인
  const onClickVerified = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      const email = getValues("email");
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
      // if (error instanceof Error) console.log("번호 인증 실패");
    }
  };

  // 인증 요청시 인증번호 확인 버튼으로 변경
  const handleVerify = verify ? onClickVerified : onClickVerify;

  // 휴대전화 인증번호 발급
  const onClickPhoneVerify = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      const phone = getValues("phone");
      if (!phone) return;
      const result = await getTokenPhone({
        variables: {
          phone,
        },
      });
      // console.log(result);
      SetPhoneVerify(true);
    } catch (error) {
      // 에러 처리
      // console.log("휴대전화 인증번호 발급 실패");
    }
  };

  // 휴대전화 인증 확인
  const onClickPhoneVerified = async () => {
    try {
      const phone = getValues("phone");
      const result = await checkPhoneToken({
        variables: {
          phone: String(phone),
          token: phoneVerifyNum,
        },
      });
      // console.log(result);
      if (result.data?.checkPhoneToken) {
        SetPhoneVerified(true);
      } else {
        Modal.error({ content: "인증번호가 틀렸습니다." });
      }
    } catch (error) {
      // console.log("휴대전화 번호 발급 실패");
      Modal.error({ content: "전화번호를 확인해 주세요" });
    }
  };

  // 인증 요청시 인증번호 확인 버튼으로 변경
  const handlePhoneVerify = phoneVerify
    ? onClickPhoneVerified
    : onClickPhoneVerify;

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <S.HeaderTitle>회원 가입</S.HeaderTitle>
            <S.InputWrapper>
              <S.Label>아이디</S.Label>
              <S.defaultInput
                placeholder="이메일을 입력해 주세요"
                type="text"
                {...register("email")}
              />
              {verified ? (
                <S.VerifyFinished>
                  이메일 인증이 완료되었습니다
                </S.VerifyFinished>
              ) : (
                <S.VerifyWrapper style={!useEmail ? { display: "none" } : {}}>
                  {verify && (
                    <S.VerifyNumber
                      placeholder="인증번호 입력"
                      onChange={onChangeVerifyNum}
                    />
                  )}
                  <S.VerifyButton type="button" onClick={handleVerify}>
                    {verify ? "인증 완료" : "인증번호 발송"}
                  </S.VerifyButton>
                </S.VerifyWrapper>
              )}
            </S.InputWrapper>
            <S.Errors>{formState.errors.email?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.defaultInput
                type="text"
                placeholder="이름을 입력해 주세요"
                {...register("name")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.name?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.defaultInput
                placeholder="영문+숫자 조합 8~16자리의 비밀번호를 입력해 주세요"
                type="password"
                {...register("pwd")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.pwd?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <S.defaultInput
                placeholder="비밀번호를 다시 입력해 주세요"
                type="password"
                {...register("passwordCheck")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.passwordCheck?.message}</S.Errors>
            <S.InputWrapper>
              <S.Subtitle>선택 입력 사항</S.Subtitle>
              <S.SubtitleLine />
              <S.Label>휴대전화 등록</S.Label>
              <S.defaultInput
                {...register("phone")}
                placeholder="- 없이 휴대폰 번호를 입력해 주세요"
              />
              {phoneVerified ? (
                <S.VerifyFinished>
                  전화번호 인증이 완료되었습니다
                </S.VerifyFinished>
              ) : (
                <S.VerifyWrapper
                  style={!usePhoneNum ? { display: "none" } : {}}
                >
                  {phoneVerify && (
                    <S.VerifyNumber
                      placeholder="인증번호 입력"
                      onChange={onChangePhoneVerifyNum}
                    />
                  )}
                  <S.VerifyButton type="button" onClick={handlePhoneVerify}>
                    {phoneVerify ? "인증 완료" : "인증번호 발송"}
                  </S.VerifyButton>
                </S.VerifyWrapper>
              )}
            </S.InputWrapper>
            <S.Errors>{formState.errors.phone?.message}</S.Errors>
            <S.InputWrapper>
              <S.Label>생년월일</S.Label>
              <S.defaultInput
                placeholder="주민등록번호 앞 6자리를 입력해 주세요"
                {...register("birth_date")}
              />
            </S.InputWrapper>
            <S.Errors>{formState.errors.birth_date?.message}</S.Errors>
            <S.ButtonWrapper>
              <S.SignUpButton type="submit">가입하기</S.SignUpButton>
            </S.ButtonWrapper>
          </form>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
