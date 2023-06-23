import { gql, useQuery } from "@apollo/client";

export const FETCH_BOARD_REVIEWS = gql`
  query fetchBoardReviews($board_id: String!, $page: Int = 1) {
    fetchBoardReviews(board_id: $board_id, page: $page) {
      br_id
      name
      content
      createdAt
    }
  }
`;
