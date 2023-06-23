import { useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import * as S from "./BoardCommentList.styles";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../comment/BoardComment.index";
import { DELETE_BOARD_REVIEW } from "../../../commons/hooks/useMutations/board/useMutationUpdateBoardDelete";
import { FETCH_BOARD_REVIEWS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardReviews";

export default function BoardCommentListUIItem(props: any): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardReview] = useMutation(DELETE_BOARD_REVIEW);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    // const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardReview({
        variables: {
          br_id: props.el.br_id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_REVIEWS,
            variables: { board_id: router.query.board_id },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLImageElement>
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const handleCancel = () => {
    setIsOpenDeleteModal(false);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <div style={{ fontSize: "15px" }}>
            작성한 댓글을 삭제하시겠습니까?
          </div>
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.ItemWrapper key={props.el.br_id}>
          <S.FlexWrapper>
            <S.Tie1>
              <S.Tie2>
                <S.Username>{props.el.name}</S.Username>
                <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
              </S.Tie2>
              <S.OptionWrapper>
                <S.Edit onClick={onClickUpdate}>수정</S.Edit>
                <S.Delete onClick={onClickOpenDeleteModal}>삭제</S.Delete>
              </S.OptionWrapper>
            </S.Tie1>
            <S.MainWrapper>
              <S.WriterWrapper></S.WriterWrapper>
              <S.Contents>{props.el.content}</S.Contents>
            </S.MainWrapper>
          </S.FlexWrapper>
        </S.ItemWrapper>
      ) : (
        <>
          <BoardCommentWrite
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
          />
          {/* <S.BoardCommentCancel>수정 취소</S.BoardCommentCancel> */}
        </>
      )}
    </>
  );
}
