import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export const DELETE_CLASS = gql`
  mutation deleteClass($class_id: String!) {
    deleteClass(class_id: $class_id)
  }
`;

export const useMutationDeleteClass = () => {
  const router = useRouter();

  const [deleteClass] = useMutation(DELETE_CLASS);

  const onClickClassDelete = async () => {
    try {
      void deleteClass({
        variables: { class_id: router.query.class_id },
      });

      alert("클래스 삭제가 완료되었습니다.");

      void router.push(`/classPage`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickClassDelete };
};
