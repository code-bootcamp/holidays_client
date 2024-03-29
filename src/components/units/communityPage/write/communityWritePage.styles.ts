import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { mobile } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 700px;
  border: 1px solid black;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  border-radius: 8px;
  padding: 80px 64px 100px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  @media ${mobile} {
    width: 100%;
    box-shadow: 0px 0px 0px;
    margin-top: 30px;
    padding: 80px 34px 100px 34px;
    margin-bottom: 5vh;
  }
`;

export const TitleMain = styled.div`
  width: 100%;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 23px;
  margin-left: 30px;
  @media ${mobile} {
    margin-left: 0px;
  }
`;

export const TitleTextWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media ${mobile} {
    padding: 0px;
  }
`;

export const Text = styled.li`
  width: 100%;
  font-size: 15px;
  margin-top: 10px;
  @media ${mobile} {
    font-size: 10px;
  }
`;

export const Box = styled.div`
  width: 550px;
  height: 200px;
  box-shadow: rgb(234 235 239 / 80%) 0px 2px 4px 0px;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  @media ${mobile} {
    width: 100%;
    box-shadow: 0px 0px 0px 0px;
    border: none;
    height: 12vh;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-family: "Jalnan";
  margin-bottom: 10px;
  margin-left: 10px;
  @media ${mobile} {
    margin-left: 0px;
  }
`;

export const WriterWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  @media ${mobile} {
    width: 100%;
  }
`;

export const Writer = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  font-family: "SCDream4";
  font-size: 15px;
  box-shadow: rgb(234 235 239 / 80%) 0px 2px 4px 0px;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: "SCDream4";

  &.Img {
    text-align: center;
  }
`;

export const ToastEditorWrapper = styled.div`
  width: 550px;
  @media ${mobile} {
    width: 37vh;
    margin: auto;
  }
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  @media ${mobile} {
    width: 100%;
  }
`;

export const Subject = styled.input`
  width: 550px;
  height: 52px;
  padding-left: 16px;
  font-family: "SCDream4";
  font-size: 15px;
  box-shadow: rgb(234 235 239 / 80%) 0px 2px 4px 0px;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  @media ${mobile} {
    width: 100%;
  }
`;

export const Contents = styled.textarea`
  width: 550px;
  height: 280px;
  padding-left: 16px;
  padding: 14px;
  font-family: "SCDream4";
  font-size: 15px;
  box-shadow: rgb(234 235 239 / 80%) 0px 2px 4px 0px;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  @media ${mobile} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 550px;
  padding-top: 40px;
  @media ${mobile} {
    width: 100%;
  }
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media ${mobile} {
  }
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  @media ${mobile} {
    width: 100%;
  }
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
  font-family: "SCDream4";
  font-size: 16px;
  @media ${mobile} {
    margin-right: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  @media ${mobile} {
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-family: "SCDream4";
  @media ${mobile} {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: orange;
  border: 1px solid orange;
  font-size: 16px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props: any) => (props.Active ? "gold" : " orange")};
  font-family: "SCDream4";
  @media ${mobile} {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;

export const ImageResult = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  background-size: cover;
  border: 1px solid #dbdbdb;
`;

export const WrapperReactQuill = styled.div`
  height: 500px;
`;
