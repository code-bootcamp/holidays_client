import { gql, useMutation, useQuery } from "@apollo/client";

export const DELETE_USER = gql`
  mutation {
    deleteUser
  }
`;
