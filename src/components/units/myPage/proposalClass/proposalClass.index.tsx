import { MouseEventHandler, useState } from "react";
import * as S from "./proposalClass.styles";
import { useQuery } from "@apollo/client";
import { FETCH_RESERVATIONS_OF_USER } from "../../../commons/hooks/useQueries/class/UseQueryFetchReservationsOfUser";
import { Money } from "../../../../commons/libraries/utils";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function MypagePoint() {
  const router = useRouter();
  const [Contents, setContents] = useState(false);
  const { data, loading, refetch } = useQuery(FETCH_RESERVATIONS_OF_USER);

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
      ) : !data || data.fetchReservationsOfUser.length === 0 ? (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>내가 신청한 클래스</S.ListName>
            <S.Icon src="/myPage/basket.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.Box>
            <S.Emoji>🤔</S.Emoji>
            <S.Text>아직 신청한 클래스가 없어요</S.Text>
            <S.MainText>클래스를 찾아 보실까요?</S.MainText>
            <S.Button onClick={onClickMenu}>클래스 찾아보기</S.Button>
          </S.Box>
        </>
      ) : (
        <>
          <S.ListNameIconWrapper>
            <S.ListName>내가 신청한 클래스</S.ListName>
            <S.Icon src="/myPage/basket.png" />
          </S.ListNameIconWrapper>
          <S.Line />
          <S.PremiumWrapper>
            {data?.fetchReservationsOfUser.map((post: any, index: any) => (
              <S.Posts key={index}>
                <S.PremiumPosts>
                  <S.PremiumPostBody id={post.class_id} onClick={onClickSubmit}>
                    <S.PremiumTemplate>
                      <S.PremiumPostImg src={post.url} />
                    </S.PremiumTemplate>
                    <S.PremiumPostContent>
                      <S.PremiumPostTitle>{post.title}</S.PremiumPostTitle>
                      <S.PremiumPostInfo>
                        <S.PremiumUser>
                          생성자명 : <S.TextColor>{post.name}</S.TextColor>
                        </S.PremiumUser>
                        <S.PremiumAvatarContentTie>
                          <S.PremiumContent>
                            신청날짜 : {post.date}
                          </S.PremiumContent>
                          <S.PremiumContent>
                            신청인원 : {post.personnel}명
                          </S.PremiumContent>
                        </S.PremiumAvatarContentTie>
                      </S.PremiumPostInfo>
                    </S.PremiumPostContent>
                  </S.PremiumPostBody>
                </S.PremiumPosts>
              </S.Posts>
            ))}
          </S.PremiumWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
