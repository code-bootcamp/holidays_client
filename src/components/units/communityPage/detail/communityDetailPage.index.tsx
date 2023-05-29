import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_DETAIL } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";
import { replaceImageTags } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import * as S from "./communityDetailPage.styles";

export default function communityDetailPage() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARD_DETAIL, {
    variables: { board_id: router.query.board_id },
  });

  // 이미지가 없을 경우에 대한 스타일 처리
  const titleImgStyle = data?.fetchBoardDetail?.image_[0]?.url
    ? undefined
    : { display: "none" };

  return (
    <>
      <S.Wrapper>
        <S.Title>{data?.fetchBoardDetail?.title}</S.Title>
        <S.UserTie>
          <S.UserName>{data?.fetchBoardDetail?.user_?.name}</S.UserName>
          <S.Time>2023.05.23</S.Time>
        </S.UserTie>
        <S.TitleImg
          src={data?.fetchBoardDetail?.image_[0]?.url}
          style={titleImgStyle}
        />
        <S.Line />
        <S.WrapperContents>
          <S.Contents
            dangerouslySetInnerHTML={
              data?.fetchBoardDetail?.content
                ? {
                    __html: DOMPurify.sanitize(data.fetchBoardDetail?.content),
                  }
                : undefined
            }
          />
        </S.WrapperContents>
        <S.Line />
        {/* <S.CommentWrite placeholder="댓글을 입력해 주세요" />
        <S.CommentBox>
          <S.CommentUser>최 팀장</S.CommentUser>
          <S.CommentTime>2023.05.23</S.CommentTime>
          <S.CommentContents>
            그때 댓글에 하시겠다던 분과는 매칭결과가 좋지 못하셨나봅니다. 또
            올리신 걸 보니..
          </S.CommentContents>
        </S.CommentBox>
        <S.Line /> */}
      </S.Wrapper>
    </>
  );
}
