import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Select, theme } from "antd";
import { UseQueryFetchClassSchedules } from "../hooks/useQueries/class/useQueryFetchClassSchedules";

dayjs.extend(dayLocaleData);

const { Option } = Select;
let formattedDates: any[] = [];
let cellStyle = {};
let onClickDate: any;
let test = true;
interface ICalendarProps {
  selectedDates: any[];
  setSelectedDates: React.Dispatch<React.SetStateAction<never[]>>;
  isEdit: boolean;
}

const CalendarFunction = (props: ICalendarProps) => {
  const { token } = theme.useToken();
  const [selectedDays, setSelectedDays] = useState<Dayjs[]>([]);

  // -------------------------------------------

  const [date, setDate] = useState<string>("");

  const { data } = UseQueryFetchClassSchedules();
  // console.log("///////////////");
  // console.log(data);
  // console.log("///////////////");

  // console.log("###########");
  // 활성화되어야 하는 날짜값(예약 가능한 날짜들)
  // formattedDates = [];
  if (test) {
    data?.fetchClassSchedules.map((el: any) => {
      // console.log(el.date);
      // console.log("ggg");
      if (el.date !== onClickDate) {
        console.log("여기여기여기");
        formattedDates.push(el.date);
      } else {
        // onClickDate = "";
      }
      // console.log(formattedDates, "33333333333333333333");
      // selectedDays.push(el.date);
      // setSelectedDays(el.date)
      // console.log(el.date.format("YYMMDD"));
      // handleDaySelect(el.date);
    });

    test = false;
  }

  useEffect(() => {
    test = true;
  }, []);

  const disabledDate = (date: Dayjs) => {
    const formattedDate = date.format("YYMMDD");

    // 아래 다시 켜야 돼
    const currentDate = new Date();
    const sysDate =
      String(currentDate.getFullYear()).slice(-2) +
      String(currentDate.getMonth() + 1).padStart(2, "0") +
      String(currentDate.getDate()).padStart(2, "0");

    // 예약 가능한 날짜들을 배열로 저장
    const reservationDates = data?.fetchClassSchedules.map(
      (el: any) => el.date
    );

    cellStyle = reservationDates?.includes(formattedDate)
      ? { background: "orange", color: "white" }
      : {};

    // cellStyle = { background: "orange", color: "white" };
    // let cellStyle = { background: "orange", color: "white" }
    // 현재 날짜가 예약 가능한 날짜들 중에 포함되는 경우 활성화
    return (
      (!reservationDates?.includes(formattedDate) && formattedDate < sysDate) ||
      data?.fetchClassSchedules.find((el: any) => el.date === formattedDate)
        ?.remain <= 0
    );
  };

  // ---------------------------------
  // console.log("asdasdasdasdasds");
  // console.log(selectedDays);

  const onPanelChange = (value: Dayjs, mode: any) => {};

  const handleDaySelect = (value: Dayjs) => {
    const year = String(value.year()).slice(-2);
    const month = String(value.month() + 1).padStart(2, "0");
    const day = String(value.date()).padStart(2, "0");

    onClickDate = year + month + day;

    const selected = [...selectedDays];
    let isDaySelected = selected.some((day) => day.isSame(value, "day"));
    console.log(isDaySelected, "???");
    if (isDaySelected) {
      // console.log("여기 11111");
      const filtered = selected.filter((day) => !day.isSame(value, "day"));
      console.log(filtered, "여기 11111");
      let index = formattedDates.indexOf(onClickDate);
      // let idx = selectedDays.indexOf(value);
      formattedDates.splice(index, 1);
      selectedDays.length = 0;

      console.log(formattedDates);
      console.log(selected);
      console.log(selectedDays);
      console.log("111111111111111");
      setSelectedDays(filtered);
    } else {
      if (!formattedDates.includes(onClickDate)) {
        console.log("여기22222222");
        // console.log("&&&&&&&&&&&&&&&&&&&");
        selected.push(value);
        setSelectedDays(selected);
      } else {
        console.log("여기 33333333");
        let index = formattedDates.indexOf(onClickDate);
        let idx = selectedDays.indexOf(value);
        formattedDates.splice(index, 1);
        selectedDays.splice(idx, 1);
        console.log(formattedDates, "asdasdasdasd");
        console.log(selectedDays);
        // isDaySelected = false;
      }
      // onClickDate = "";
    }
    // console.log(formattedDates, "aknskdnaklsndlkandklnaskldnslkadnklandskl");
    // formattedDates.length = 0;
    // formattedDates = selected.map((day) => day.format("YYMMDD"));
    // console.log("formattedDates-1 :", formattedDates);
  };

  const wrapperStyle = {
    width: 300,
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

  const headerRender = ({ value, onChange }: any) => {
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
    // console.log(date);

    for (let i = 0; i < selectedDays.length; i++) {
      // console.log(selectedDays[i].format("YYMMDD"));
      if (!formattedDates.includes(date)) {
        console.log("여기타니>?");
        formattedDates.push(selectedDays[i].format("YYMMDD"));
      }
    }
    console.log("formattedDates-2 :", formattedDates);

    props.selectedDates.length = 0;
    for (let i = 0; i < formattedDates.length; i++) {
      if (!props.selectedDates.includes(formattedDates[i])) {
        props.selectedDates.push(formattedDates[i]);
      }
    }

    console.log("dd");
    console.log(props.selectedDates);
    console.log("dd");

    return (
      //   <div style={headerStyle}>
      //     <div>
      //       {year}년 {month}월
      //     </div>
      //     <div></div>
      //   </div>
      // );
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
  if (!props.isEdit) {
    return (
      <div style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          dateFullCellRender={(value) => {
            let day = value.date();

            let isSelected = selectedDays.some((selectedDay) =>
              selectedDay.isSame(value, "day")
            );
            let cellStyle = isSelected
              ? { background: "orange", color: "white" }
              : {};

            return (
              <div style={cellStyle} onClick={() => handleDaySelect(value)}>
                {day}
              </div>
            );
          }}
          onPanelChange={onPanelChange}
          headerRender={headerRender}
          disabledDate={(currentDate) => currentDate.isBefore(dayjs(), "day")} // 현재 날짜보다 이전 날짜는 비활성화.
        />
      </div>
    );
  } else {
    return (
      <>
        <div>
          <div>
            <div style={wrapperStyle}>
              <Calendar
                fullscreen={false}
                onPanelChange={onPanelChange}
                headerRender={headerRender}
                disabledDate={disabledDate} // 날짜 비활성화 함수 적용
                dateFullCellRender={(value) => {
                  const year = String(value.year()).slice(-2);
                  const month = String(value.month() + 1).padStart(2, "0");
                  const day = String(value.date()).padStart(2, "0");

                  const date = year + month + day;

                  let isSelected = selectedDays.some((selectedDay) =>
                    selectedDay.isSame(value, "day")
                  );

                  // console.log(formattedDates);
                  cellStyle =
                    isSelected || formattedDates.includes(date)
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
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CalendarFunction;
