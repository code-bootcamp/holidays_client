import { gql, useQuery } from "@apollo/client";

export const FECTCH_CLASS_OF_MINE = gql`
  query fetchClassesOfMine {
    fetchClassesOfMine {
      class_id
      title
      content_summary
      price
      total_time
      category
      address
      address_detail
      is_ad
      url
    }
  }
`;
