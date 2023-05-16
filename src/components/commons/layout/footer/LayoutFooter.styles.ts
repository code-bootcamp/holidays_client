import styled from "@emotion/styled";
import {
  ClockCircleOutlined,
  GitlabFilled,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 1920px;
  height: 233px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  margin: 0px 390px;
`;

export const LogoWrapper = styled.div`
  margin-right: 50px;
`;

export const Logo = styled.img``;

export const Text = styled.div`
  font-size: 16px;
`;

export const TextDetailMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const TextMenu = styled.div`
  margin-right: 30px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const TextDetail = styled.div`
  font-size: 15px;
  color: #9a9a9a;
`;
