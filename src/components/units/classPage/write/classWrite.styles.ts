import styled from "@emotion/styled";
import { Input, InputNumber, TimePicker, SelectProps } from "antd";
import { DatePicker } from "antd";
import { mobile, mobileSmall } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 728px;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media ${mobile} {
    width: 80vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const TextInput = styled.input`
  width: 728px;
  height: 61px;
  padding-left: 16px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;

  @media ${mobile} {
    width: 80vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const CustomSelect = styled.select`
  width: 354px;
  height: 61px;
  border: 1px solid #bdbdbd;
  padding: 0px 16px 0px 16px;

  @media ${mobile} {
    width: 80vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_header = styled.div`
  margin-top: 150px;
  margin-bottom: 30px;
`;

export const Wrapper_header_left = styled.div`
  display: flex;
  align-items: center;

  font-size: 30px;
  font-weight: 700;
`;

export const BankWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const TextInput3 = styled.input`
  width: 354px;
  height: 61px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;

  @media ${mobile} {
    width: 80vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 150px;

  @media ${mobile} {
    width: 80vh;
    margin-top: 5.5vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
    margin-top: 5.5vh;
  }
`;

// 취소 버튼
export const CancelBtn = styled.div`
  background: rgba(202, 190, 179, 1);
  width: 354px;
  height: 80px;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  color: #ffffff;

  cursor: pointer;

  :hover {
    background: #bbb0a6;
  }

  @media ${mobile} {
    width: 38vh;
  }

  @media ${mobileSmall} {
    width: 24vh;
    height: 10vh;
  }
`;

// 등록 버튼
export const SubmitBtn = styled.button`
  background-color: #f28316;
  color: #ffffff;
  border-radius: 5px;

  width: 354px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  border: none;

  cursor: pointer;

  :hover {
    background-color: #e97100;
    color: #ffffff;
  }

  @media ${mobile} {
    width: 38vh;
  }

  @media ${mobileSmall} {
    height: 10vh;
    width: 24vh;
  }
`;

export const Wrapper_body = styled.div``;

export const Label = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  padding: 30px 0px 20px 0px;
`;

export const Error = styled.div`
  font-size: 16px;
  color: red;
  padding-left: 10px;
  padding-bottom: 30px;
`;

export const ToastEditor = styled.div`
  margin-bottom: 10px;
`;

export const Img_box = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 250px;
  height: 180px;
  border-radius: 5px;
  margin-right: 17px;
  border: 1px solid rgba(189, 189, 189, 1);
`;

// 클래스 소요 시간, 클래스 최대 인원
export const Wrapper_body_middle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;

  @media ${mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper_body_middle_left = styled.div`
  width: 340px;
`;

export const Time = styled(TimePicker)`
  width: 200px;
  margin-bottom: 10px;
`;

export const Number = styled(InputNumber)`
  margin-bottom: 10px;
`;

export const Wrapper_body_middle_right = styled.div`
  width: 360px;
`;

export const Wrapper_body_map = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Map = styled.div`
  width: 340px;
  height: 201px;
  border-radius: 5px;

  @media ${mobile} {
    display: flex;
    flex-direction: column;
    width: 80vh;
    height: 35vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
    height: 27vh;
  }
`;

export const Wrapper_body_map_right = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Wrapper_body_map_right_top = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;

  @media ${mobile} {
    display: flex;
    flex-direction: row;
    margin-top: 4.5vh;
    width: 80vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const AddressInput = styled(Input)`
  width: 258px;
  height: 56px;
`;

export const TextInput2 = styled.input`
  width: 250px;
  height: 61px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  margin-right: 7px;

  @media ${mobile} {
    width: 65vh;
  }

  @media ${mobileSmall} {
    width: 40vh;
  }
`;

export const AddressBtn = styled.button`
  width: 106px;
  height: 61px;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;

  cursor: pointer;
`;

export const Wrapper_body_map_right_bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressDetail_text = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  padding-bottom: 10px;
`;

export const AddressDetail = styled(Input)`
  height: 56px;
`;

export const Contents = styled.div`
  height: 300px;
  border: 1px solid rgba(189, 189, 189, 1);
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
`;

export const DatelistWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Datelist = styled.div`
  margin-top: 5px;
  font-weight: 600;
`;

export const { RangePicker } = DatePicker;
