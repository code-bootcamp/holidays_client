import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchClassReviewsArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_CLASS_INQUIRIES = gql`
  query fetchClassInquiries($class_id: String!, $page: Int = 1) {
    fetchClassInquiries(class_id: $class_id, page: $page) {
      ci_id
      name
      content
      createdAt
    }
  }
`;

export const UseQueryFetchClassInQuiries = () => {
  const router = useRouter();

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchClassInquiries">,
    IQueryFetchClassReviewsArgs
  >(FETCH_CLASS_INQUIRIES, {
    variables: {
      class_id: String(router.query.class_id),
      page: 1,
    },
  });

  return { data, refetch, fetchMore };
};
