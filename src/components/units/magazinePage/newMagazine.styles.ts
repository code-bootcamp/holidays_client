import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  /* height: 1000px;  */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  margin-top: 10vh;

  @media ${mobile} {
    /* width: max-content; */
    padding-top: 3rem;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 25vw;
  height: 7vh;
  margin-bottom: 10px;

  @media ${mobile} {
    width: 55vw;
    height: 10vh;
    margin-bottom: 1rem;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;

  cursor: pointer;

  @media ${mobile} {
    font-size: 1.2rem;
  }
`;

export const Editor = styled.div`
  width: 90vw;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  @media ${mobile} {
    width: 90vw;
    margin-top: 1.5rem;
  }
`;

export const divideLine = styled.div`
  width: 100vw;
  border: 1px solid;
  margin-bottom: 1vh;

  @media ${mobile} {
    width: 90vw;
    border: 0.04em solid;
  }
`;

export const Body = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  @media ${mobile} {
    width: 95vw;
    padding-bottom: 3rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  margin-top: 5vh;
  /* padding-left: 100px; */

  @media ${mobile} {
    width: 95vw;
    padding-left: 0.5rem;
    margin-top: 5vh;
  }
`;

export const ContentsImage = styled.img`
  width: 40vw;
  height: 40vh;
  margin-right: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.008);
  }

  @media ${mobile} {
    width: 95vw;
    height: 40vh;
    padding-left: 0rem;
    margin-right: 0px;
    /* padding-right: 10vw; */
  }
`;

export const ContentsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 700px; */
  justify-content: flex-end;
  padding-bottom: 50px;
  width: 50vw;

  @media ${mobile} {
    /* display: none; */
    width: 80vw;
  }
`;
export const ContentsLabel = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  /* color: #ffffff; */
`;
export const ContentsRemarks = styled.div`
  font-size: 1.3rem;
  margin-top: 1rem;
  font-weight: 335;
  /* color: #ffffff; */
`;

export const ImageBox1 = styled.div`
  width: 70vw;
  height: 50vh;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.008);
  }
  margin-right: 7vw;

  display: flex;
  justify-content: center;
  background-size: cover;

  .visible {
    visibility: visible;
    transition: opacity 1s ease-in-out;
  }

  .hidden {
    visibility: hidden;
    transition: opacity 1s ease-in-out;
  }

  @media ${mobile} {
    width: 90vw;
    height: 40vh;
    padding-left: 0rem;
    margin-right: 0px;
    /* padding-right: 10vw; */
  }
`;
