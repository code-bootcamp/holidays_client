import { useForm } from "react-hook-form";
import { UseMutationClassReviewSubmit } from "../../../commons/hooks/useMutations/class/useMutationReview";
import * as S from "./classReviewWrite.styles";
import {
  IClassReviewWriteProps,
  IFormData,
} from "../../classPage/review/classReview.types";

import { useState } from "react";
import { classReviewSchema } from "./classReview.validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ClassReviewWrite(props: IClassReviewWriteProps) {
  const [grade, setGrade] = useState<number>(
    props.isEdit ? props.el?.grade || 0 : 0
  );

  const { onClickWrite, onClickUpdate } = UseMutationClassReviewSubmit(
    props.setIsEdit
  );

  const { register, handleSubmit, setValue, formState } = useForm<IFormData>({
    resolver: yupResolver(classReviewSchema),

    defaultValues: {
      content: props.isEdit ? props.el?.content : "",
      grade: props.isEdit ? props.el?.grade : 0,
      cr_id: props.el?.cr_id,
    },
    mode: "onChange",
  });

  const onSubmitForm = async (data: IFormData) => {
    const { ...value } = data;

    if (!props.isEdit) {
      await onClickWrite(value, grade);
    } else {
      await onClickUpdate(value, grade);
    }

    setGrade(0);
    setValue("content", "");
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <S.Wrapper_body>
            <S.Wrapper_body_header>
              후기 {props.isEdit ? "수정" : "등록"}하기
            </S.Wrapper_body_header>

            <S.Star
              allowHalf
              defaultValue={0}
              value={grade}
              onChange={(value: number) => setGrade(value)}
            />

            <S.ReviewBox>
              <S.TextArea7
                rows={10}
                maxLength={300}
                placeholder="후기를 작성해주세요"
                {...register("content")}
              />
              <S.ButtonWrapper>
                <S.ReviewWriteBtn type="submit">
                  {props.isEdit ? "수정" : "등록"}
                </S.ReviewWriteBtn>
              </S.ButtonWrapper>
            </S.ReviewBox>

            <S.Error>{formState.errors.content?.message}</S.Error>
          </S.Wrapper_body>
        </form>
      </S.Wrapper>
    </>
  );
}
