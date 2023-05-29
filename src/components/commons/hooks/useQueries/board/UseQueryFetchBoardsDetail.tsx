import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD_DETAIL = gql`
  query fetchBoardDetail($board_id: String!) {
    fetchBoardDetail(board_id: $board_id) {
      board_id
      title
      content
      createdAt
      user_ {
        name
      }
      image_ {
        url
      }
    }
  }
`;
