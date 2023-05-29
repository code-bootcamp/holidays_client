import { useEffect, useState } from "react";
import { IFetchClassReviews } from "../../../../commons/types/generated/types";
import { UseQueryFetchClassReview } from "../../../commons/hooks/useQueries/class/useQueryFetchClassReview";
import * as S from "./classReviewList.styles";
import ClassReviewListEl from "./classReviewListEl.index";
import InfiniteScroll from "react-infinite-scroller";

export interface IClassReviewListProps {
  el?: IFetchClassReviews;
  data: any;
}

export default function ClassReviewList(props: IClassReviewListProps) {
  const [divHeight, setDivHeight] = useState("auto");

  useEffect(() => {
    if (props.data && props.data.fetchClassReviews.length == 1) {
      setDivHeight("120px"); // height 값을 200px로 업데이트합니다.
    } else if (props.data && props.data.fetchClassReviews.length == 2) {
      setDivHeight("240px");
    } else if (props.data && props.data.fetchClassReviews.length == 3) {
      setDivHeight("360px");
    } else if (props.data && props.data.fetchClassReviews.length == 4) {
      setDivHeight("480px");
    } else if (props.data && props.data.fetchClassReviews.length > 4) {
      setDivHeight("500px");
    } else {
      setDivHeight("auto");
    }
  }, [props.data]);

  const { data, fetchMore } = UseQueryFetchClassReview();

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchClassReviews.length / 5) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchClassReviews === undefined) {
          return {
            fetchClassReviews: [...prev.fetchClassReviews],
          };
        }
        return {
          fetchClassReviews: [
            ...prev.fetchClassReviews,
            ...fetchMoreResult.fetchClassReviews,
          ],
        };
      },
    });
  };

  return (
    <>
      <S.Wrapper>
        <S.Box
          style={{
            height: divHeight,
          }}
        >
          <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
            {props.data &&
              props.data.fetchClassReviews.map(
                (el: IFetchClassReviews, index: any) => (
                  <ClassReviewListEl el={el} index={index} />
                )
              )}
          </InfiniteScroll>
        </S.Box>
      </S.Wrapper>
    </>
  );
}
