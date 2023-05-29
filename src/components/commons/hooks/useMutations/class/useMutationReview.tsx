import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classPage/review/classReview.types";
import { useState } from "react";
import { FETCH_CLASS_REVIEWS } from "../../useQueries/class/useQueryFetchClassReview";

export const CREATE_CLASS_REVIEW = gql`
  mutation createClassReview($createClassReviewInput: CreateClassReviewInput!) {
    createClassReview(createClassReviewInput: $createClassReviewInput)
  }
`;

export const UPDATE_CLASS_REVIEW = gql`
  mutation updateClassReview($updateClassReviewInput: UpdateClassReviewInput!) {
    updateClassReview(updateClassReviewInput: $updateClassReviewInput)
  }
`;

export const DELETE_CLASS_REVIEW = gql`
  mutation deleteClassReview($cr_id: String!) {
    deleteClassReview(cr_id: $cr_id)
  }
`;

export const UseMutationClassReview = () => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const [createClassReview] = useMutation(CREATE_CLASS_REVIEW);
  const [updateClassReview] = useMutation(UPDATE_CLASS_REVIEW);
  const [deleteClassReview] = useMutation(DELETE_CLASS_REVIEW);

  const onClickWrite = async (data: IFormData, grade: number) => {
    try {
      const result = await createClassReview({
        variables: {
          createClassReviewInput: {
            content: data.content,
            grade: grade,
            class_id: router.query.class_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 작성 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDelete = async (data: any) => {
    try {
      const result = await deleteClassReview({
        variables: {
          cr_id: data,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 삭제 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickWrite, onClickDelete, isEdit, setIsEdit };
};

export const UseMutationClassReviewSubmit = (propsSetIsEdit: any) => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const [createClassReview] = useMutation(CREATE_CLASS_REVIEW);
  const [updateClassReview] = useMutation(UPDATE_CLASS_REVIEW);
  const [deleteClassReview] = useMutation(DELETE_CLASS_REVIEW);

  const onClickWrite = async (data: IFormData, grade: number) => {
    try {
      const result = await createClassReview({
        variables: {
          createClassReviewInput: {
            content: data.content,
            grade: grade,
            class_id: router.query.class_id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 작성 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickUpdate = async (data: IFormData, grade: number) => {
    propsSetIsEdit(false);
    if (!data.content) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      const result = await updateClassReview({
        variables: {
          updateClassReviewInput: {
            cr_id: data.cr_id,
            content: data.content,
            grade: data.grade,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 수정 완료");

      setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDelete = async (data: any) => {
    try {
      const result = await deleteClassReview({
        variables: {
          cr_id: data,
        },
        refetchQueries: [
          {
            query: FETCH_CLASS_REVIEWS,
            variables: { class_id: router.query.class_id },
          },
        ],
      });
      alert("리뷰 삭제 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickWrite, onClickUpdate, onClickDelete, isEdit, setIsEdit };
};
