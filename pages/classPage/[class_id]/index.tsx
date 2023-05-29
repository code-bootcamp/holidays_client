import { useState } from "react";
import { UseQueryFetchClassReview } from "../../../src/components/commons/hooks/useQueries/class/useQueryFetchClassReview";
import ClassDetail from "../../../src/components/units/classPage/detail/classDetail.index";
import ClassQuestionUI from "../../../src/components/units/classQuestionPage/classQuestion.index";
import ClassReviewList from "../../../src/components/units/classReviewPage/list/classReviewList.index";
import ClassReviewWrite from "../../../src/components/units/classReviewPage/write/classReviewWrite.index";
import { useAuth01 } from "../../../src/components/commons/hooks/useAuths/useAuth01";

export default function ClassDetailPage(): JSX.Element {
  useAuth01();

  const { data } = UseQueryFetchClassReview();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <ClassDetail />
      <ClassReviewWrite isEdit={false} setIsEdit={setIsEdit} />
      <ClassReviewList data={data} />
      <ClassQuestionUI />
    </>
  );
}
