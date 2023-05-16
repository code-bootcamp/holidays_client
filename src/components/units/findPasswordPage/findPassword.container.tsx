import * as S from "./findPassword.styles";

export default function FindPassword() {
  const onClickFind = (): void => {
    console.log("비밀번호 찾기");
  };

  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.HeaderTitle>비밀번호 찾기</S.HeaderTitle>
          <S.InputWrapper>
            <S.Label>이름</S.Label>
            <S.defaultInput placeholder="가입시 등록한 이름을 입력해 주세요" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>아이디</S.Label>
            <S.EmailWrapper>
              <S.FirstEmail placeholder="이메일을 입력해 주세요" />
              <S.EmailConnector> @ </S.EmailConnector>
              <S.LastEmail>
                <S.defaultAddress selected disabled>
                  주소를 선택해 주세요
                </S.defaultAddress>
                <option value={``}>naver.com</option>
                <option value={``}>gmail.com</option>
              </S.LastEmail>
            </S.EmailWrapper>
          </S.InputWrapper>
          <S.FindButtonWrapper>
            <S.FindButton>비밀번호 찾기</S.FindButton>
          </S.FindButtonWrapper>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
