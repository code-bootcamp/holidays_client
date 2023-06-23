import { gql, useQuery } from "@apollo/client";
import { string } from "yup";

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
