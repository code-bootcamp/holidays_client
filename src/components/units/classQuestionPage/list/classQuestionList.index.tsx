import * as S from "./classQuestionList.styles";
import { UseQueryFetchClassInQuiries } from "../../../commons/hooks/useQueries/class/useQueryFetchClassInQuiries";
import InfiniteScroll from "react-infinite-scroller";
import { IFetchClassInquiries } from "../../../../commons/types/generated/types";
import ClassQuestionListEl from "./classQuestionListEl.index";
import { useEffect, useState } from "react";

export interface IClassQuestionListProps {
  el?: IFetchClassInquiries;
  data: any;
}

export default function ClassQuestionList(props: IClassQuestionListProps) {
  const [divHeight, setDivHeight] = useState("auto");

  useEffect(() => {
    if (props.data && props.data.fetchClassInquiries.length > 4) {
      setDivHeight("500px");
    } else {
      setDivHeight("auto");
    }
  }, [props.data]);

  const { data, fetchMore } = UseQueryFetchClassInQuiries();

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchClassInquiries.length / 5) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchClassInquiries === undefined) {
          return {
            fetchClassInquiries: [...prev.fetchClassInquiries],
          };
        }
        return {
          fetchClassInquiries: [
            ...prev.fetchClassInquiries,
            ...fetchMoreResult.fetchClassInquiries,
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
              props.data.fetchClassInquiries.map(
                (el: IFetchClassInquiries, index: any) => (
                  <ClassQuestionListEl el={el} index={index} />
                )
              )}
          </InfiniteScroll>
        </S.Box>
      </S.Wrapper>
    </>
  );
}
