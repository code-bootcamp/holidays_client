import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  /* margin-top: 100px; */
  width: 640px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 5px gray;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 48px;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 24px;
    font-weight: 550px;
    margin-bottom: 10px;
  }
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LoginButton = styled.button`
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

  @media screen and (max-width: 768px) {
    width: 89%;
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Subtitle = styled.div`
  color: gray;
  font-size: 18px;
  margin: 0px 10px 0px 10px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialNaverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  background: rgba(204, 255, 204, 0.8);
  border-radius: 5px;
  margin-bottom: 10px;

  cursor: pointer;

  &:hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    width: 89%;
  }
`;

export const SocialKakaoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  background: lightyellow;
  border-radius: 5px;
  margin-bottom: 10px;

  cursor: pointer;

  &:hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    width: 89%;
  }
`;

export const SocialGoogleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 480px;
  background: rgba(255, 153, 153, 0.5);
  border-radius: 5px;
  margin-bottom: 10px;

  cursor: pointer;

  &:hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    width: 89%;
  }
`;

export const SocialLoginImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const SocialLogin = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 10px;
`;
