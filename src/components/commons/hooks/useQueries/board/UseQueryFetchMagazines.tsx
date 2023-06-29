import { gql, useQuery } from "@apollo/client";

export const FETCH_MAGAZINES = gql`
  query fetchMagazines {
    fetchMagazines {
      board_id
      title
      content
      createdAt
      name
      url
      row_count
    }
  }
`;
