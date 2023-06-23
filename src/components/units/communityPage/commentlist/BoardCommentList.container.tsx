import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_REVIEWS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardReviews";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();

  if (typeof router.query.board_id !== "string") return <></>;

  const { data, fetchMore } = useQuery(FETCH_BOARD_REVIEWS, {
    variables: { board_id: router.query.board_id },
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardReviews.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoardReviews === undefined)
          return { fetchBoardReviews: [...prev.fetchBoardReviews] };

        return {
          fetchBoardReviews: [
            ...prev.fetchBoardReviews,
            ...fetchMoreResult.fetchBoardReviews,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
