import * as yup from "yup";

export const SignUpSchema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일을 입력해주세요."),
  pwd: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].{7,16}$/,
      "영문 대/소문자+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("pwd")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 확인해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
  phone: yup.string().test({
    name: "phone",
    test: function (value) {
      if (this.resolve(yup.ref("phone"))) {
        return yup
          .string()
          .matches(/^\d{11}$/, {
            message: "- 제외 11자리 숫자를 입력해주세요.",
            excludeEmptyString: true,
          })
          .required("휴대폰 번호를 입력해주세요.")
          .isValidSync(value);
      }
      return true; // 입력이 없는 경우는 통과
    },
  }),
  birth_date: yup.string().test({
    name: "birth_date",
    test: function (value) {
      if (this.resolve(yup.ref("birth_date"))) {
        return yup
          .string()
          .matches(/^\d{6}$/, {
            message: "6자리 숫자를 입력해 주세요",
            excludeEmptyString: true,
          })
          .required("생년월일을 입력해 주세요")
          .isValidSync(value);
      }
      return true; // 입력이 없는 경우는 통과
    },
  }),
});
