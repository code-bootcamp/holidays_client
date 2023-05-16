import { useState } from "react";
import * as S from "./signUp.styles";

export default function SignUp(): JSX.Element {
  const [verify, SetVerify] = useState(false);
  const [verified, SetVerified] = useState(false);

  const onClickVerify = (event: React.MouseEvent<HTMLButtonElement>): void => {
    SetVerify(true);
  };

  const onClickVerified = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    SetVerified(true);
  };

  const handleVerify = verify ? onClickVerified : onClickVerify;

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.HeaderTitle>회원 가입</S.HeaderTitle>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.EmailWrapper>
              <S.FirstEmail placeholder="이메일을 입력해 주세요" />
              <S.EmailConnector>@</S.EmailConnector>
              <S.LastEmail>
                <S.defaultAddress selected disabled>
                  주소를 선택해 주세요
                </S.defaultAddress>
                <option value={``}>naver.com</option>
                <option value={``}>gmail.com</option>
              </S.LastEmail>
            </S.EmailWrapper>
            {verified ? (
              <S.VerifyFinished>이메일 인증이 완료되었습니다</S.VerifyFinished>
            ) : (
              <S.VerifyWrapper>
                {verify && <S.VerifyNumber placeholder="인증번호 입력" />}
                <S.VerifyButton onClick={handleVerify}>
                  {verify ? "인증 완료" : "인증번호 발송"}
                </S.VerifyButton>
              </S.VerifyWrapper>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>이름</S.Label>
            <S.defaultInput placeholder="이름을 입력해 주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.defaultInput placeholder="영문+숫자 조합 8~16자리의 비밀번호를 입력해 주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호 확인</S.Label>
            <S.defaultInput placeholder="비밀번호를 다시 입력해 주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>생년월일</S.Label>
            <S.BirthWrapper>
              <S.Year placeholder="년(4자리)" />
              <S.Month placeholder="월" />
              <S.Day placeholder="일" />
            </S.BirthWrapper>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.SignUpButton>가입하기</S.SignUpButton>
          </S.ButtonWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
