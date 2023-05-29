import React, { useState } from "react";
import * as S from "./modal.styles";
import { selectedRegionState } from "../../../../../commons/stores/index";
import { useRecoilState } from "recoil";

interface ModalProps {
  onClose: () => void;
}

const regions = [
  "지역 전체",
  "서울",
  "세종",
  "강원",
  "인천",
  "경기",
  "충북",
  "충남",
  "경북",
  "대전",
  "대구",
  "전북",
  "경남",
  "울산",
  "광주",
  "부산",
  "전남",
  "제주",
];

const ModalComponent: React.FC<ModalProps> = ({ onClose, children }) => {
  const [selectedRegion, setSelectedRegion] =
    useRecoilState(selectedRegionState);

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    onClose(); // 선택된 region 값을 onClose 함수와 함께 전달
  };

  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>지역</S.Title>
          <S.Close onClick={onClose} />
        </S.TitleWrapper>
        <S.DivideLine />
        <S.ContentsWrapper>
          {regions.map((region: any) => (
            <S.Contents key={region} onClick={() => handleRegionClick(region)}>
              {region}
            </S.Contents>
          ))}
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default ModalComponent;
