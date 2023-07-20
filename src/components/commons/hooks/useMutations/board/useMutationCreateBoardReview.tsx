import { useMutation, gql } from "@apollo/client";

export const CREATE_BOARD_REVIEW = gql`
  mutation createBoardReview($createBoardReviewInput: CreateBoardReviewInput!) {
    createBoardReview(createBoardReviewInput: $createBoardReviewInput)
  }
`;
