import styled from "@emotion/styled";
import { DatePicker, Space } from "antd";
import { mobile, mobileSmall } from "../../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 341px;

  box-shadow: 0px 0px 7px gray;
  border-radius: 20px;
  position: sticky;
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mobile} {
    width: 95vh;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Contents = styled.div`
  width: 291px;
  display: flex;
  flex-direction: column;
  padding: 30px 0px 30px 0px;
`;

export const Error = styled.div`
  font-size: 14px;
  color: red;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 17px;

  @media ${mobile} {
    margin-top: 1.5vh;
  }
`;

export const Spaced = styled(Space)`
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const { RangePicker } = DatePicker;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  padding: 0px 0px 25px 0px;
  margin-top: 10px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`;

export const Num = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  margin-right: 20px;
`;

export const Number = styled.input`
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  text-align: right;
  padding-right: 17px;
`;

export const Number2 = styled.div`
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Row = styled.div`
  width: 291px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 1);
  margin: 30px 0px 30px 0px;
`;

export const Num2 = styled.div`
  font-size: 17px;
`;

export const Price = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const Sum = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const Calendar = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BtnWrapper = styled.button`
  background-color: #f28316;
  color: #ffffff;
  font-size: 15px;

  width: 291px;
  height: 50px;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0px 25px 0px;

  cursor: pointer;

  :hover {
    background-color: #e97100;
    color: #ffffff;
  }

  @media ${mobile} {
    height: 10vh;
    margin-bottom: 7.5vh;
  }

  @media ${mobileSmall} {
    height: 8vh;
  }
`;

export const Modal_wrapper = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  margin: 25px 0px 25px 40px;
`;

export const Modal_row = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 0px 10px 0px;
`;

export const RowText = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

export const RowText2 = styled.div`
  font-size: 17px;
  border: 1px solid rgba(189, 189, 189, 1);
  border-radius: 10px;
  padding: 10px;
  padding-left: 15px;
  margin-top: 5px;
`;
