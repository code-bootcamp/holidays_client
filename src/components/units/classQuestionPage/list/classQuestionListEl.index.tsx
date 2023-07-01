import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/useQueries/user/UseQueryFetchLoginUser";
import * as S from "./classQuestionList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import {
  useMutationCreateInQuiry,
  useMutationCreateInQuirySubmit,
} from "../../../commons/hooks/useMutations/class/useMutationClassInQuiry";
import ClassQuestionWrite from "../write/classQuestionWrite.index";
import { UseQueryFetchClassDetail } from "../../../commons/hooks/useQueries/class/useQueryFetchClassDetail";

export default function ClassQuestionListEl(props: any) {
  // 로그인 여부 확인
  const { data: login } =
    useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  const { onClickDelete, isEdit2, setIsEdit2 } = useMutationCreateInQuiry();

  const handleEditClick = (ci_id: any) => {
    setIsEdit2(true);
  };

  const { data } = UseQueryFetchClassDetail();
  console.log("정희준바보");
  console.log(data);
  console.log("정희준바보");

  // --------------------------------

  return (
    <div>
      {!isEdit2 && (
        <S.Row>
          <S.Wrapper_header>
            <S.Wrapper_header_top>
              <S.ReviewWriter>{props.el.name}</S.ReviewWriter>

              <S.BtnWrapper>
                {login?.fetchLoginUser.name === props.el.name && (
                  <>
                    <S.UpdateBtn
                      onClick={() => handleEditClick(props.el.ci_id)}
                    >
                      수정
                    </S.UpdateBtn>
                    <S.DeleteBtn onClick={() => onClickDelete(props.el.ci_id)}>
                      삭제
                    </S.DeleteBtn>
                  </>
                )}
              </S.BtnWrapper>
            </S.Wrapper_header_top>
            <S.Date>{getDate(props.el.createdAt)}</S.Date>
          </S.Wrapper_header>

          {login?.fetchLoginUser.name === props.el.name ||
          login?.fetchLoginUser.name === data?.fetchClassDetail.user_.name ? (
            <S.Contents>{props.el.content}</S.Contents>
          ) : (
            <S.Contents>비밀글 입니다.</S.Contents>
          )}
        </S.Row>
      )}

      {isEdit2 && (
        <ClassQuestionWrite
          isEdit2={isEdit2}
          setIsEdit2={setIsEdit2}
          el={props.el}
        />
      )}
    </div>
  );
}
