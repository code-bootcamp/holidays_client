import { useMutation, gql } from "@apollo/client";

export const DELETE_BOARD_REVIEW = gql`
  mutation deleteBoardReview($br_id: String!) {
    deleteBoardReview(br_id: $br_id)
  }
`;
