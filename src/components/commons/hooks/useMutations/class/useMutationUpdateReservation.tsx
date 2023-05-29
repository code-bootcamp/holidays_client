import { gql } from "@apollo/client";

export const UPDATE_RESERVATION = gql`
  mutation updateReservation($rse_id: String!) {
    updateReservation(rse_id: $rse_id)
  }
`;
