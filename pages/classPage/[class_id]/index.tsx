import { useState } from "react";
import { UseQueryFetchClassReview } from "../../../src/components/commons/hooks/useQueries/class/useQueryFetchClassReview";
import ClassDetail from "../../../src/components/units/classPage/detail/classDetail.index";
import ClassQuestionWrite from "../../../src/components/units/classQuestionPage/write/classQuestionWrite.index";
import ClassReviewList from "../../../src/components/units/classReviewPage/list/classReviewList.index";
import ClassReviewWrite from "../../../src/components/units/classReviewPage/write/classReviewWrite.index";
import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";
import ClassQuestionList from "../../../src/components/units/classQuestionPage/list/classQuestionList.index";
import { UseQueryFetchClassInQuiries } from "../../../src/components/commons/hooks/useQueries/class/useQueryFetchClassInQuiries";

export default function ClassDetailPage(): JSX.Element {
  useAuth01();

  const { data } = UseQueryFetchClassReview();
  const [isEdit, setIsEdit] = useState(false);

  const { data: questionData } = UseQueryFetchClassInQuiries();

  const [isEdit2, setIsEdit2] = useState(false);

  return (
    <>
      <ClassDetail />
      <ClassReviewWrite isEdit={false} setIsEdit={setIsEdit} />
      <ClassReviewList data={data} />

      <ClassQuestionWrite isEdit2={false} setIsEdit2={setIsEdit} />
      <ClassQuestionList data={questionData} />
    </>
  );
}
