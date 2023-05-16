import styled from "@emotion/styled";
import {
  ClockCircleOutlined,
  GitlabFilled,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 1920px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #faf8f2;
  position: fixed;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  margin: 0px 347px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  margin-right: 100px;
`;

export const Menu = styled.div`
  margin-right: 0px;
  font-weight: 700;
  font-size: 18px;
  margin-right: 40px;
  cursor: pointer;
  :hover {
    color: #e97100;
  }
`;

export const InnerButton = styled.span`
  margin: 10px;
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
