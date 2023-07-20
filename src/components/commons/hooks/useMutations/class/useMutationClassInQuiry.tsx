import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classQuestionPage/list/classQuestion.types";
import { useState } from "react";
import { FETCH_CLASS_INQUIRIES } from "../../useQueries/class/useQueryFetchClassInQuiries";

export const CREATE_CLASS_INQUIRY = gql`
  mutation createClassInquiry(
    $createClassInquiryInput: CreateClassInquiryInput!
  ) {
    createClassInquiry(createClassInquiryInput: $createClassInquiryInput)
  }
`;

export const UPDATE_CLASS_INQUIRY = gql`
  mutation updateClassInquiry(
    $updateClassInquiryInput: UpdateClassInquiryInput!
  ) {
    updateClassInquiry(updateClassInquiryInput: $updateClassInquiryInput)
  }
`;

export const DELETE_CLASS_INQUIRY = gql`
  mutation deleteClassInquiry($ci_id: String!) {
    deleteClassInquiry(ci_id: $ci_id)
  }
`;

export const useMutationCreateInQuiry = () => {
  const router = useRouter();

  const [isEdit2, setIsEdit2] = useState(false);

  const [createClassInquiry] = useMutation(CREATE_CLASS_INQUIRY);
  const [updateClassInquiry] = useMutation(UPDATE_CLASS_INQUIRY);
  const [deleteClassInquiry] = useMutation(DELETE_CLASS_INQUIRY);

  const onClickWrite = async (data: IFormData) => {
    try {
      const result = await createClassInquiry({
        variables: {
          createClassInquiryInput: {
            content: data.content,
            class_id: router.query.class_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_INQUIRIES,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("문의하기 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDelete = async (data: any) => {
    try {
      const result = await deleteClassInquiry({
        variables: {
          ci_id: data,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_INQUIRIES,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("문의 삭제 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickWrite, onClickDelete, isEdit2, setIsEdit2 };
};

export const useMutationCreateInQuirySubmit = (propsSetIsEdit2: any) => {
  const router = useRouter();

  const [isEdit2, setIsEdit2] = useState(false);

  const [createClassInquiry] = useMutation(CREATE_CLASS_INQUIRY);
  const [updateClassInquiry] = useMutation(UPDATE_CLASS_INQUIRY);
  const [deleteClassInquiry] = useMutation(DELETE_CLASS_INQUIRY);

  const onClickClassInQuiry = async (data: IFormData) => {
    try {
      const result = await createClassInquiry({
        variables: {
          createClassInquiryInput: {
            content: data.content,
            class_id: router.query.class_id,
          },
        },

        refetchQueries: [
          {
            query: FETCH_CLASS_INQUIRIES,
            variables: { class_id: router.query.class_id },
          },
        ],
      });

      alert("문의하기 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickUpdate = async (data: IFormData) => {
    propsSetIsEdit2(false);
    if (!data.content) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    alert(data.ci_id);
    alert(data.content);
    try {
      const result = await updateClassInquiry({
        variables: {
          updateClassInquiryInput: {
            ci_id: data.ci_id,
            content: data.content,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_INQUIRIES,
            variables: { class_id: router.query.class_id },
          },
        ],
      });

      alert("문의 수정 완료");

      setIsEdit2(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickClassInQuiry, onClickUpdate, isEdit2, setIsEdit2 };
};
