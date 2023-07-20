import React from "react";
import * as S from "./modal.styles";
import { selectMonth } from "../../../../../commons/stores/index";
import { useRecoilState } from "recoil";

interface ModalProps {
  onClose: () => void;
  isSelected: boolean;
}

const months = ["2023년 6월호"];

const Modal: React.FC<ModalProps> = ({ onClose, children, isSelected }) => {
  const [selectMonthList, setSelectMonthList] = useRecoilState(selectMonth);

  const handleMonthClick = (month: string) => {
    setSelectMonthList(month);
    onClose();
  };

  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>월간호를 선택해 주세요</S.Title>
          <S.Close onClick={onClose} />
        </S.TitleWrapper>
        <S.DivideLine />
        <S.ContentsWrapper>
          {months.map((month) => (
            <S.Contents
              key={month}
              onClick={() => handleMonthClick(month)}
              isSelected={selectMonthList === month}
            >
              {month}
            </S.Contents>
          ))}
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
