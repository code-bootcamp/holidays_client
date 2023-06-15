import { UseMutationClassReview } from "../../../commons/hooks/useMutations/class/useMutationReview";
import ClassReviewWrite from "../write/classReviewWrite.index";
import * as S from "./classReviewList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/useQueries/user/UseQueryFetchLoginUser";
import { FETCH_RESERVATIONS_OF_USER } from "../../../commons/hooks/useQueries/class/UseQueryFetchReservationsOfUser";

export default function ClassReviewListEl(props: any) {
  // 로그인 여부 확인
  const { data: login } =
    useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  // --------------------------------------------------------

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
                {login?.fetchLoginUser.name === props.el.name && (
                  <>
                    <S.UpdateBtn
                      onClick={() => handleEditClick(props.el.cr_id)}
                    >
                      수정
                    </S.UpdateBtn>
                    <S.DeleteBtn onClick={() => onClickDelete(props.el.cr_id)}>
                      삭제
                    </S.DeleteBtn>
                  </>
                )}
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
