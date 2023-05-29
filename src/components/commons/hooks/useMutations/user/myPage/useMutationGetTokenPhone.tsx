import { gql, useMutation, useQuery } from "@apollo/client";

export const GET_TOKEN_PHONE = gql`
  mutation getTokenPhone($phone: String!) {
    getTokenPhone(phone: $phone)
  }
`;
