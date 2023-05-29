import styled from "@emotion/styled";
import { mobile } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  /* margin-top: 100px; */
  width: 640px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 5px gray;

  @media ${mobile} {
    width: 95vw;
    padding-bottom: 3vh;
    box-shadow: 0px 0px 0px gray;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;

  @media ${mobile} {
    font-size: 2rem;
    padding-top: 5vh;
    margin-bottom: 5vh;
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
    padding-left: 10vw;
    padding-right: 10vw;
  }
`;

export const Label = styled.div`
  font-size: 1.1rem;
  font-weight: 600px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  font-size: 0.7rem;
  color: #888888;
  margin-bottom: 1vh;
`;

export const SubtitleLine = styled.div`
  width: 100%;
  border: 0.05rem solid #888888;
  margin-bottom: 3vh;
`;

export const defaultInput = styled.input`
  width: 100%;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 0.8rem;
  border: none;
  background: #f5f5f5;
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

  @media ${mobile} {
    width: 20vw;
    font-size: 0.8rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 5vh;

  @media ${mobile} {
    width: 65vw;
    margin-left: 12vw;
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  margin-left: 10vw;
  margin-right: 10vw;
  height: 7vh;
  border: none;
  font-size: 1.14rem;
  border-radius: 5px;
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

export const Errors = styled.div`
  font-size: 0.6rem;
  color: red;
  position: relative;
  top: -1.5rem;
  margin-left: 10vw;
`;
