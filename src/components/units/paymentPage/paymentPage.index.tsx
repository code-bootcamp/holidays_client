import * as S from "./paymentPage.styles";

export default function PaymentPage(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.TitleWrapper>
            <S.TitleIconWrapper>
              <S.TitleIcon src="/paymentPage/gift.png" />
            </S.TitleIconWrapper>
            <S.TitleContentWrapper>
              <S.Title>지금부터 1년간,</S.Title>
              <S.Subtitle>프리미엄 광고가 15000원!</S.Subtitle>
            </S.TitleContentWrapper>
          </S.TitleWrapper>
          <S.Body>
            <S.InformWrapper>
              <S.Label>기간 : ~ 2024. 5. 29</S.Label>
              <S.Label>
                방법 : 홀리데이즈 {">>"} 마이페이지 {">>"} 내가 만든 클래스
              </S.Label>
            </S.InformWrapper>
            <S.InformImageWrapper>
              <S.PaymentInformationImage src="/paymentPage/information.png" />
              <S.PaymentInformHeader>광고하기 버튼 클릭</S.PaymentInformHeader>
            </S.InformImageWrapper>
            <S.ButtonWrapper>
              <S.PaymentButton>지금 광고하기</S.PaymentButton>
            </S.ButtonWrapper>
          </S.Body>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
