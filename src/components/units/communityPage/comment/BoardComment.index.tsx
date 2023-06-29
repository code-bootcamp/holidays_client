import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import * as B from "./BoardComment.styles";
import { UPDATE_BOARD_REVIEW } from "../../../commons/hooks/useMutations/board/useMutationUpdateBoardReview";
import { CREATE_BOARD_REVIEW } from "../../../commons/hooks/useMutations/board/useMutationCreateBoardReview";
import { FETCH_BOARD_REVIEWS } from "../../../commons/hooks/useQueries/board/UseQueryFetchBoardReviews";

export default function BoardComment(props: any): JSX.Element {
  const router = useRouter();
  const [content, setContents] = useState("");

  const [createBoardReview] = useMutation(CREATE_BOARD_REVIEW);

  const [updateBoardReview] = useMutation(UPDATE_BOARD_REVIEW);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.board_id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      await createBoardReview({
        variables: {
          createBoardReviewInput: {
            content,
            board_id: router.query.board_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_REVIEWS,
            variables: { board_id: router.query.board_id },
          },
        ],
      });
      alert("댓글등록");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setContents("");
  };

  const onClickUpdate = async (): Promise<void> => {
    if (content === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    try {
      // const updateBoardReviewInput: any = {};
      // if (content !== "") updateBoardReviewInput.content = content;
      // updateBoardReviewInput.br_id = props.el?.br_id;

      if (typeof props.el?.br_id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await updateBoardReview({
        variables: {
          updateBoardReviewInput: {
            content,
            br_id: props.el?.br_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_REVIEWS,
            variables: { board_id: router.query.board_id },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickExport = (): void => {
    props.setIsEdit?.(false);
  };

  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <B.Wrapper>
        <B.CardWrapper>
          <B.Body>
            <B.BodyInput
              placeholder="댓글을 입력해 주세요"
              onChange={onChangeContents}
              value={content !== "" ? content : props.el?.content ?? ""}
              maxLength={100}
              Active={props.isEdit === true}
            />
            <B.BodyNumberTie>
              <B.BodyButton
                onClick={props.isEdit === true ? onClickUpdate : onClickWrite}
                Active={props.isEdit === true}
              >
                {props.isEdit ? "수정하기" : "작성하기"}
              </B.BodyButton>
              {props.isEdit === true && (
                <B.Export onClick={onClickExport}>수정취소</B.Export>
              )}
            </B.BodyNumberTie>
          </B.Body>
        </B.CardWrapper>
      </B.Wrapper>
    </div>
  );
}
