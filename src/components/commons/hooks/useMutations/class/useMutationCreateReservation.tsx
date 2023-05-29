import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { UseQueryFetchClassSchedules } from "../../useQueries/class/useQueryFetchClassSchedules";
import { IFormData } from "../../../../units/classPage/detail/reservationCalendar/reservationCalendar.types";
import { FETCH_RESERVATIONS_OF_CLASS } from "../../useQueries/class/UseQueryFetchReservationsOfClass";
import { FECTCH_CLASS_OF_MINE } from "../../useQueries/class/UseQueryFetchClassesOfMine";
export const CREATE_RESERVATION = gql`
  mutation createReservation($createReservationInput: CreateReservationInput!) {
    createReservation(createReservationInput: $createReservationInput)
  }
`;

export const UseMutationReservation = () => {
  const [createReservation] = useMutation(CREATE_RESERVATION);

  const schedules = UseQueryFetchClassSchedules().data?.fetchClassSchedules;

  const router = useRouter();

  const onClickReservation = async (data: IFormData) => {
    try {
      let is_schedule = false;
      for (let i = 0; i < schedules.length; i++) {
        if (schedules[i].date == data.res_date) {
          if (schedules[i].remain - Number(data.personnel) >= 0) {
            is_schedule = true;
          }
        }
      }
      if (is_schedule) {
        const result = await createReservation({
          variables: {
            createReservationInput: {
              class_id: router.query.class_id,
              res_date: data.res_date,
              personnel: Number(data.personnel),
            },
          },
          refetchQueries: [
            { query: FETCH_RESERVATIONS_OF_CLASS },
            { query: FECTCH_CLASS_OF_MINE },
          ],
        });
        alert("예약 완료");
      } else {
        alert(
          "예약이 불가능한 날짜 입니다 자세한 사항은 문의하기를 이용하세요."
        );
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickReservation,
  };
};
