import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../../commons/types/generated/types";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;

interface IFormSignUpData {
  email: string;
  pwd: string;
  name: string;
  birth_date?: string;
  passwordCheck?: string;
  phone?: string;
}

export const UseMutationCreateUser = () => {
  const router = useRouter();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const SubmitCreateUser = async (data: IFormSignUpData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      alert("회원가입이 완료되었습니다");
      void router.push(`/loginPage`);
    } catch (error) {
      if (error instanceof Error) alert("회원가입에 실패했습니다.");
    }
  };

  return {
    SubmitCreateUser,
  };
};
