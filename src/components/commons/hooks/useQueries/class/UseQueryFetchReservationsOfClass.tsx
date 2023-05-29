import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS_OF_CLASS = gql`
  query fetchReservationsOfClass {
    fetchReservationsOfClass {
      res_id
      name
      title
      date
      personnel
      class_id
      remain
      url
    }
  }
`;
