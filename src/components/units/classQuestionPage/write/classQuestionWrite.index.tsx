import { useForm } from "react-hook-form";
import { useMutationCreateInQuirySubmit } from "../../../commons/hooks/useMutations/class/useMutationClassInQuiry";
import * as S from "./classQuestionWrite.styles";
import { classQuestionSchema } from "./classQuestionWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { IClassInquiriesWriteProps } from "../list/classQuestion.types";

export interface IFormData {
  content: string;
  ci_id: string;
}

export default function ClassQuestionWrite(props: IClassInquiriesWriteProps) {
  const { onClickClassInQuiry, onClickUpdate } = useMutationCreateInQuirySubmit(
    props.setIsEdit2
  );

  const { register, handleSubmit, setValue, formState } = useForm<IFormData>({
    resolver: yupResolver(classQuestionSchema),

    defaultValues: {
      content: props.isEdit2 ? props.el?.content : "",
      ci_id: props.el?.ci_id,
    },
    mode: "onChange",
  });

  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;

    if (!props.isEdit2) {
      await onClickClassInQuiry(value);
    } else {
      await onClickUpdate(value);
    }

    setValue("content", "");
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Wrapper_body_header>
              문의 {props.isEdit2 ? "수정" : "등록"}하기
            </S.Wrapper_body_header>

            <S.ReviewBox>
              <S.TextArea7
                rows={10}
                maxLength={300}
                placeholder="문의 시 관리자에게 메세지로 전송됩니다."
                {...register("content")}
              />

              <S.ButtonWrapper>
                <S.ReviewWriteBtn type="submit">
                  {props.isEdit2 ? "수정" : "등록"}
                </S.ReviewWriteBtn>
              </S.ButtonWrapper>
            </S.ReviewBox>
          </S.Wrapper_body>
          <S.Error>{formState.errors.content?.message}</S.Error>
        </form>
      </S.Wrapper>
    </>
  );
}
