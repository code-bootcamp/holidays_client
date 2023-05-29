import { gql, useMutation } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      user_id
    }
  }
`;
