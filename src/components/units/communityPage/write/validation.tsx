import * as yup from "yup";

export const WriteProductSchema = yup.object({
  // name: yup
  //   .string()
  //   .required("제목을 입력하세요")
  //   .matches(/^.{1,30}$/, "제목은 30자 이하로 입력해주세요"),
  // description: yup.string().required("내용을 입력하세요"),
  // price: yup
  //   .number()
  //   .required("가격을 입력하세요")
  //   .positive("정의 되지 않는 값입니다.")
  //   .integer("정의 되지 않는 값입니다.")
  //   .transform((value) => (isNaN(value) ? undefined : value))
  //   .nullable(),
  // discountRate: yup
  //   .number()
  //   .required("할인율을 입력하세요")
  //   .transform((value) => (isNaN(value) ? undefined : value))
  //   .nullable(),
  // quantity: yup
  //   .number()
  //   .required("재고수량을 입력하세요")
  //   .transform((value) => (isNaN(value) ? undefined : value))
  //   .nullable(),
  // productCategoryId: yup.string().required("카테고리를 선택하세요"),
  // veganLevel: yup.number().required("비건 유형을 선택하세요"),
});
