import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 15px;
`;

export const Wrapper = styled.div`
  width: 800px;

  height: 500px;
  background: #ffffff;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 30px 30px;
`;

export const Contents = styled.div`
  width: calc(100% - 30px);
  font-size: 24px;
  padding: 20px 20px;
  margin-top: 20px;
  margin-bottom: 10px;

  height: 500px;
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30px);
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  width: 85px;
  height: 50px;

  background-color: #f28316;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e97100;
    color: #ffffff;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Table = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 1);
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`;

export const Row = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
`;

// 마지막 행
export const Row2 = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Row_left = styled.div`
  width: 170px;

  font-size: 16px;
  font-weight: 600;
`;
export const Row_right = styled.div`
  font-size: 16px;
  color: gray;
`;

export const Row_right2 = styled.div`
  width: 150px;
  font-size: 16px;
  color: gray;
`;

export const RowText = styled.div`
  background-color: #eae7e7;
  padding: 10px;
  border-right: 1px solid rgba(189, 189, 189, 1);
  font-size: 16px;
  color: #656363;
  padding-left: 16px;
`;

export const RowText22 = styled.div`
  background-color: #eae7e7;
  font-size: 16px;
  color: #656363;
  padding: 10px;
  border-left: 1px solid rgba(189, 189, 189, 1);
  border-right: 1px solid rgba(189, 189, 189, 1);
  padding-left: 16px;
`;

export const RowTextLong = styled.div`
  width: 499px;
  font-size: 16px;
  padding: 10px;
  padding-left: 16px;
`;

export const RowText2 = styled.div`
  width: 180px;
  font-size: 16px;
  padding: 10px;
  padding-left: 16px;
`;

export const Explain = styled.div`
  margin-top: 20px;
`;

export const Explain_row = styled.div`
  font-size: 14px;
  color: #656363;
  margin-top: 10px;
  margin-left: 15px;
`;
