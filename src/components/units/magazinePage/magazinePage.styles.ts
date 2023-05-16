import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* height: 1000px;  */
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 70px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 270px;
  height: 50px;
  margin-bottom: 10px;
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
`;

export const Editor = styled.div`
  width: calc(100% - 500px);
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const divideLine = styled.div`
  width: calc(100% - 500px);
  border: 1px solid;
  margin-bottom: 30px;
`;

export const Body = styled.div`
  width: calc(100% - 500px);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const ContentsLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
  padding-left: 100px;
`;

export const ContentsRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 100px;
`;

export const ContentsImageLeft = styled.img`
  width: 600px;
  height: 400px;
  margin-right: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.008);
  }
`;

export const ContentsImageRight = styled.img`
  width: 350px;
  height: 500px;
  margin-left: 100px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px gray;
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ContentsTextWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 700px; */
  justify-content: flex-end;
  padding-bottom: 50px;
`;

export const ContentsTextWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 110px;
`;

export const ContentsLabelLeft = styled.div`
  font-size: 48px;
`;

export const ContentsRemarksLeft = styled.div`
  font-size: 36px;
  margin-top: 20px;
  font-weight: 335;
`;

export const ContentsLabelRight = styled.div`
  font-size: 48px;
`;

export const ContentsRemarksRight = styled.div`
  font-size: 36px;
  margin-top: 20px;
  font-weight: 335;
`;
