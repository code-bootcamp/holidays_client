import styled from "@emotion/styled";
import { mobileSmall, mobile } from "../../../../../commons/styles/breakPoints";

export const ModalWrapper = styled.div`
  border-radius: 5px;
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  width: 40vw;
  /* height: 60vh; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mobile} {
    width: 60vw;
  }

  @media ${mobileSmall} {
    width: 80vw;
  }
`;

export const Header = styled.h1`
  width: 35vw;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;

  @media ${mobile} {
    width: 55vw;
  }

  @media ${mobileSmall} {
    font-size: 1.1rem;
    width: 75vw;
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
`;

export const Subtitle = styled.h3`
  margin-top: 1rem;
  font-weight: 500;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const DivideLine = styled.div`
  width: 35vw;
  border: 0.01rem solid #868686;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${mobile} {
    width: 50vw;
  }

  @media ${mobileSmall} {
    width: 60vw;
  }
`;

export const PaymentWrapper = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-between;

  @media ${mobileSmall} {
    width: 60vw;
  }
`;

export const PaymentBtn = styled.button`
  width: 15vw;
  height: 7vh;

  border-radius: 3px;
  font-size: 0.9rem;

  border: none;

  cursor: pointer;

  &:hover {
    background: #f5b221;
    color: #ffffff;
  }

  @media ${mobileSmall} {
    width: 28vw;
  }
`;

export const Button = styled.button`
  width: 10vw;
  height: 5vh;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;

  &:hover {
    background: #868686;
    color: #ffffff;
    border: none;
  }

  @media ${mobileSmall} {
    width: 20vw;
  }
`;

export const HeadLogo = styled.img`
  width: 17vw;
  height: 5vh;

  margin-bottom: 2vh;

  @media ${mobileSmall} {
    width: 30vw;
  }
`;
