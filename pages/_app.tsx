import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../seo.config";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registInit = async () => {
        const registration = await navigator.serviceWorker.register("/sw.js");
        registration.waiting?.postMessage("SKIP_WAITING");
      };
      registInit();
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}
