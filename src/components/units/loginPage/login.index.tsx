import * as S from "./login.style";
import { useRouter } from "next/router";

export default function LogIn(): JSX.Element {
  const router = useRouter();

  const onClickFindID = () => {
    alert("현재 아이디 찾기 서비스는 일시적으로 제한되었습니다.");
    // router.push(`/login/findIdPage`);
  };

  const onClickFindPassword = () => {
    router.push(`/loginPage/findPasswordPage`);
  };

  const onClickSignUp = () => {
    router.push(`/signUpPage`);
  };

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.HeaderTitle>로그인</S.HeaderTitle>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.defaultInput placeholder="이메일을 입력해 주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.defaultInput placeholder="비밀번호를 입력해 주세요" />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.LoginButton>로그인</S.LoginButton>
          </S.ButtonWrapper>
          <S.SubtitleWrapper>
            <S.Subtitle onClick={onClickFindID}>아이디 찾기</S.Subtitle>
            <S.Subtitle onClick={onClickFindPassword}>비밀번호 찾기</S.Subtitle>
            <S.Subtitle onClick={onClickSignUp}>회원가입</S.Subtitle>
          </S.SubtitleWrapper>
          <S.SocialWrapper>
            <S.SocialNaverWrapper>
              <S.SocialLoginImage src="/loginPage/naver.png" />
              <S.SocialLogin>네이버 계정으로 로그인</S.SocialLogin>
            </S.SocialNaverWrapper>
            <S.SocialKakaoWrapper>
              <S.SocialLoginImage src="/loginPage/kakao.png" />
              <S.SocialLogin>카카오 계정으로 로그인</S.SocialLogin>
            </S.SocialKakaoWrapper>
            <S.SocialGoogleWrapper>
              <S.SocialLoginImage src="/loginPage/google.png" />
              <S.SocialLogin>구글 계정으로 로그인 </S.SocialLogin>
            </S.SocialGoogleWrapper>
          </S.SocialWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
