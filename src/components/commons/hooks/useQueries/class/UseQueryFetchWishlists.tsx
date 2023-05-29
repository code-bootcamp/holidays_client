import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_CLASS_WISHLISTS_OF_MINE = gql`
  query fetchWishlistOfMine($class_id: String!) {
    fetchWishlistOfMine(class_id: $class_id)
  }
`;

export const FETCH_WISH_LISTS = gql`
  query fetchWishlists {
    fetchWishlists {
      class_id
      title
      price
      total_time
      address
      address_detail
      url
    }
  }
`;

export const UseQueryFetchWishLists = () => {
  const router = useRouter();

  const query = useQuery(FETCH_CLASS_WISHLISTS_OF_MINE, {
    variables: { class_id: router.query.class_id },
  });

  return query;
};
