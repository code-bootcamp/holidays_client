import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FECTCH_BOARDS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoards";
import { formatDateString } from "../../../../commons/libraries/utils";
import { MouseEventHandler } from "react";

import InfiniteScroll from "react-infinite-scroller";
import * as S from "./communityListPage.styles";

export default function communityListPage() {
  const router = useRouter();
  const { data, refetch, fetchMore } = useQuery(FECTCH_BOARDS);

  ///////////////////////////////////////////////////////////////
  // write 페이지로 이동
  //////////////////////////////////////////////////////////////

  const onClickWrite = () => {
    void router.push("/communityPage/write");
  };

  ///////////////////////////////////////////////////////////////
  //  게시물 이동
  //////////////////////////////////////////////////////////////

  const onClickSubmit: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    const postId = target.id;
    router.push(`/communityPage/${postId}`);
    console.log(postId);
  };

  ///////////////////////////////////////////////////////////////
  // 무한 스크롤
  //////////////////////////////////////////////////////////////

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  ///////////////////////////////////////////////////////////////
  // 대체 이미지
  //////////////////////////////////////////////////////////////
  const onErrorImg = (e: any) => {
    e.target.src = "/images/all-icon.png";
  };

  return (
    <S.Wrapper>
      <S.TitleTie>
        <S.Title>커뮤니티</S.Title>
        <S.Service onClick={onClickWrite}>
          <S.ServiceText>글쓰기</S.ServiceText>
        </S.Service>
      </S.TitleTie>
      <S.Line />
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.BodyWrapper>
          {data?.fetchBoards.map((post: any, index: any) => (
            <div key={index}>
              <S.Posts id={post.board_id} onClick={onClickSubmit}>
                <S.PostBody>
                  <S.Template>
                    <S.PostImg src={post.url} onError={onErrorImg} />
                  </S.Template>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostContent>
                    <S.PostInfo>
                      <S.Address>{post.name}</S.Address>
                    </S.PostInfo>
                    <S.PriceTie>
                      <S.Price>
                        Date : {formatDateString(post.createdAt)}
                      </S.Price>
                    </S.PriceTie>
                  </S.PostContent>
                </S.PostBody>
              </S.Posts>
            </div>
          ))}
        </S.BodyWrapper>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
