import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const tokenLoadable = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void tokenLoadable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
    // const result = localStorage.getItem("accessToken");
    // setAccessToken(result ?? "");
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken ?? ""}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://happyholidays-server.site/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Apollo-Operation-Name": "true",
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // "X-Apollo-Operation-Name": true,
    cache: GLOBAL_STATE,
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: "no-cache",
    //   },
    // },
    headers: {
      "X-Apollo-Operation-Name": "true", // 헤더 값을 문자열로 설정해야 함
    },
  });

  // const client = new ApolloClient({
  //   link: ApolloLink.from([uploadLink]),
  //   cache: GLOBAL_STATE,
  // });

  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
