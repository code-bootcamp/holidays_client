import { gql, useQuery } from "@apollo/client";
import { string } from "yup";

export const FETCH_CLASSES_AD: any = gql`
  query fetchClassesAd(
    $category: String = ""
    $address_category: String = ""
    $search: String = ""
  ) {
    fetchClassesAd(
      category: $category
      address_category: $address_category
      search: $search
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
