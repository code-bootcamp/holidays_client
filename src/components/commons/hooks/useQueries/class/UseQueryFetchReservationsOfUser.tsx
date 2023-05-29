import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS_OF_USER = gql`
  query fetchReservationsOfUser {
    fetchReservationsOfUser {
      res_id
      name
      title
      date
      personnel
      class_id
      url
    }
  }
`;
