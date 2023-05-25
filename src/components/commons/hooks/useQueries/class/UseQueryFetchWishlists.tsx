import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_CLASS_WISHLISTS_OF_MINE = gql`
  query fetchWishlistOfMine($class_id: String!) {
    fetchWishlistOfMine(class_id: $class_id)
  }
`;

export const UseQueryFetchWishLists = () => {
  const router = useRouter();
  console.log("router.query.class_id", router.query.class_id);
  const query = useQuery(FETCH_CLASS_WISHLISTS_OF_MINE, {
    variables: { class_id: router.query.class_id },
  });

  console.log(query, "###########");

  return query;
};
