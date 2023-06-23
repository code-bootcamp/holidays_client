import { useMutation, gql } from "@apollo/client";

export const UPDATE_BOARD_REVIEW = gql`
  mutation updateBoardReview($updateBoardReviewInput: UpdateBoardReviewInput!) {
    updateBoardReview(updateBoardReviewInput: $updateBoardReviewInput)
  }
`;
