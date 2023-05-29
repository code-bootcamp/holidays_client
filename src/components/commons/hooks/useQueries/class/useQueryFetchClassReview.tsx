import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchClassReviewsArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_CLASS_REVIEWS = gql`
  query fetchClassReviews($class_id: String!, $page: Int = 1) {
    fetchClassReviews(class_id: $class_id, page: $page) {
      cr_id
      name
      grade
      content
      createdAt
    }
  }
`;

export const UseQueryFetchClassReview = () => {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchClassReviews">,
    IQueryFetchClassReviewsArgs
  >(FETCH_CLASS_REVIEWS, {
    variables: {
      class_id: String(router.query.class_id),
      page: 1,
    },
  });

  return { data, refetch, fetchMore };
};
