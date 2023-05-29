import { UseMutationClassReview } from "../../../commons/hooks/useMutations/class/useMutationReview";
import ClassReviewWrite from "../write/classReviewWrite.index";
import * as S from "./classReviewList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function ClassReviewListEl(props: any) {
  const { onClickDelete, isEdit, setIsEdit } = UseMutationClassReview();

  const handleEditClick = (cr_id: any) => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <S.Row>
          <S.Wrapper_header>
            <S.Wrapper_header_top>
              <S.ReviewWriter>{props.el.name}</S.ReviewWriter>
              <S.Star value={props.el.grade} />
              <S.BtnWrapper>
                <S.UpdateBtn onClick={() => handleEditClick(props.el.cr_id)}>
                  수정
                </S.UpdateBtn>
                <S.DeleteBtn onClick={() => onClickDelete(props.el.cr_id)}>
                  삭제
                </S.DeleteBtn>
              </S.BtnWrapper>
            </S.Wrapper_header_top>
            <S.Date>{getDate(props.el.createdAt)}</S.Date>
          </S.Wrapper_header>
          <S.Contents>{props.el.content}</S.Contents>
        </S.Row>
      )}

      {isEdit && (
        <ClassReviewWrite isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
