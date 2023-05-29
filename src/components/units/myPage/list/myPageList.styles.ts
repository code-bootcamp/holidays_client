import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";
import { tablet } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 1200px;
  margin-top: 80px;
  @media ${tablet} {
    width: 90vw;
    flex-direction: column;
  }
`;

export const MyBox = styled.div`
  width: 378px;
  height: 375px;
  padding: 38px 32px 38px 32px;
  border-radius: 6px;
  margin-bottom: 220px;
  margin-left: 27px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
  border: 1px solid #f5f5f5;
  @media ${tablet} {
    width: 100%;
    margin: 12vw 0vw 5vw 0vw;
  }
`;

export const WelcomeMessage = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #5c5c5c;
`;

export const UserName = styled.h2`
  font-size: 32px;
`;

export const Orange = styled.span`
  font-size: 32px;
  color: #f28316;
`;

export const Labal = styled.p`
  font-size: 15px;
  margin-top: 20px;
`;

export const Infor = styled.p`
  font-size: 17px;
  margin-top: 5px;
  padding-bottom: 7px;
  border-bottom: 1px solid #000000;
`;

export const Button = styled.button`
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid black;
  border-radius: 6px;
  height: 41px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

export const Line = styled.div`
  border: 1px solid #e7e1d8;
  width: 0px;
  height: 600px;
  margin-right: 35px;
  margin-left: 35px;
  margin-top: 110px;
  margin-bottom: 110px;
  @media ${tablet} {
    display: none;
  }
`;

export const MyPageList = styled.div`
  width: 725px;
  height: 473px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-collapse: collapse;
  margin-bottom: 129px;
  @media ${tablet} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
`;

export const MyPageListBox = styled.div`
  width: 343px;
  height: 131px;
  padding: 35px 10px 35px 20px;
  border-radius: 6px;
  margin-right: 15px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(63 71 77 / 15%) 0px 2px 6px;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  @media ${tablet} {
    flex-direction: column;
    width: 100%;
    margin-bottom: 3vw;
  }
`;

export const ListNameIconWrapper = styled.div`
  display: flex;
`;

export const ListName = styled.h2`
  font-size: 26px;
`;

export const Icon = styled.img`
  width: 23px;
  height: 23px;
  margin-top: 2px;
  margin-left: 10px;
`;

export const ListDetailed = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 25px;
`;
