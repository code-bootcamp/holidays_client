import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile, mobileSmall } from "../../../commons/styles/breakPoints";

const bounce = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);;
  }
  50% {
    transform: translateY(-185px) rotate(-10deg);
  }
  100% {
    transform: translateY(0) rotate(-20deg);
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const boxShadowAnimation = keyframes`
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

export const Wrapper = styled.div`
  width: 100vw;
  /* height: 800px; */
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 204, 0.3);

  @media ${mobile} {
    width: max-content;
    /* height: 800px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 204, 0.3);

    /* padding-left: 25vw; */
  }

  @media ${mobileSmall} {
    width: 100vw;
  }
`;

export const ContentWrapper = styled.div`
  /* background: rgba(255, 255, 204, 0.3); */
  @media ${mobile} {
  }
`;

export const TitleIconWrapper = styled.div`
  width: 500px;
  display: flex;

  @media ${mobile} {
    width: 90vw;
  }

  @media ${mobileSmall} {
    width: 70vw;
  }
`;

export const TitleIcon = styled.img`
  width: 90px;
  height: 90px;

  position: relative;
  top: 15px;
  left: -20px;
  transform: rotate(-20deg);
  transform-origin: left bottom;

  animation: ${bounce} 3s ease-in-out;

  @media ${mobile} {
    width: 10vw;
    height: 10vh;

    position: relative;
    top: 1.1rem;
    left: 4rem;
    transform: rotate(-20deg);
    transform-origin: left bottom;

    animation: ${bounce} 3s ease-in-out;
  }

  @media ${mobileSmall} {
    width: 12vw;
    height: 12vh;

    top: -0.1rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  /* background-color: #f28316; */

  @media ${mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
  }

  @media ${mobileSmall} {
    width: 100vw;
  }
`;

export const TitleContentWrapper = styled.div`
  width: 700px;
  /* background-color: #f28316; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f28316;

  @media ${mobile} {
    width: 90vw;
    /* background-color: #f28316; */
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f28316;
  }
`;

export const Title = styled.div`
  font-size: 72px;

  opacity: 0;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation: ${fadeInAnimation} 2s ease-in-out 3s forwards;

  @media ${mobile} {
    font-size: 3rem;

    opacity: 0;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    animation: ${fadeInAnimation} 2s ease-in-out 3s forwards;
  }

  @media ${mobileSmall} {
    font-size: 2rem;
    margin-left: 5vw;
  }
`;

export const Subtitle = styled.div`
  font-size: 48px;

  color: black;
  opacity: 0;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation: ${fadeInAnimation} 2s ease-in-out 4s forwards;

  @media ${mobile} {
    font-size: 1.8rem;

    color: black;
    opacity: 0;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    animation: ${fadeInAnimation} 2s ease-in-out 4s forwards;
  }

  @media ${mobileSmall} {
    font-size: 1.4rem;
    margin-left: 6vw;
  }
`;

export const Body = styled.div`
  opacity: 0;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation: ${fadeInAnimation} 2s ease-in-out 5s forwards;
`;

export const InformWrapper = styled.div`
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;

  @media ${mobile} {
    margin-bottom: 7vh;
    margin-top: 7vh;
    margin-left: 13vw;
  }

  @media ${mobileSmall} {
    width: 70vw;
    margin-bottom: 3vh;
  }
`;

export const Label = styled.div`
  font-size: 24px;
  margin-bottom: 10px;

  @media ${mobile} {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  @media ${mobileSmall} {
    font-size: 0.62rem;
  }
`;

export const PaymentImageWrapper = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 150px;

  @media ${mobile} {
    width: calc(100% - 100px);
    display: flex;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 20vh;
  }

  @media ${mobileSmall} {
    margin-bottom: 5vh;
  }
`;

export const PaymentButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: #f28316;
  color: #ffffff;
  font-weight: 500;
  :hover {
    background-color: #e97100;
    color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  opacity: 0;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation: ${fadeInAnimation} 2s ease-in-out 6s forwards;

  @media ${mobile} {
    width: 80vw;
    height: 10vh;
    margin-left: 18vw;
  }

  @media ${mobileSmall} {
    margin-left: 27vw;
  }
`;

export const InformImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentInformationImage = styled.img`
  width: 600px;
  height: 400px;
  border-radius: 5px;
  margin-top: 30px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media ${mobile} {
    width: 90vw;
    height: 40vh;
    border-radius: 5px;
    margin-top: 30px;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const PaymentInformHeader = styled.div`
  width: 550px;
  font-size: 18px;
  /* color: gray; */
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
  /* background: #ffffff; */

  @media ${mobile} {
    width: 90vw;
    font-size: 14px;
    /* color: gray; */
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 2vh;
  }
`;
