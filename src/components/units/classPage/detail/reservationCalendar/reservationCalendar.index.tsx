import { useEffect, useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import * as S from "./reservationCalendar.styles";
import { Calendar, theme } from "antd";
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

export default function CalendarUI(props: IReservationCreateProps) {
  const [date, setDate] = useState<string>("");

  const { data } = UseQueryFetchClassSchedules();

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
    await onClickReservation(value);
    setValue("personnel", "");
  };

  useEffect(() => {
    setValue("res_date", date);
  }, [date, setValue]);

  const { token } = theme.useToken();

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {};

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

  const headerRender = ({ value }: any) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    for (let i = start; i < end; i++) {
      monthOptions.push(<option key={`${i}`}>{i + 1}</option>);
    }

    const year = String(value.year()).slice(-2);
    const month = String(value.month() + 1).padStart(2, "0");
    const day = String(value.date()).padStart(2, "0");

    const date = year + month + day;

    setDate(date);

    return (
      <div style={headerStyle}>
        <div>
          {year}년 {month}월
        </div>
        <div>
          <select value={date} onChange={(event) => setDate(date)}>
            {monthOptions}
          </select>
        </div>
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

          <S.BtnWrapper type="submit">예약하기</S.BtnWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}
