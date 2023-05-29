import MultipleDatePicker from "react-multiple-datepicker";
import * as S from "../../units/classPage/write/classWrite.styles";

interface ICalendarProps {
  selectedDates: any[];
  setSelectedDates: React.Dispatch<React.SetStateAction<never[]>>;
}

export default function Calendar(props: ICalendarProps) {
  const handleDateSelect = (dates: any) => {
    const formattedDates = dates.map((date: any) => formatDate(date));
    for (let i = 0; i < formattedDates.length; i++) {
      props.selectedDates.push(formattedDates[i]);
    }
  };

  const formatDate = (date: any) => {
    const year = date.getFullYear().toString().slice(2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}${month}${day}`;
  };

  // -------

  return (
    <>
      <MultipleDatePicker onSubmit={handleDateSelect} minDate={new Date()} />

      <S.DatelistWrapper>
        {props.selectedDates.map((date) => (
          <S.Datelist key={date}>{date}</S.Datelist>
        ))}
      </S.DatelistWrapper>
    </>
  );
}
