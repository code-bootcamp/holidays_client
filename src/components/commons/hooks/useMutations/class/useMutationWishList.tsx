import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_CLASS_WISHLISTS_OF_MINE } from "../../useQueries/class/UseQueryFetchWishlists";

const CREATE_WISHLIST = gql`
  mutation createWishlist($class_id: String!) {
    createWishlist(class_id: $class_id)
  }
`;

const DELETE_WISHLIST = gql`
  mutation deleteWishlist($class_id: String!) {
    deleteWishlist(class_id: $class_id)
  }
`;

export const UseMutationWishList = () => {
  const [createWishlist] = useMutation(CREATE_WISHLIST);
  const [deleteWishlist] = useMutation(DELETE_WISHLIST);

  const [isWishlistActive, setIsWishlistActive] = useState(false);

  const onClickCreateWishlist = async (class_id: any) => {
    try {
      const { data } = await createWishlist({
        variables: {
          class_id: class_id,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_WISHLISTS_OF_MINE,
            variables: { class_id: class_id },
          },
        ],
      });

      setIsWishlistActive(true);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDeleteWishlist = async (class_id: any) => {
    try {
      const { data } = await deleteWishlist({
        variables: {
          class_id: class_id,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_WISHLISTS_OF_MINE,
            variables: { class_id: class_id },
          },
        ],
      });
      setIsWishlistActive(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return {
    onClickCreateWishlist,
    onClickDeleteWishlist,
    isWishlistActive,
    setIsWishlistActive,
  };
};
