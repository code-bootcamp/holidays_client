import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const buttonFall = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  70% {
    transform: translateY(5vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const bannerAnimation = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: 4em; */
  @media ${mobile} {
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0vh;
  /* width: 90vw; */
  /* width: 100%; */

  @media ${mobile} {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
  }
`;

export const MainBanner = styled.img`
  width: 100vw;
  height: 80vh;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;

  animation: ${bannerAnimation} 3s ease-in-out;

  @media ${mobile} {
    width: 90vw;
    border-radius: 5px;
    box-shadow: 0px 0px 10px gray;
  }
`;

export const MainButtonWrapper = styled.div`
  width: 100vw;
  height: 25vh;
  background-color: #faf8f2;
  position: relative;
  top: -25vh;
  /* border-radius: 15px; */
  display: flex;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  opacity: 0.7;

  animation: ${buttonFall} 1.5s ease-in-out;

  @media ${mobile} {
    height: 25vh;
    background: white;
    position: relative;
    top: 0px;
    border-radius: 15px;
    display: flex;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 0px 10px gray;
  }
`;

export const MainCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  scale: 0.9;
  opacity: 1;

  &:hover {
    color: #f28316;
  }
`;

export const MainCategoryIcon = styled.img`
  width: 6vw;
  height: 12vh;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainCategoryLabel = styled.div`
  font-size: 1.3rem;
  margin-top: 0.5rem;

  @media ${mobile} {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  padding-bottom: 100px;
  position: relative;
  top: -2vh;

  @media ${mobile} {
    width: 100vw;
  }
`;

export const MainContentsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  margin-top: 4rem;
  padding-left: 4rem;

  &:hover {
    color: orange;
  }

  @media ${mobile} {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding-left: 20vw;
    justify-content: center;
    align-items: center;
  }
`;

export const MainContentsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  margin-top: 4rem;
  padding-left: 4rem;

  &:hover {
    color: orange;
  }

  @media ${mobile} {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding-left: 20vw;
    justify-content: center;
    align-items: center;
  }
`;

export const MainContentsImageLeft = styled.img`
  width: 80vw;
  height: 65vh;
  margin-right: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.008);
  }

  @media ${mobile} {
    width: 100%;
    height: 40vh;

    border-radius: 15px;
    box-shadow: 0px 0px 10px gray;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
`;

export const MainContentsImageRight = styled.img`
  width: 40vw;
  height: 55vh;
  margin-left: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  @media ${mobile} {
    width: 80vw;
    height: 40vh;

    border-radius: 15px;
    box-shadow: 0px 0px 10px gray;
    cursor: pointer;

    transition: all 0.5s ease-in-out;

    position: relative;
    top: 0px;
    right: 17vw;
  }
`;

export const MainContentsTextWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: flex-end;
  padding-bottom: 50px;
  width: 40vw;

  position: relative;
  top: -56vh;
  left: 20vw;

  color: #ffffff;

  @media ${mobile} {
    display: none;
  }
`;

export const MainContentsTextWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 40vw;
  justify-content: flex-end;
  padding-bottom: 50px;

  position: relative;
  left: 4vw;
  top: -4vh;

  @media ${mobile} {
    display: none;
  }
`;

export const MainContentsLabelLeft = styled.div`
  font-size: 3.3rem;
  /* width: 80vw; */
  @media ${mobile} {
    font-size: 36px;
  }
`;

export const MainContentsRemarksLeft = styled.div`
  font-size: 2rem;
  margin-top: 20px;
  font-weight: 335;
  width: 50vw;

  @media ${mobile} {
    font-size: 24px;
  }
`;

export const MainContentsButtonLeft = styled.img`
  width: 2rem;
  height: 2rem;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  transition: transform 0.5s ease-in-out;

  &:hover {
    animation: ${bounce} 0.7s;
  }

  @media ${mobile} {
    display: none;
  }
`;

export const MainContentsLabelRight = styled.div`
  font-size: 3.3rem;
  /* width: 50vw; */
  @media ${mobile} {
    font-size: 36px;
  }
`;

export const MainContentsRemarksRight = styled.div`
  font-size: 2rem;
  margin-top: 20px;
  font-weight: 335;
  width: 50vw;

  @media ${mobile} {
    font-size: 24px;
  }
`;

export const MainContentsButtonRight = styled.img`
  width: 2rem;
  height: 2rem;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  transition: transform 0.5s ease-in-out;

  &:hover {
    animation: ${bounce} 0.7s;
  }

  @media ${mobile} {
    font-size: 24px;
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 5px;

    display: none;
  }
`;
