import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_CLASS_SCHEDULES,
  UseQueryFetchClassSchedules,
} from "../../useQueries/class/useQueryFetchClassSchedules";
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
      console.log(schedules);
      console.log(data);
      let is_schedule = false;
      for (let i = 0; i < schedules.length; i++) {
        if (schedules[i].date == data.res_date.replace("월", "")) {
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
              res_date: data.res_date.replace("월", ""),
              personnel: Number(data.personnel),
            },
          },
          refetchQueries: [
            { query: FETCH_RESERVATIONS_OF_CLASS },
            { query: FECTCH_CLASS_OF_MINE },
            {
              query: FETCH_CLASS_SCHEDULES,
              variables: { class_id: router.query.class_id },
            },
          ],
        });
        alert("예약 완료");
        void router.push(`/myPage/proposalClass`);
      } else {
        alert("예약이 불가능합니다. 자세한 사항은 문의하기를 이용하세요.");
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickReservation,
  };
};
