import { gql, useQuery } from "@apollo/client";

export const FETCH_MAGAZINES = gql`
  query fetchMagazines($createdAt: Int!) {
    fetchMagazines(createdAt: $createdAt) {
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

export const UseQueryFetchMagazines = () => {
  const query = useQuery(FETCH_MAGAZINES, {
    variables: { createdAt: 202306 },
  });

  return query;
};
