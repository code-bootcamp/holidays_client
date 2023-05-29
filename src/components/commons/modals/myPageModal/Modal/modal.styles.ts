import { CloseOutlined, CloseSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 130px;
  left: 1470px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
  border: 1px solid rgb(218, 221, 224);
  border-radius: 6px;
  box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
  border-radius: 6px;
`;

export const Wrapper = styled.div`
  width: 200px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`;

export const NaviWrapper = styled.div`
  width: 200px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin: 10px 0px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 20px 20px 20px 20px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 17px;
  width: 335px;
  color: #f28316;
  font-weight: 600;
`;

export const Close = styled(CloseSquareOutlined)`
  margin-top: 3px;
  color: #4f4f4f;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30px);
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div``;

export const Contents = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 15px 15px 15px 20px;
  overflow: auto;
  margin: 0px 10px;
  cursor: pointer;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const DivideLine = styled.div`
  border: 1px solid #f2f2f2;
`;
