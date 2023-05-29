import { gql, useMutation } from "@apollo/client";

export const CHECK_PHONE_TOKEN = gql`
  mutation checkPhoneToken($phone: String!, $token: String!) {
    checkPhoneToken(phone: $phone, token: $token)
  }
`;
