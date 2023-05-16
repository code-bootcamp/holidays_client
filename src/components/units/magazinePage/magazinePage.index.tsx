import { useState } from "react";
import Modal from "../../../../pages/magazinePage/MagazineModal/modal";
import Backdrop from "../../../../pages/magazinePage/Backdrop/Backdrop";
import * as S from "./magazinePage.styles";

export default function Magazine(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderLogo src="/images/logo.png" />
          <S.HeaderTitle>- 홀리데이즈 매거진 5월호 -</S.HeaderTitle>
        </S.Header>
        <S.Editor>2023. 5 에디터</S.Editor>
        <S.divideLine />
        <S.Body>
          <S.ContentsLeft>
            <S.ContentsImageLeft
              src="/magazinePage/낚시.jpeg"
              onClick={handleModalOpen}
            />
            <S.ContentsTextWrapperLeft>
              <S.ContentsLabelLeft>낚시의 모든 것</S.ContentsLabelLeft>
              <S.ContentsRemarksLeft>채비부터 포인트까지</S.ContentsRemarksLeft>
            </S.ContentsTextWrapperLeft>
          </S.ContentsLeft>
          <S.ContentsRight>
            <S.ContentsTextWrapperRight>
              <S.ContentsLabelRight>시니어모델로 살아가기</S.ContentsLabelRight>
              <S.ContentsRemarksRight>
                시니어 패션이란 어떤 것인가?
              </S.ContentsRemarksRight>
            </S.ContentsTextWrapperRight>
            <S.ContentsImageRight src="/magazinePage/시니어모델.png" />
          </S.ContentsRight>
          <S.ContentsLeft>
            <S.ContentsImageLeft src="/mainPage/매거진메인.png" />
            <S.ContentsTextWrapperLeft>
              <S.ContentsLabelLeft>빈센트의 인생 레시피</S.ContentsLabelLeft>
              <S.ContentsRemarksLeft>
                연령별 인생 레시피를 맛보다
              </S.ContentsRemarksLeft>
            </S.ContentsTextWrapperLeft>
          </S.ContentsLeft>
        </S.Body>
        {showModal && <Modal onClose={handleModalClose} />}
        {showModal && <Backdrop onClick={handleModalClose} />}
      </S.Wrapper>
    </>
  );
}
