import styled from "@emotion/styled";
import {
  ClockCircleOutlined,
  GitlabFilled,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { tablet } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  height: 233px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${tablet} {
    height: 60vw;
  }
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  margin: auto;
  @media ${tablet} {
    width: 90vw;
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  margin-right: 50px;
  @media ${tablet} {
    margin-right: 0vw;
  }
`;

export const Logo = styled.img`
  @media ${tablet} {
    width: 30vw;
    margin-bottom: 3vw;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  @media ${tablet} {
    font-size: 3vw;
    margin-bottom: 3vw;
  }
`;

export const TextDetailMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  @media ${tablet} {
  }
`;

export const TextMenu = styled.div`
  margin-right: 30px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media ${tablet} {
    font-size: 1vw;
  }
`;

export const TextDetail = styled.div`
  font-size: 15px;
  color: #9a9a9a;
  @media ${tablet} {
    font-size: 1vw;
  }
`;
