import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
  width: 1400px;
  /* height: 800px; */
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 204, 0.3);

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 204, 0.3);
  }
`;

export const ContentWrapper = styled.div`
  /* background: rgba(255, 255, 204, 0.3); */

  @media screen and (max-width: 768px) {
    /* height: 2000px; */
    width: 100%;
    background: rgba(255, 255, 204, 0.3);
    display: flex;
    flex-direction: column;
  }
`;

export const TitleIconWrapper = styled.div`
  width: 500px;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
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

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;

    position: relative;
    top: 15px;
    left: 10px;
    transform: rotate(-20deg);
    transform-origin: left bottom;

    animation: ${bounce} 3s ease-in-out;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
`;

export const TitleContentWrapper = styled.div`
  width: 700px;
  /* background-color: #f28316; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f28316;

  @media screen and (max-width: 768px) {
    width: 100%;
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

  @media screen and (max-width: 768px) {
    font-size: 64px;

    opacity: 0;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    animation: ${fadeInAnimation} 2s ease-in-out 3s forwards;
  }
`;

export const Subtitle = styled.div`
  font-size: 48px;

  color: black;
  opacity: 0;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation: ${fadeInAnimation} 2s ease-in-out 4s forwards;

  @media screen and (max-width: 768px) {
    font-size: 36px;

    color: black;
    opacity: 0;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    animation: ${fadeInAnimation} 2s ease-in-out 4s forwards;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-left: 0px;
  }
`;

export const Label = styled.div`
  font-size: 24px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
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

  @media screen and (max-width: 768px) {
    /* width: calc(100% - 100px); */
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 150px;
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

  @media screen and (max-width: 768px) {
    /* width: 100%; */
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

  @media screen and (max-width: 768px) {
    width: 100%
    height: 800px;
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

  @media screen and (max-width: 768px) {
    width: calc(100%/1.5)
    font-size: 14px;
    /* color: gray; */
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 10px;
  }
`;
