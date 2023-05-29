import * as yup from "yup";

export const reservationSchema = yup.object({
  personnel: yup
    .number()
    .required("인원을 입력해주세요")
    .typeError("숫자를 입력해주세요"),
});
