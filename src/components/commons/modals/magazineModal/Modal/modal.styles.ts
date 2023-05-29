import styled from "@emotion/styled";
import { mobile } from "../../../../../commons/styles/breakPoints";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: white;
  padding: 20px;
  z-index: 100;
  border-radius: 15px;
  /* width: 50vw; */
  height: 70vh;
  overflow: auto;

  @media ${mobile} {
    height: 80vh;
  }
`;

export const Wrapper = styled.div`
  width: 50vw;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 30px 30px;

  @media ${mobile} {
    width: 70vw;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 48px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30px);
  margin-bottom: 20px;

  @media ${mobile} {
    display: none;
  }
`;

export const CloseButton = styled.button`
  /* color: #ffffff; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 35px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e97100;
    color: #ffffff;
  }

  @media ${mobile} {
    font-size: 1.2rem;
    width: 15vw;
    height: 1vh;
  }
`;

export const MainImage = styled.img`
  width: 35vw;
  height: 30vh;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;

  @media ${mobile} {
    width: 55vw;
    height: 20vh;
  }
`;

export const Contents = styled.div`
  font-size: 24px;
  padding: 20px 20px;
  margin-top: 20px;
  margin-bottom: 10px;

  height: 30vh;
  overflow: auto;

  @media ${mobile} {
    height: 25vh;
    padding: none;
    font-size: 0.9rem;
  }
`;

export const SubtitleWrapper = styled.div``;

export const Subtitle = styled.div`
  width: 45vw;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  color: #333333;

  @media ${mobile} {
    /* width: 100%; */
    margin-top: 1rem;
  }
`;

export const DivideLine = styled.div`
  /* width: 700px; */
  width: 45vw;
  border: 1px solid #333333;
  margin: 10px 0px 40px 0px;
`;
