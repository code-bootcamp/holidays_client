import * as yup from "yup";

export const classReviewSchema = yup.object({
  content: yup.string().required("내용을 입력해주세요"),
});
