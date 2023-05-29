import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCheckPhoneTokenArgs,
  IMutationGetTokenPhoneArgs,
} from "../../../../../commons/types/generated/types";

export const GET_TOKEN_PHONE = gql`
  mutation getTokenPhone($phone: String!) {
    getTokenPhone(phone: $phone)
  }
`;

export const CHECK_PHONE_TOKEN = gql`
  mutation checkPhoneToken($phone: String!, $token: String!) {
    checkPhoneToken(phone: $phone, token: $token)
  }
`;

export const UseMutationGetTokenPhone = () => {
  const [time, setTime] = useState<boolean>(false);
  const [getTokenPhone] = useMutation<
    Pick<IMutation, "getTokenPhone">,
    IMutationGetTokenPhoneArgs
  >(GET_TOKEN_PHONE);
  const [checkPhoneToken] = useMutation<
    Pick<IMutation, "checkPhoneToken">,
    IMutationCheckPhoneTokenArgs
  >(CHECK_PHONE_TOKEN);

  // 5분간 유지되는 토큰 발급
  const getTokenPhoneTimer = async (phone: string) => {
    if (!time) {
      try {
        const result = await getTokenPhone({
          variables: {
            phone,
          },
        });
        setTime(true);
        setTimeout(() => {
          setTime(false);
        }, 300000);

        console.log(result.data?.getTokenPhone);
      } catch (error) {
        if (error instanceof Error) alert("휴대폰 인증에 실패했습니다.");
      }
    } else {
      alert("이미 인증번호 받기를 누르셨습니다.");
    }
  };

  // 토큰 확인 (시간 내)
  const checkPhoneTokenTimer = async (data: IMutationCheckPhoneTokenArgs) => {
    try {
      const result = await checkPhoneToken({
        variables: {
          ...data,
        },
      });

      if (result.data?.checkPhoneToken) {
        setTime(false);
        alert("인증에 성공했습니다.");
      } else {
        alert("인증번호가 일치하지 않습니다. 다시 시도해 주세요.");
      }
    } catch (error) {}
  };

  return { getTokenPhoneTimer, time, checkPhoneTokenTimer };
};
