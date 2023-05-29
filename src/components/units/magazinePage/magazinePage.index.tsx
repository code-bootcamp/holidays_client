import { useState } from "react";
import Backdrop from "../../commons/modals/magazineModal/Backdrop/Backdrop";
import Modal from "../../commons/modals/magazineModal/Modal/modal";

import * as S from "./magazinePage.styles";

export default function Magazine(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };
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
          <S.Contents>
            <S.ImageBox1
              onClick={handleModalOpen}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <S.ContentsTextWrapper
                className={isHovered ? "visible" : "hidden"}
              >
                <S.ContentsLabel>낚시의 모든 것</S.ContentsLabel>
                <S.ContentsRemarks>채비부터 포인트까지</S.ContentsRemarks>
              </S.ContentsTextWrapper>
            </S.ImageBox1>
          </S.Contents>
          <S.Contents>
            <S.ImageBox2
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <S.ContentsTextWrapper2
                className={isHovered ? "visible" : "hidden"}
              >
                <S.ContentsLabel>나는 모델이다</S.ContentsLabel>
                <S.ContentsRemarks>시니어 모델로 살아가기</S.ContentsRemarks>
              </S.ContentsTextWrapper2>
            </S.ImageBox2>
          </S.Contents>
          {/* <S.Contents>
            <S.ContentsImage src="/mainPage/매거진메인.png" />
            <S.ContentsTextWrapper>
              <S.ContentsLabel>빈센트의 인생 레시피</S.ContentsLabel>
              <S.ContentsRemarks>연령별 인생 레시피를 맛보다</S.ContentsRemarks>
            </S.ContentsTextWrapper>
          </S.Contents> */}
        </S.Body>
        {showModal && <Modal onClose={handleModalClose} />}
        {showModal && <Backdrop onClick={handleModalClose} />}
      </S.Wrapper>
    </>
  );
}
