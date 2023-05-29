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
        <S.Contents>
          <S.Text>예약 정보</S.Text>

          <S.Table>
            <S.Row>
              <S.Row_left>
                <S.RowText>예약 번호</S.RowText>
              </S.Row_left>
              <S.Row_right>
                <S.RowTextLong>1234567890</S.RowTextLong>
              </S.Row_right>
            </S.Row>
            <S.Row>
              <S.Row_left>
                <S.RowText>입금하실 금액</S.RowText>
              </S.Row_left>
              <S.Row_right2>
                <S.RowText2>2,090원</S.RowText2>
              </S.Row_right2>
              <S.Row_left>
                <S.RowText22>예금주</S.RowText22>
              </S.Row_left>
              <S.Row_right>
                <S.RowText2>(주) 가비아</S.RowText2>
              </S.Row_right>
            </S.Row>
            <S.Row>
              <S.Row_left>
                <S.RowText>입금 은행</S.RowText>
              </S.Row_left>
              <S.Row_right2>
                <S.RowText2>신한은행</S.RowText2>
              </S.Row_right2>
              <S.Row_left>
                <S.RowText22>입금 계좌</S.RowText22>
              </S.Row_left>
              <S.Row_right>
                <S.RowText2>110485770080</S.RowText2>
              </S.Row_right>
            </S.Row>
            <S.Row2>
              <S.Row_left>
                <S.RowText>입금 기한</S.RowText>
              </S.Row_left>
              <S.Row_right>
                <S.RowTextLong>
                  2023.05.31까지 입금하지 않으면 자동 취소됩니다.
                </S.RowTextLong>
              </S.Row_right>
            </S.Row2>
          </S.Table>

          <S.Explain>
            <S.Explain_row>
              * 타인이 먼저 도메인을 등록/결제 할 경우 입금 기한에 상관없이
              등록이 불가능할 수 있으니 빠른 입금 부탁드립니다.
            </S.Explain_row>
            <S.Explain_row>
              * 입금 확인은 입금 후 10~15분 정도 소요될 수 있습니다.
            </S.Explain_row>
            <S.Explain_row>
              * 입금하실 계좌의 예금주는 '세틀뱅크', 'KCP(한국사이버결제)' 또는
              '(주)가비아' 등으로 표시될 수 있습니다. 정확한 금액을
              입금해주시면, 모두 정상적으로 결제가 완료됩니다.
            </S.Explain_row>
          </S.Explain>
        </S.Contents>

        <S.ButtonWrapper>
          <S.CloseButton onClick={onClose}>close</S.CloseButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
