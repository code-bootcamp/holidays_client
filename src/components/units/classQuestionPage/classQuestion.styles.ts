import styled from "@emotion/styled";
import { Input } from "antd";
import { mobile, mobileSmall } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 1113px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 150px;
  padding-top: 90px;
  border-top: 1px solid rgba(189, 189, 189, 1);

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper_body_header = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ReviewBox = styled.div`
  height: 172px;
  border: 1px solid rgba(189, 189, 189, 1);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

export const { TextArea } = Input;
export const TextAreaaa = styled(TextArea)`
  border: none;
`;

export const TextArea7 = styled.textarea`
  border: none;
  padding-top: 10px;
  padding-left: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Length = styled.div`
  padding-left: 16px;
  font-size: 15px;
  color: rgba(189, 189, 189, 1);
`;

export const ReviewWriteBtn = styled.button`
  width: 104px;
  height: 55px;
  background-color: #f28316;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  font-weight: 700;

  margin-left: 1008px;

  cursor: pointer;

  :hover {
    background-color: #e97100;
    color: #ffffff;
  }

  @media ${mobile} {
    margin-left: 85vh;
  }

  @media ${mobileSmall} {
    margin-left: 36vh;
  }
`;

export const Error = styled.div`
  font-size: 14px;
  color: red;
  margin: 10px 0px 0px 10px;
`;
