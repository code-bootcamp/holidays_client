import LandingWebInfo from "./Landing.Opening";
import LandingCategory from "./Landing.Middle";
import LastLandingPage from "./Landing.LastLanding";

import styled from "@emotion/styled";

const Wrap = styled.div`
  overflow: scroll;
  scroll-snap-type: y mandatory;

  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;

  & > div {
    scroll-snap-align: start;
    /* width: 100vw; */
  }

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
export default function LandingWrapper(): JSX.Element {
  return (
    <Wrap>
      <LandingWebInfo />
      <LandingCategory />
      <LastLandingPage />
    </Wrap>
  );
}
