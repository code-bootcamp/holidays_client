import { IQuery } from "../../../../../commons/types/generated/types";
import { IFormData } from "../../../../units/classPage/detail/reservationCalendar/reservationCalendar.types";
import * as S from "./modal.styles";

// interface ModalProps {
//   onClose: () => void;
// }

interface ModalProps {
  onClose: () => void;
  date: string;
  // personnel: string;
  onClickReservation: (data: IFormData) => void;
  fetchClassDetail?: any;
  data: any; // data 추가
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  date,
  // personnel,
  onClickReservation,
  fetchClassDetail,
  data, // data를 인자로 받습니다.
}) => {
  const handleReservation = () => {
    // 예약 처리 로직
    console.log("!@!@!@!@!@!@!@");
    // console.log(date, personnel);
    console.log(data); // data를 사용할 수 있습니다.
    console.log("data.res_date: ", data.res_date);
    console.log("data.personnel: ", data.personnel);
    console.log("!@!@!@!@!@!@!@");

    const formData: IFormData = {
      res_date: date,
      // personnel,
      personnel: data.personnel,
    };

    console.log("ㅁㅁㅁㅁㅁㅁㅁ");
    console.log(formData);
    console.log("formData.res_date: ", formData.res_date);
    console.log("formData.personnel: ", formData.personnel);
    console.log("ㅁㅁㅁㅁㅁㅁㅁ");

    onClickReservation(formData);
    // setValue("personnel", "");

    onClose();
  };
  return (
    <S.ModalWrapper>
      {/* {children} */}
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>결제 정보</S.Title>
          <S.Close onClick={onClose} />
        </S.TitleWrapper>
        <S.DivideLine />
        <S.ContentsWrapper>
          <S.Contents>
            <S.Table>
              <S.Tr>
                <S.Div>입금하실 금액</S.Div>
                <S.Div2>{fetchClassDetail?.price}원 (VAT포함)</S.Div2>
                <S.Div>예금주</S.Div>
                <S.Div2>{fetchClassDetail?.accountName}</S.Div2>
              </S.Tr>
              <S.Tr>
                <S.Div>입금 은행</S.Div>
                <S.Div2>{fetchClassDetail?.bankName}</S.Div2>
                <S.Div>입금 계좌</S.Div>
                <S.Div2>{fetchClassDetail?.accountNum}</S.Div2>
              </S.Tr>
            </S.Table>

            <S.Context>
              <S.Context_Tr>
                * 입금 확인은 입금 후 10~15분 정도 소요될 수 있습니다.
              </S.Context_Tr>
              <S.Context_Tr>
                * 타인이 먼저 예약할 수 있으므로 빠른 시일 내 결제 바랍니다.
              </S.Context_Tr>
            </S.Context>

            {/* <S.BtnWrapper type="submit">예약하기</S.BtnWrapper> */}
            <S.BtnWrapper type="submit" onClick={handleReservation}>
              예약하기
            </S.BtnWrapper>
          </S.Contents>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.ModalWrapper>
  );
};

export default Modal;
