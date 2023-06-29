import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_DETAIL } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardsDetail";
import { Days, replaceImageTags } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import * as S from "./communityDetailPage.styles";
import { UseMutationDeleteBoard } from "../../../commons/hooks/useMutations/board/useMutationDeleteBoard";
import { FECTCH_BOARDS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoards";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/useQueries/user/UseQueryFetchLoginUser";
import BoardCommentList from "../commentlist/BoardCommentList.container";
import BoardComment from "../comment/BoardComment.index";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import dynamic from "next/dynamic";

const Viewer = dynamic(
  async () => await import("@toast-ui/react-editor").then((mod) => mod.Viewer),
  {
    ssr: false,
  }
);

export default function communityDetailPage() {
  const router = useRouter();
  const { data, refetch, loading } = useQuery(FETCH_BOARD_DETAIL, {
    variables: { board_id: router.query.board_id },
  });
  const { data: LoginUser } = useQuery(FETCH_LOGIN_USER);

  const [deleteBoard] = UseMutationDeleteBoard();

  // 이미지가 없을 경우에 대한 스타일 처리
  const titleImgStyle = data?.fetchBoardDetail?.image_[0]?.url
    ? undefined
    : { display: "none" };

  ///////////////////////////////////////////////////////////////
  // 사랑방 수정하기 이동
  //////////////////////////////////////////////////////////////

  const onClickUpdate = () => {
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <S.Wrapper>
          <S.Title>{data?.fetchBoardDetail?.title}</S.Title>
          <S.UserButtonTie>
            <S.UserTie>
              <S.UserName>{data?.fetchBoardDetail?.user_?.name}</S.UserName>
              <S.Time>{Days(data?.fetchBoardDetail?.createdAt)}</S.Time>
            </S.UserTie>
            <S.LikeButton>20 좋아요</S.LikeButton>
          </S.UserButtonTie>
          <S.TitleImg
            src={data?.fetchBoardDetail?.image_[0]?.url}
            style={titleImgStyle}
          />
          <S.Line />
          <S.WrapperContents>
            <Viewer initialValue={data?.fetchBoardDetail?.content || ""} />
          </S.WrapperContents>
          <S.Line />

          <BoardComment />
          <BoardCommentList />

          <S.Line />
          <S.BottomWrapper>
            <S.Button onClick={onClickBoard}>목록으로</S.Button>
            {LoginUser?.fetchLoginUser?.email ===
            data?.fetchBoardDetail?.user_?.email ? (
              <S.Button onClick={onClickUpdate}>수정하기</S.Button>
            ) : (
              <S.Button className="Edit">수정하기</S.Button>
            )}
            {LoginUser?.fetchLoginUser?.email ===
            data?.fetchBoardDetail?.user_?.email ? (
              <S.Button onClick={onClickDelete}>삭제하기</S.Button>
            ) : (
              <S.Button className="Edit">삭제하기</S.Button>
            )}
          </S.BottomWrapper>
        </S.Wrapper>
      )}
    </>
  );
}
