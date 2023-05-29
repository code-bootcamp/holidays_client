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
  width: 350px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 35px 25px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  font-size: 17px;
  width: 335px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Close = styled(CloseSquareOutlined)`
  margin-top: 3px;
  color: #4f4f4f;
`;
export const ContentsWrapper = styled.div``;

export const Labal = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ContentsInput = styled.input`
  width: 100%;
  height: 47px;
  border: 1px solid #bdbdbd;
  border-radius: 6px 0px 0px 6px;
  margin-bottom: 15px;
  padding-left: 15px;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 145px;
  height: 46px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  &.Cancel {
    border: 1px solid rgba(0, 0, 0, 0.23);
    background-color: white;
    :hover {
      background: #f2f2f2;
    }
  }

  &.Edit {
    background: #fef9f3;
    border: 1px solid rgba(242, 131, 22, 0.5);
    :hover {
      border: 2px solid rgba(242, 131, 22, 0.5);
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContentsInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContentsInputButton = styled.button`
  cursor: pointer;
  width: 130px;
  height: 47px;
  border-radius: 0px 6px 6px 0px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;

  &.GetCertified {
    border: 1px solid #f28316;
    background-color: #f28316;
    :hover {
    }
  }

  &.AuthenticationCheck {
    border: 1px solid #bdbdbd;
    background-color: #bdbdbd;
    :hover {
    }
  }
`;
