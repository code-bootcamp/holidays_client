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
let init = true;
interface ICalendarProps {
  selectedDates: any[];
  setSelectedDates: React.Dispatch<React.SetStateAction<never[]>>;
  isEdit: boolean;
  class_mNum: any;
  remain: any[];
  date: any[];
  cs_id: any[];
}

const CalendarFunction = (props: ICalendarProps) => {
  const { token } = theme.useToken();
  const [selectedDays, setSelectedDays] = useState<Dayjs[]>([]);

  const [date, setDate] = useState<string>("");

  const { data } = UseQueryFetchClassSchedules();

  if (init && props.isEdit) {
    data?.fetchClassSchedules.map((el: any) => {
      if (el.date !== onClickDate) {
        formattedDates.push(el.date);
      } else {
        // onClickDate = "";
      }
    });

    init = false;
  }

  useEffect(() => {
    init = true;
    formattedDates = [];
  }, []);

  const disabledDate = (date: Dayjs) => {
    const formattedDate = date.format("YYMMDD");

    const currentDate = new Date();
    const sysDate =
      String(currentDate.getFullYear()).slice(-2) +
      String(currentDate.getMonth() + 1).padStart(2, "0") +
      String(currentDate.getDate()).padStart(2, "0");

    const reservationDates = data?.fetchClassSchedules.map(
      (el: any) => el.date
    );

    cellStyle = reservationDates?.includes(formattedDate)
      ? { background: "orange", color: "white" }
      : {};

    return (
      (!reservationDates?.includes(formattedDate) && formattedDate < sysDate) ||
      data?.fetchClassSchedules.find((el: any) => el.date === formattedDate)
        ?.remain <= 0
    );
  };

  const onPanelChange = (value: Dayjs, mode: any) => {};

  const handleDaySelect = (value: Dayjs) => {
    const year = String(value.year()).slice(-2);
    const month = String(value.month() + 1).padStart(2, "0");
    const day = String(value.date()).padStart(2, "0");

    onClickDate = year + month + day;

    if (props.isEdit) {
      const result = data?.fetchClassSchedules;

      for (let i = 0; i < result.length; i++) {
        if (result[i].date === onClickDate) {
          if (result[i].remain !== props.class_mNum) {
            alert("예약자가 있어 수정이 불가능 합니다.");

            return;
          }
        }
      }
    }

    const selected = [...selectedDays];
    let isDaySelected = selected.some((day) => day.isSame(value, "day"));

    if (isDaySelected) {
      const filtered = selected.filter((day) => !day.isSame(value, "day"));

      let index = formattedDates.indexOf(onClickDate);

      formattedDates.splice(index, 1);
      selectedDays.length = 0;

      setSelectedDays(filtered);
    } else {
      if (!formattedDates.includes(onClickDate)) {
        selected.push(value);
        setSelectedDays(selected);
      } else {
        formattedDates = formattedDates.filter(
          (v, i) => formattedDates.indexOf(v) === i
        );
        let index = formattedDates.indexOf(onClickDate);
        let idx = selectedDays.indexOf(value);

        formattedDates.splice(index, 1);
        selectedDays.splice(idx, 1);
      }
    }
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

    for (let i = 0; i < selectedDays.length; i++) {
      if (!formattedDates.includes(date)) {
        formattedDates.push(selectedDays[i].format("YYMMDD"));
      }
    }
    formattedDates = formattedDates.filter(
      (v, i) => formattedDates.indexOf(v) === i
    );

    const result = data?.fetchClassSchedules;
    props.selectedDates.length = 0;
    for (let i = 0; i < formattedDates.length; i++) {
      if (!props.selectedDates.includes(formattedDates[i])) {
        if (props.isEdit) {
          for (let j = 0; j < result.length; j++) {
            if (result[j].date === formattedDates[i]) {
              if (!props.date.includes(formattedDates[i])) {
                props.date.push(formattedDates[i]);
              }

              if (!props.cs_id.includes(result[j].cs_id)) {
                props.remain.push(result[j].remain);
                props.cs_id.push(result[j].cs_id);
              }
            }
          }
        }
        props.selectedDates.push(formattedDates[i]);
      }
    }

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
          disabledDate={(currentDate) => currentDate.isBefore(dayjs(), "day")}
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
                disabledDate={disabledDate}
                dateFullCellRender={(value) => {
                  const year = String(value.year()).slice(-2);
                  const month = String(value.month() + 1).padStart(2, "0");
                  const day = String(value.date()).padStart(2, "0");

                  const date = year + month + day;

                  let isSelected = selectedDays.some((selectedDay) =>
                    selectedDay.isSame(value, "day")
                  );

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
