import { MouseEventHandler, useState } from "react";
import * as S from "./wishList.styles";
import { useQuery } from "@apollo/client";
import { Money } from "../../../../commons/libraries/utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import {
  FETCH_CLASS_WISHLISTS_OF_MINE,
  FETCH_WISH_LISTS,
} from "../../../commons/hooks/useQueries/class/UseQueryFetchWishlists";

export default function WishList() {
  const router = useRouter();
  const [Contents, setContents] = useState(false);
  const { data, loading, refetch } = useQuery(FETCH_WISH_LISTS);
  const onClickWrite = () => {
    console.log(data);
  };

  ///////////////////////////////////////////////////////////////
  //  화면 없을때 이동
  //////////////////////////////////////////////////////////////

  const onClickMenu = () => {
    void router.push("/classPage");
  };

  ///////////////////////////////////////////////////////////////
  //  게시물 이동
  //////////////////////////////////////////////////////////////

  const onClickSubmit: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    const postId = target.id;
    router.push(`/classPage/${postId}`);
    console.log(postId);
  };

  return (
    <S.Wrapper>
      {loading ? (
        // 로딩 페이지 또는 대체 이미지를 보여줄 수 있는 JSX를 작성하세요
        // 예시: <div>로딩 중...</div>
        <div>
          <LoadingOutlined />
        </div>
      ) : !data || data.fetchWishlists.length === 0 ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>위시리스트 </S.ListName>
            <S.Icon src="/myPage/love-heart.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>아직 워시리스트가 없어요</S.Text>
            <S.MainText>클래스를 찾아 보실까요?</S.MainText>
            <S.Button onClick={onClickMenu}>클래스 찾아보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>위시리스트 </S.ListName>
            <S.Icon src="/myPage/love-heart.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.PremiumWrapper>
            {data?.fetchWishlists.map((post: any, index: any) => (
              <div key={index}>
                <S.PremiumPosts>
                  <S.PremiumPostBody id={post.class_id} onClick={onClickSubmit}>
                    <S.PremiumTemplate>
                      <S.PremiumPostImg src={post.url} />
                    </S.PremiumTemplate>
                    <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                    <S.PremiumPostContent>
                      <S.PremiumPostInfo>
                        <S.PremiumUser>{post.address}</S.PremiumUser>
                        <S.PremiumTime>
                          진행시간 : {post.total_time}
                        </S.PremiumTime>
                      </S.PremiumPostInfo>
                      <S.PremiumPriceTie>
                        <S.PremiumPrice>{Money(post.price)}</S.PremiumPrice>
                      </S.PremiumPriceTie>
                    </S.PremiumPostContent>
                  </S.PremiumPostBody>
                </S.PremiumPosts>
              </div>
            ))}
          </S.PremiumWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
