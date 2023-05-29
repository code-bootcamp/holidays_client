import { gql, useQuery } from "@apollo/client";

export const FECTCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine {
    fetchBoardsOfMine {
      board_id
      title
      content
      createdAt
      name
      url
    }
  }
`;
