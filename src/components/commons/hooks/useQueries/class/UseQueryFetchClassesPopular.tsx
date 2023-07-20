import { gql, useQuery } from "@apollo/client";
import { string } from "yup";
import {
  IQuery,
  IQueryFetchClassesPopularArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_CLASSES_POPULAR: any = gql`
  query fetchClassesPopular(
    $category: String = ""
    $address_category: String = ""
    $search: String = ""
    $page: Int = 1
  ) {
    fetchClassesPopular(
      category: $category
      address_category: $address_category
      search: $search
      page: $page
    ) {
      class_id
      title
      content_summary
      price
      total_time
      address
      address_detail
      url
      category
    }
  }
`;

export const UseQueryFetchClassesPopular = (
  category: any,
  addressCategory: any,
  writer: any
) => {
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchClassesPopular">,
    IQueryFetchClassesPopularArgs
  >(FETCH_CLASSES_POPULAR, {
    variables: {
      category: category,
      address_category: addressCategory,
      search: writer,
    },
  });

  const onLoadMore = (): void => {
    if (data === undefined || data?.fetchClassesPopular === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchClassesPopular.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchClassesPopular === undefined) {
          return {
            fetchClassesPopular: [...prev.fetchClassesPopular],
          };
        }
        return {
          fetchClassesPopular: [
            ...prev.fetchClassesPopular,
            ...fetchMoreResult.fetchClassesPopular,
          ],
        };
      },
    });
  };
  return {
    data,
    onLoadMore,
    refetch,
  };
};
