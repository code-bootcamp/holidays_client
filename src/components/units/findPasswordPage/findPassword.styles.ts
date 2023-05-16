import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-top: 100px;
  width: 640px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 5px gray;
`;

export const HeaderTitle = styled.div`
  font-size: 48px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 600px;
  margin-bottom: 10px;
`;

export const defaultInput = styled.input`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 16px;

  border: none;
  background: #f5f5f5;
`;

export const EmailWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const FirstEmail = styled.input`
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-right: 30px;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;

  border: none;
  background: #f5f5f5;
`;

export const EmailConnector = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const LastEmail = styled.select`
  width: 300px;
  border-radius: 5px;
  color: gray;
  font-size: 16px;
  padding-left: 10px;
`;

export const defaultAddress = styled.option`
  color: gray;
`;

export const FindButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const FindButton = styled.button`
  width: 480px;
  height: 50px;
  border: none;
  font-size: 24px;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background: orange;
    color: white;
  }
`;
