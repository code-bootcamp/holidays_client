import React from "react";
import * as S from "./modal.styles";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <S.ModalWrapper>
      {children}
      <S.Wrapper>
        <S.Title>낚시의 모든 것</S.Title>
        <S.Subtitle>홀리데이즈 2023. 5</S.Subtitle>
        <S.DivideLine />
        <S.MainImage src="/magazinePage/낚시.jpeg" />
        <S.Contents>
          &nbsp;&nbsp;&nbsp;우선 바다 낚싯대 사용에 앞서 알아야 할 몇가지가
          있습니다. 일반적으로 낚싯대 대부분은 카본 소재로 되어 있는 것이
          많습니다다. 이것은 섬유 차체가 가볍고 강하기 때문 입니다. 하지만 순간
          충격에 약한 단점이 있습니다. 카본은 전류가 잘 통하는 재질이기 때문에
          천둥번개와 고압선 같은 전류가 흐르는 곳에 가면 감전 우려가 있기 때문에
          주의해야 합니다. 바다 낚싯대는 대부분 원피스(1절)와 2피스(2절)곱기씩
          이상으로 되어 있고 여기에 곱기식과 안테나식으로 되어 있습니다.
          민장대는 붕어낚시와 같이 사용하시면 되고 릴낚시는 우선 낚싯대에 릴을
          장착하고 나서 순번대로 낚싯대를 펼치면 됩니다. 낚싯대 가이드를
          보호가기 위해 끼워진 가이드
          <br></br>
          <br />
          &nbsp;&nbsp;&nbsp; 캡을 먼저 뺀 다음에 초릿대 부터 하나씩 빼야 되는데
          이때 낚싯대를 다 빼고 나면 낚싯대 길이가 길기 때문에 줄을 끼우기가
          쉽지 않습니다. ﻿ 그래서 만들어 놓은 것이 라인(줄)을 쉽게 끼우기 위해
          가이드 캡에 라인을 끼우게 만들어 놓았습니다. 그리고 전 가이드 속으로
          통과 시켜 놓았기 때문에 여기에 라인을 끼워 밖으로 빼내면 됩니다. 이때
          릴의 라인롤러(픽업베일)를 라인이 자유롭게 풀리게 반대 방향으로 제쳐
          두어야 합니다.
        </S.Contents>
        <S.ButtonWrapper>
          <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
