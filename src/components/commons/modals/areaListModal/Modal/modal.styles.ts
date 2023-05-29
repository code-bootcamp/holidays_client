import { CloseOutlined, CloseSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
`;

export const Wrapper = styled.div`
  width: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 20px 0px 20px 20px;
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

export const ContentsWrapper = styled.div`
  max-height: 574px;
  overflow: auto;
  padding-bottom: 30px;
`;

export const Contents = styled.div`
  font-size: 15px;
  padding: 15px 0px 15px 20px;
  overflow: auto;
  border-bottom: 1px solid #f2f2f2;
  margin: 0px 10px;
  cursor: pointer;
  :hover {
    background-color: #f2f2f2;
  }
`;

export const DivideLine = styled.div`
  border: 1px solid #f2f2f2;
`;
