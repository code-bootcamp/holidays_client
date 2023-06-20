import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../../commons/types/generated/types";

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!) {
    updateBoard(updateBoardInput: $updateBoardInput)
  }
`;

export const UseMutationUpdateBoard = () => {
  const mutation = useMutation(UPDATE_BOARD);
  return mutation;
};
