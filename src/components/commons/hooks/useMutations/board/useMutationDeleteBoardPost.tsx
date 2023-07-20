import { useMutation, gql } from "@apollo/client";

export const DELETE_BOARD_POST = gql`
  mutation deleteBoardPost($board_id: String!) {
    deleteBoardPost(board_id: $board_id)
  }
`;

export const UseMutationDeleteBoardPost = () => {
  const mutation = useMutation(DELETE_BOARD_POST);
  return mutation;
};
