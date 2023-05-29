import { gql, useMutation, useQuery } from "@apollo/client";

export const LOGOUT = gql`
  mutation {
    logout
  }
`;
