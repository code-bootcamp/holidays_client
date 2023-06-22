import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import { Calendar, Select, theme } from "antd";

dayjs.extend(dayLocaleData);

const { Option } = Select;

interface ICalendarProps {
  selectedDates: any[];
  setSelectedDates: React.Dispatch<React.SetStateAction<never[]>>;
}

const CalendarFunction = (props: ICalendarProps) => {
  const { token } = theme.useToken();
  const [selectedDays, setSelectedDays] = useState<Dayjs[]>([]);

  console.log(selectedDays);

  const onPanelChange = (value: Dayjs, mode: any) => {};

  const handleDaySelect = (value: Dayjs) => {
    const selected = [...selectedDays];
    const isDaySelected = selected.some((day) => day.isSame(value, "day"));

    if (isDaySelected) {
      const filtered = selected.filter((day) => !day.isSame(value, "day"));
      setSelectedDays(filtered);
    } else {
      selected.push(value);
      setSelectedDays(selected);
    }

    const formattedDates = selected.map((day) => day.format("YYMMDD"));
    console.log("formattedDates-1 :", formattedDates);
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
    console.log(date);

    const formattedDates = selectedDays.map((day) => day.format("YYMMDD"));
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
      <div style={headerStyle}>
        <div>
          {year}년 {month}월
        </div>
        <div></div>
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        dateFullCellRender={(value) => {
          const day = value.date();

          const isSelected = selectedDays.some((selectedDay) =>
            selectedDay.isSame(value, "day")
          );
          const cellStyle = isSelected
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
};

export default CalendarFunction;
