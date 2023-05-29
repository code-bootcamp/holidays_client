import { gql, useQuery } from "@apollo/client";

export const FECTCH_BOARDS = gql`
  query fetchBoards($page: Int = 1) {
    fetchBoards(page: $page) {
      board_id
      title
      content
      createdAt
      name
      url
    }
  }
`;
