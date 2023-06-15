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
  width: 750px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  font-size: 17px;
  width: 335px;
  color: #f28316;
  font-weight: 600;
`;

export const Close = styled(CloseSquareOutlined)`
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
  padding: 20px;
  border-bottom: 1px solid #f2f2f2;
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const Context_Tr = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;

export const Table = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 1);
  border-left: 1px solid rgba(189, 189, 189, 1);
`;

export const Tr = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`;

export const Div = styled.div`
  width: 20%;
  font-size: 15px;
  font-weight: 900;

  background-color: rgba(217, 217, 217, 1);

  border-right: 1px solid rgba(189, 189, 189, 1);
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const Div2 = styled.div`
  width: 30%;
  font-size: 15px;

  border-right: 1px solid rgba(189, 189, 189, 1);

  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const DivideLine = styled.div`
  border: 1px solid #f2f2f2;
`;

export const BtnWrapper = styled.button`
  background-color: #f28316;
  color: #ffffff;
  font-size: 15px;

  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
