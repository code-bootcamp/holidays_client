import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_DETAIL } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";
import { replaceImageTags } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import * as S from "./communityDetailPage.styles";
import { UseMutationDeleteBoard } from "../../../commons/hooks/useMutations/board/useMutationDeleteBoard";
import { FECTCH_BOARDS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoards";

export default function communityDetailPage() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARD_DETAIL, {
    variables: { board_id: router.query.board_id },
  });

  const [deleteBoard] = UseMutationDeleteBoard();

  // 이미지가 없을 경우에 대한 스타일 처리
  const titleImgStyle = data?.fetchBoardDetail?.image_[0]?.url
    ? undefined
    : { display: "none" };

  ///////////////////////////////////////////////////////////////
  // 사랑방 수정하기 이동
  //////////////////////////////////////////////////////////////

  const onClickUpdate = () => {
    console.log(router.query.useditemId);
    router.push(`/communityPage/${router.query.board_id}/edit`);
  };

  ///////////////////////////////////////////////////////////////
  // 사랑방 리스트 이동
  //////////////////////////////////////////////////////////////

  const onClickBoard = () => {
    router.push(`/communityPage`);
  };

  ///////////////////////////////////////////////////////////////
  // 게시물 삭제
  //////////////////////////////////////////////////////////////

  const onClickDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const result = await deleteBoard({
      variables: { board_id: router.query.board_id },
      refetchQueries: [{ query: FECTCH_BOARDS }],
    });
    router.push(`/communityPage`);
  };

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
        <S.BottomWrapper>
          <S.Button onClick={onClickBoard}>목록으로</S.Button>
          <S.Button onClick={onClickUpdate}>수정하기</S.Button>
          <S.Button onClick={onClickDelete}>삭제하기</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
