import styled from "@emotion/styled";
import "animate.css";
import { keyframes } from "@emotion/react";
import { DoubleRightOutlined } from "@ant-design/icons";
import { mobile } from "../../../commons/styles/breakPoints";

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity:1;
  }
`;

const TextUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity:1;
    transform:none;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

// ============================================================//
export const FirstWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/landingPage/secondWrapper.png");
  background-size: cover;

  /* animation: animate__fadeInLeftBig;
  animation-duration: 2s; */

  @media ${mobile} {
    background-position-x: 62%;
  }
`;

export const Wrap1 = styled.div`
  z-index: 0;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Part1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UnOTitle = styled.div`
  font-size: 2.3rem;
  color: #8b4513;
  border-bottom: 6px double #ffc846;
`;

export const MidWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;

  @media ${mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
  }
`;

export const Span = styled.div`
  font-size: 2rem;

  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }

  @media ${mobile} {
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Span1 = styled.div`
  font-size: 1.1rem;

  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }
`;

export const Span2 = styled.div`
  font-size: 30px;
`;

export const PhoneCon = styled.div`
  font-size: 1.2rem;
`;

export const MidPic1Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: backInDown;
    animation-duration: 1.5s;
  }

  @media ${mobile} {
    height: 13vh;
    width: 100vw;
  }
`;

export const MidPic2Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -1%;

  .isActive {
    animation: backInDown;
    animation-duration: 2s;
  }

  @media ${mobile} {
    height: 13vh;
    width: 100vw;
  }
`;

export const MidPic3Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: backInDown;
    animation-duration: 2.5s;
  }

  @media ${mobile} {
    height: 13vh;
    width: 100vw;
  }
`;

export const MidPic4Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .isActive {
    animation: backInDown;
    animation-duration: 3s;
  }

  @media ${mobile} {
    height: 13vh;
    width: 100vw;

    /* .isActive {
      animation: FadeInUp;
      animation-duration: 3s;
    } */
  }
`;

export const MidPic = styled.img`
  width: 15vw;
  height: 50%;
  margin-top: 30px;
  border-radius: 5px;
  opacity: 0.9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border: 1px solid red;
  }

  @media ${mobile} {
    display: none;
  }
`;

export const Part2 = styled.div`
  width: 50%;
`;

// =============================================================//

export const OpenWrapper = styled.div`
  margin: 0px auto;
  height: 100vh;
  width: 100%;
  /* left: 50%; */
  background-image: url("/landingPage/openWrapper.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  animation: ${Fade} 4s;

  @media ${mobile} {
    height: 100%;
    width: 100vw;
    background-position-x: -100px;
  }
`;

export const LogoWrap = styled.div`
  /* width: 290px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background-color: red; */
`;

export const LogoIcon = styled(DoubleRightOutlined)`
  font-size: 1.3rem;
  color: #ffa500;
  margin-left: 10px;
  margin-top: 4rem;
  cursor: pointer;
  @media ${mobile} {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

export const Wrapper1 = styled.div`
  position: relative;
  left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;

  @media ${mobile} {
    width: 100%;
    height: 100%;
    left: 0%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const LeftWrapper = styled.div`
  position: relative;
  /* left: 50%; */
  width: 45rem;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${mobile} {
    width: 100%;
    height: 70%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3vh;
  }
`;

export const Pick = styled.div``;

export const LeftItem1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 26vh;

  .isActive {
    animation: fadeInDown;
    animation-duration: 2s;
  }

  @media ${mobile} {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const LeftItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 26vh;

  .isActive {
    animation: fadeInDown;
    animation-duration: 3s;
  }

  @media ${mobile} {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const LeftItem3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 33%;
  height: 26vh;

  .isActive {
    animation: fadeInDown;
    animation-duration: 4s;
  }
  @media ${mobile} {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Content3 = styled.div`
  font-size: 1rem;
  font-weight: 200;
  margin-top: 2vh;

  @media ${mobile} {
    font-size: 1.3rem;
    display: none;
  }
`;

export const RightWrapper = styled.div`
  width: 44rem;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;

  @media ${mobile} {
    height: 30vh;
    width: 100%;
    margin: 0px auto;
  }
`;

export const MainLogo = styled.img`
  width: 10.32rem;
  height: 2rem;
  margin-bottom: 1.5rem;
  opacity: 1;
  cursor: pointer;
  transform: scale(1.5);

  .isActive {
    opacity: 1;
  }

  @media ${mobile} {
    width: 10.32rem;
    height: 2rem;
    margin-bottom: 15px;
    transform: scale(1.1);
  }
`;

export const LogoInfo = styled.div`
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 3.3px;
  line-height: 2;

  @media ${mobile} {
    font-size: 1.2rem;
    letter-spacing: 2.2px;
    line-height: 1.7;
  }

  span {
    display: inline-block;
    animation: ${bounce} 1s ease-in-out;
    /* animation-delay: 3s; */
    animation-fill-mode: forwards;
  }

  span:nth-child(1) {
    animation-delay: 2s;
  }

  span:nth-child(2) {
    animation-delay: 2.2s;
  }

  span:nth-child(3) {
    animation-delay: 2.4s;
  }

  span:nth-child(4) {
    animation-delay: 2.6s;
  }

  span:nth-child(5) {
    animation-delay: 2.8s;
  }

  span:nth-child(6) {
    animation-delay: 3s;
  }
`;

export const Count = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
`;

// =============================================================//

export const LastWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/landingPage/LastWrapper.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  background-color: #fef5ed;
  @media ${mobile} {
    background-position-x: -170px;
    background-position-y: -20px;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 30%;
  position: relative;
  left: 25%;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */

  @media ${mobile} {
    left: 25%;
    top: -30%;
  }

  .isActive {
    animation: backInDown;
    animation-duration: 3s;
  }
`;

export const Text = styled.button`
  border: none;
  background-color: #ffa500;
  color: white;
  width: 6rem;
  height: 1.5rem;
  border-radius: 100px;
  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;

  :hover {
    background-color: #ffa498;
    color: white;
  }

  @media ${mobile} {
    position: relative;
    top: 960%;
  }
`;

export const Logo = styled.img`
  width: 17vw;
  height: 5vh;
  margin-bottom: 2vh;
  @media ${mobile} {
    width: 60vw;
    margin-top: 3vh;
  }
`;
