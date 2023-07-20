import { gql, useQuery } from "@apollo/client";
import { string } from "yup";
import { IQuery } from "../../../../../commons/types/generated/types";
import { IQueryFetchClassesArgs } from "../../../../../commons/types/generated/types";

export const FETCH_CLASSES: any = gql`
  query fetchClasses(
    $category: String = ""
    $address_category: String = ""
    $search: String = ""
    $page: Int = 1
  ) {
    fetchClasses(
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

export const useQueryFetchClasses = (
  category: any,
  addressCategory: any,
  writer: any
) => {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchClasses">,
    IQueryFetchClassesArgs
  >(FETCH_CLASSES, {
    variables: {
      category: category,
      address_category: addressCategory,
      search: writer,
    },
  });
  return {
    data,
    refetch,
    fetchMore,
  };
};
