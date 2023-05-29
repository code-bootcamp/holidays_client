import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import Backdrop from "../../commons/modals/payModal/Backdrop/Backdrop";
import PayModal from "../../commons/modals/payModal/Modal/modal";
import * as S from "./paymentPage.styles";

export default function PaymentPage(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

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
              <S.PaymentButton onClick={handleModalOpen}>
                지금 광고하기
              </S.PaymentButton>
              {showModal && <PayModal onClose={handleModalClose} />}
              {showModal && <Backdrop onClick={handleModalClose} />}
            </S.ButtonWrapper>
          </S.Body>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}
