import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 100;
  border-radius: 15px;
`;

export const Wrapper = styled.div`
  width: 800px;
  height: 1000px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 30px 30px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 48px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 30px);
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  /* color: #ffffff; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 35px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e97100;
    color: #ffffff;
  }
`;

export const MainImage = styled.img`
  width: 600px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px gray;
`;

export const Contents = styled.div`
  font-size: 24px;
  padding: 20px 20px;
  margin-top: 20px;
  margin-bottom: 10px;

  height: 500px;
  overflow: auto;
`;

export const SubtitleWrapper = styled.div``;

export const Subtitle = styled.div`
  width: 700px;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  color: #333333;
`;

export const DivideLine = styled.div`
  width: 700px;
  border: 1px solid #333333;
  margin: 10px 0px 40px 0px;
`;
