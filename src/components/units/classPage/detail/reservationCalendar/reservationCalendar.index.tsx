import { useEffect, useState } from "react";
import * as S from "./reservationCalendar.styles";
import { Calendar, theme, Col, Radio, Row, Select } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Dayjs } from "dayjs";
import { UseQueryFetchClassSchedules } from "../../../../commons/hooks/useQueries/class/useQueryFetchClassSchedules";
import { UseMutationReservation } from "../../../../commons/hooks/useMutations/class/useMutationCreateReservation";
import { useForm } from "react-hook-form";
import {
  IFormData,
  IReservationCreateProps,
} from "./reservationCalendar.types";
import { reservationSchema } from "./reservationCalendar.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Backdrop from "../../../../commons/modals/accountModal/Backdrop/Backdrop";
import Modal from "../../../../commons/modals/accountModal/Modal/modal";

export default function CalendarUI(props: IReservationCreateProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData | null>(null);

  console.log("%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(formData);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%");

  const handleModalOpen = (data: IFormData): void => {
    console.log("ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ");
    console.log(data);
    console.log("ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ");

    console.log(date); // 이건 나옴

    const confirmResult = window.confirm("예약하시겠습니까?");
    if (confirmResult) {
      setFormData(data);
      setShowModal(true);
    }
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  // -------------------------------------------

  const [date, setDate] = useState<string>("");

  const { data } = UseQueryFetchClassSchedules();
  console.log("///////////////");
  console.log(data);
  console.log("///////////////");

  console.log("###########");

  // 활성화되어야 하는 날짜값(예약 가능한 날짜들)
  data?.fetchClassSchedules.map((el: any) => {
    // console.log(el.date);
  });

  const disabledDate = (date: Dayjs | null) => {
    if (!date) {
      return true;
    }

    const formattedDate = date.format("YYMMDD");

    // 예약 가능한 날짜들을 배열로 저장
    const reservationDates = data?.fetchClassSchedules.map(
      (el: any) => el.date
    );

    // 현재 날짜가 예약 가능한 날짜들 중에 포함되는 경우 활성화
    return (
      !reservationDates?.includes(formattedDate) ||
      data?.fetchClassSchedules.find((el: any) => el.date === formattedDate)
        ?.remain <= 0
    );
  };

  console.log("###########");

  const { onClickReservation } = UseMutationReservation();

  const { register, handleSubmit, setValue, formState } = useForm<IFormData>({
    resolver: yupResolver(reservationSchema),

    defaultValues: {
      res_date: date,
      personnel: props.personnel,
    },
    mode: "onChange",
  });

  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;
    console.log("*******");
    console.log(value);
    console.log(data);
    console.log("*******");

    handleModalOpen(value); // value 함께 전달.
    setValue("personnel", "");
  };

  useEffect(() => {
    setValue("res_date", date);
  }, [date, setValue]);

  const { token } = theme.useToken();
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null);

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {};

  const handleDaySelect = (value: Dayjs) => {
    setSelectedDay(value);
    const formattedDate = value.format("YYMMDD");
    console.log("formattedDate: ", formattedDate);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 291,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const headerStyle: React.CSSProperties = {
    height: "32px",
    lineHeight: "32px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const headerRender = ({ value, type, onChange, onTypeChange }: any) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    let current = value.clone();
    const localeData = value.localeData();
    const months = [];
    console.log("*******");
    console.log(value);
    // for (let i = 0; i < 12; i++) {
    //   current = current.month(i);
    //   months.push(localeData.monthsShort(current));
    // }

    for (let i = 0; i < 12; i++) {
      current = current.month(i);
      months.push(i + 1);
    }

    for (let i = start; i < end; i++) {
      // monthOptions.push(<option key={`${i}`}>{i + 1}</option>);
      monthOptions.push(
        <Select.Option key={i} value={i} className="month-item">
          {months[i]}
        </Select.Option>
      );
    }

    // console.log(monthOptions.);
    const year = String(value.year()).slice(-2);
    const month = String(value.month() + 1).padStart(2, "0") + "월";
    const day = String(value.date()).padStart(2, "0");

    const date = year + month + day;

    setDate(date);
    console.log("date: ", date);

    return (
      <div style={headerStyle}>
        <div>
          {year}년
          <Select
            size="small"
            dropdownMatchSelectWidth={false}
            value={month}
            onChange={(newMonth) => {
              const now = value.clone().month(newMonth);
              onChange(now);
            }}
          >
            {monthOptions}
          </Select>
        </div>
        <div></div>
      </div>
    );
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Contents>
            <S.Text>
              <S.Text>예약을 하시려면 날짜를 선택하세요.</S.Text>
            </S.Text>
            <S.Calendar style={wrapperStyle}>
              <Calendar
                fullscreen={false}
                onPanelChange={onPanelChange}
                headerRender={headerRender}
                disabledDate={disabledDate} // 날짜 비활성화 함수 적용
                dateFullCellRender={(value) => {
                  const day = value.date();

                  const isSelected = selectedDay?.isSame(value, "day");
                  const cellStyle = isSelected
                    ? { background: "orange", color: "white" }
                    : {};

                  return (
                    <div
                      style={cellStyle}
                      onClick={() => handleDaySelect(value)}
                    >
                      {day}
                    </div>
                  );
                }}
              />
            </S.Calendar>
            <S.NumberBox>
              <S.Num>인원</S.Num>
              <S.Number
                type="int"
                placeholder="인원을 입력해주세요"
                {...register("personnel")}
              />
              <S.Number2>명</S.Number2>
            </S.NumberBox>
          </S.Contents>
          <S.Error>{formState.errors.personnel?.message}</S.Error>

          <S.BtnWrapper type="submit" onClick={handleSubmit(onSubmitForm)}>
            예약하기
          </S.BtnWrapper>

          {showModal && (
            <Modal
              onClose={handleModalClose}
              date={date}
              data={formData}
              fetchClassDetail={props.data?.fetchClassDetail}
              onClickReservation={onClickReservation}
            />
          )}
          {showModal && <Backdrop onClick={handleModalClose} />}
        </form>
      </S.Wrapper>
    </>
  );
}
