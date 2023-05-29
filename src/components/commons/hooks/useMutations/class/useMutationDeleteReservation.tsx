import { gql } from "@apollo/client";

export const DELETE_RESERVATION = gql`
  mutation deleteReservation($res_id: String!) {
    deleteReservation(res_id: $res_id)
  }
`;
