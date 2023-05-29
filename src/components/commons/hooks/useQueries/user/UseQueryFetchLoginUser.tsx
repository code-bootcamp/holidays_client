import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      name
      phone
      email
      birth_date
    }
  }
`;

export const UseQueryFetchLoginUser = () => {
  const queryUser = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  return queryUser;
};
