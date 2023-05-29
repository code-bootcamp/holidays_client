import styled from "@emotion/styled";
import {
  ClockCircleOutlined,
  GitlabFilled,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { mobile, tablet } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #e1e1e1;
  position: fixed;
  z-index: 9998;

  @media ${tablet} {
    height: 15vw;
  }
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  @media ${tablet} {
    width: 90vw;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  @media ${tablet} {
    width: 23vw;
  }
`;

export const NaviWrapper = styled.div`
  display: flex;
  width: 400px;
  @media ${tablet} {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  margin-right: 80px;
`;

export const Menu = styled.div`
  font-family: "Arita-SemiBold";
  font-size: 18px;
  cursor: pointer;
  :hover {
    color: #e97100;
  }
`;

export const InnerButton = styled.span`
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  &.OrangeButton {
    background-color: #f28316;
    width: 90px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #ffffff;
    font-weight: 700;
    :hover {
      background-color: #e97100;
      color: #ffffff;
    }
  }
  :hover {
    color: #e97100;
  }
`;

export const Icon = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin: 0px 5px;
`;

export const Reservation = styled.div`
  font-size: 14px;
  margin-right: 14px;
  cursor: pointer;
  @media ${mobile} {
    display: none;
  }
`;

export const Crcle = styled.div`
  background-color: gold;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  text-align: center;
  color: white;
  font-size: 12px;
  padding-top: 1px;
  margin-top: 2px;
`;

export const ButtonTie = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 350px;
`;

export const Modal1 = styled.div``;
