import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IFormData } from "../../../../units/classQuestionPage/write/classQuestionWrite.index";

export const CREATE_CLASS_INQUIRY = gql`
  mutation createClassInquiry(
    $createClassInquiryInput: CreateClassInquiryInput!
  ) {
    createClassInquiry(createClassInquiryInput: $createClassInquiryInput)
  }
`;

export const useMutationCreateInQuiry = () => {
  const router = useRouter();

  const [createClassInquiry] = useMutation(CREATE_CLASS_INQUIRY);

  const onClickClassInQuiry = async (data: IFormData) => {
    try {
      const result = await createClassInquiry({
        variables: {
          // createClassInQuiryInput
          createClassInquiryInput: {
            content: data.content,
            class_id: router.query.class_id,
          },
        },
      });

      alert("문의하기 완료");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickClassInQuiry };
};
