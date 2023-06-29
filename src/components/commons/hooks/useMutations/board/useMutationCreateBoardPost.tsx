import { useMutation, gql } from "@apollo/client";

export const CREATE_BOARD_POST = gql`
  mutation createBoardPost($board_id: String!) {
    createBoardPost(board_id: $board_id)
  }
`;

export const UseMutationCreateBoardPost = () => {
  const mutation = useMutation(CREATE_BOARD_POST);
  return mutation;
};
