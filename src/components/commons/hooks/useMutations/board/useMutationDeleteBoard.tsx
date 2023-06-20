import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../../commons/types/generated/types";

export const DELETE_BOARD = gql`
  mutation deleteBoard($board_id: String!) {
    deleteBoard(board_id: $board_id)
  }
`;

export const UseMutationDeleteBoard = () => {
  const mutation = useMutation(DELETE_BOARD);
  return mutation;
};
