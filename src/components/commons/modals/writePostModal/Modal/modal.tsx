import React from "react";
import { useRouter } from "next/router";
import * as S from "./modal.styles";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const router = useRouter();
  const NAVIGATION_MENUS = [
    { name: "클래스 생성하기", page: "/classPage/write" },
    { name: "클래스 광고하기", page: "/paymentPage" },
    { name: "사랑방 글쓰기", page: "/communityPage/write" },
    { name: "예약 관리", page: "/myPage/reservation" },
  ];

  const onClickMenu = (event: any): void => {
    void router.push(event.currentTarget.id);
    onClose();
  };
  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.NaviWrapper>
          {NAVIGATION_MENUS.map((el) => (
            <S.ContentsWrapper key={el.page}>
              <S.Contents id={el.page} onClick={onClickMenu}>
                {el.name}
              </S.Contents>
            </S.ContentsWrapper>
          ))}
        </S.NaviWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
