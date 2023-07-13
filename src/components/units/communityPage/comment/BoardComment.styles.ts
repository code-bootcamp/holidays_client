import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  EnvironmentOutlined,
  PaperClipOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { mobile } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  @media ${mobile} {
    margin-top: 4vh;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  @media ${mobile} {
    display: flex;
  }
`;

export const BodyInput = styled.input<{ Active: any }>`
  margin-top: 20px;
  width: 100%;
  height: 55px;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  border: none;
  border-radius: 4px;
  :focus {
    outline: none;
  }
  @media ${mobile} {
    margin-top: 0px;
    height: 50px;
    border-radius: 4px 0px 0px 4px;
  }
`;

export const BodyNumberTie = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  @media ${mobile} {
    margin-top: 0px;
  }
`;

export const BodyButton = styled.button<{ Active: any }>`
  border: none;
  width: 100px;
  height: 40px;
  background-color: #f28316;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;
  @media ${mobile} {
    width: 20vw;
    height: 50px;
    border-radius: 0px;
  }
`;

export const Export = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;
  margin-left: 10px;
  @media ${mobile} {
    width: 20vw;
    margin-left: 0px;
    height: 50px;
  }
`;
