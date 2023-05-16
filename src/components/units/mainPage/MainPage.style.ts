import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

const bannerAnimation = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 1920px;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

export const MainBanner = styled.img`
  width: 1700px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;

  animation: ${bannerAnimation} 3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100vw;
    border-radius: 5px;
    box-shadow: 0px 0px 10px gray;
  }
`;

export const MainButtonWrapper = styled.div`
  width: 1500px;
  height: 250px;
  background: white;
  position: relative;
  top: -100px;
  border-radius: 15px;
  display: flex;
  padding-left: 220px;
  padding-right: 220px;
  padding-top: 44px;
  padding-bottom: 50px;
  justify-content: space-between;
  box-shadow: 0px 0px 10px gray;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 25vh;
    background: white;
    position: relative;
    top: 0px;
    border-radius: 15px;
    display: flex;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 40px;
    padding-bottom: 40px;
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

  &:hover {
    color: #f28316;
  }
`;

export const MainCategoryIcon = styled.img`
  width: 120px;
  height: 120px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 90px;
    height: 90px;

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MainCategoryLabel = styled.div`
  font-size: 30px;
  margin-top: 15px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const MainContentsLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
  padding-left: 100px;

  &:hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const MainContentsRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 100px;

  &:hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 50px;

    position: relative;
    top: 90px;
  }
`;

export const MainContentsImageLeft = styled.img`
  width: 900px;
  height: 700px;
  margin-right: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.008);
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 670px;

    border-radius: 15px;
    box-shadow: 0px 0px 10px gray;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
`;

export const MainContentsImageRight = styled.img`
  width: 900px;
  height: 700px;
  margin-left: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 670px;

    border-radius: 15px;
    box-shadow: 0px 0px 10px gray;
    cursor: pointer;

    transition: all 0.5s ease-in-out;

    margin-bottom: 150px;
  }
`;

export const MainContentsTextWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: flex-end;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainContentsTextWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainContentsLabelLeft = styled.div`
  font-size: 96px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const MainContentsRemarksLeft = styled.div`
  font-size: 55px;
  margin-top: 20px;
  font-weight: 335;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const MainContentsButtonLeft = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  transition: transform 0.5s ease-in-out;

  &:hover {
    animation: ${bounce} 0.7s;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 5px;

    display: none;
  }
`;

export const MainContentsLabelRight = styled.div`
  font-size: 96px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const MainContentsRemarksRight = styled.div`
  font-size: 55px;
  margin-top: 20px;
  font-weight: 335;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const MainContentsButtonRight = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  transition: transform 0.5s ease-in-out;

  &:hover {
    animation: ${bounce} 0.7s;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 5px;

    display: none;
  }
`;
