import { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import * as S from "./calendar.styles";
import { Calendar, theme } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import { Modal } from "antd";
import type { Dayjs } from "dayjs";

export default function CalendarUI() {
  // 예약하기 버튼 눌렀을 때 뜨는 모달
  const [isOpen, setIsOpen] = useState(false); // 모달

  const onToggleModal = (): void => {
    // setIsOpen(true);
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (): void => {
    onToggleModal();
  };

  // ----------------

  // // 달력 크기 지정
  // const [size] = useState<SizeType>("large");

  // 인원 onchange
  const onChangeNumber = (value: any) => {
    console.log("인원", value);
  };

  // 달력
  const { token } = theme.useToken();

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 291,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  // -------
  // 달력 높이조정(추가 start)
  const headerStyle: React.CSSProperties = {
    height: "32px", // header 높이 조절
    lineHeight: "32px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const headerRender = ({ value, type, onChange, onTypeChange }: any) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    for (let i = start; i < end; i++) {
      monthOptions.push(<option key={`${i}`}>{i + 1}</option>);
    }

    const year = value.year();
    const month = value.month() + 1;

    return (
      <div style={headerStyle}>
        <div>
          {year}년 {month}월
        </div>
        <div>
          <select
            value={String(month)}
            onChange={(e) => onChange(value.month(Number(e.target.value)))}
          >
            {monthOptions}
          </select>
        </div>
      </div>
    );
  };

  // 달력 높이조정(추가 end)
  // --------------

  return (
    <>
      <S.Wrapper>
        {/* ------------ */}

        {/* 예약하기 버튼 눌렀을 때 뜨는 모달 */}
        {isOpen && (
          <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
            <S.Modal_wrapper>
              <S.Modal_row>
                <S.RowText>은행명 </S.RowText>
                <S.RowText2>신한은행</S.RowText2>
              </S.Modal_row>
              <S.Modal_row>
                <S.RowText>예금주 </S.RowText>
                <S.RowText2>홍길동</S.RowText2>
              </S.Modal_row>
              <S.Modal_row>
                <S.RowText>계좌번호 </S.RowText>
                <S.RowText2>110 - 485 - 770080</S.RowText2>
              </S.Modal_row>
            </S.Modal_wrapper>
          </Modal>
        )}

        {/* ------------ */}

        <S.Contents>
          <S.Text>
            <S.Text>요금을 확인하려면 날짜를</S.Text>
            <S.Text>입력하세요.</S.Text>
          </S.Text>

          {/* <S.Spaced direction="vertical">
            <S.RangePicker
              style={{ width: "291px" }}
              size={size}
              onChange={onChangeDate}
            />
          </S.Spaced> */}

          <S.Calendar style={wrapperStyle}>
            <Calendar
              fullscreen={false}
              onPanelChange={onPanelChange}
              headerRender={headerRender} // 추가(높이조정)
            />
          </S.Calendar>

          <S.NumberBox>
            <S.Num>인원</S.Num>
            <S.Number
              size="large"
              min={1}
              max={100}
              defaultValue={1}
              onChange={onChangeNumber}
            />
          </S.NumberBox>

          <S.Row>
            <S.Num2>1명</S.Num2>
            <S.Price>₩ 625,730</S.Price>
          </S.Row>

          <S.Line />

          <S.Row>
            <S.Sum>총 합계</S.Sum>
            <S.Price>₩ 714,065</S.Price>
          </S.Row>
        </S.Contents>
        <S.BtnWrapper onClick={onToggleModal}>예약하기</S.BtnWrapper>
        {/* <div>{value.format("YYYY-MM-DD")}</div> */}
      </S.Wrapper>
    </>
  );
}
