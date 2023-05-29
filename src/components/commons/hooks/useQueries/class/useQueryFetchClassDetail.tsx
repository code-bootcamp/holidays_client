import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_CLASS_DETAIL = gql`
  query fetchClassDetail($class_id: String!) {
    fetchClassDetail(class_id: $class_id) {
      class_id
      title
      content_summary
      price
      class_mNum
      address
      address_detail
      category
      address_category
      total_time
      content
      accountNum
      accountName
      bankName
      is_ad
      image_ {
        image_id
        url
        type
        is_main
      }
      user_ {
        user_id
        name
        phone
        email
        type
      }
    }
  }
`;

export const UseQueryFetchClassDetail = () => {
  const router = useRouter();

  const query = useQuery(FETCH_CLASS_DETAIL, {
    variables: { class_id: router.query.class_id },
  });

  return query;
};
