import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mobile} {
    width: 100vw;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 9vh;
  width: 640px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 5px gray;

  @media ${mobile} {
    width: 90vw;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 48px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;

  @media ${mobile} {
    font-size: 1.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 40px;

  @media ${mobile} {
    padding-left: 14vw;
    padding-right: 14vw;
    margin-bottom: 5vh;
  }
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 600px;
  margin-bottom: 10px;

  @media ${mobile} {
    font-size: 1rem;
  }
`;

export const defaultInput = styled.input`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border: none;
  background: #f5f5f5;

  @media ${mobile} {
    font-size: 0.7rem;
    padding: 1vh 0vh 1vh 1vh;
  }
`;

export const FindButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;

  @media ${mobile} {
    padding-left: 14vw;
    padding-right: 14vw;
  }
`;

export const FindButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: orange;
    color: white;
  }

  @media ${mobile} {
    font-size: 1.2rem;
    height: 6vh;
  }
`;

export const VerifyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px 10px 0px;
`;

export const VerifyNumber = styled.input`
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 0.8rem;
  margin-right: 10px;
  border: none;
  background: #f5f5f5;
  width: calc(100% / 2.7);
`;

export const VerifyButton = styled.button`
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: calc(100% / 3);
  cursor: pointer;
  &:hover {
    background: orange;
    color: white;
  }
`;

export const VerifyFinished = styled.div`
  font-size: 0.7rem;
  color: #d49438;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

export const Error = styled.div`
  font-size: 0.7rem;
  color: red;
  margin-left: 10vw;
  margin-top: -3vh;
  margin-bottom: 2vh;
`;
