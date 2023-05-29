import styled from "@emotion/styled";
import { mobile, mobileSmall } from "../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${mobile} {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${mobileSmall} {
      width: 98vw;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 10vh;
  width: 640px;
  padding-bottom: 30px;
  box-shadow: 0px 0px 5px gray;
  @media ${mobile} {
    margin-top: 0px;
    width: 90%;
    box-shadow: 0px 0px 0px gray;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 52px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
  @media ${mobile} {
    width: 100%;
    font-size: 2rem;
  }

  @media ${mobileSmall} {
    font-size: 1.5rem;
  }
`;

export const HeaderLogo = styled.img`
  width: 20vw;
  height: 4.5vh;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 40px;

  @media ${mobile} {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 600px;
  margin-bottom: 10px;
  @media ${mobile} {
    font-size: 1rem;
    font-weight: 550px;
    margin-bottom: 10px;
  }
  @media ${mobileSmall} {
    font-size: 0.9rem;
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

  @media ${mobile} {
    height: 6vh;
    font-size: 0.7rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media ${mobile} {
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
  @media ${mobile} {
    width: 89%;
    height: 6vh;
    font-size: 1.1rem;
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

  @media ${mobile} {
    font-size: 1rem;
  }

  @media ${mobileSmall} {
    font-size: 0.8rem;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;
  @media ${mobile} {
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
    background: orange;
  }
  @media ${mobile} {
    width: 89%;
    height: 8vh;
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
    background: orange;
  }
  @media ${mobile} {
    width: 89%;
    height: 8vh;
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
    background: orange;
  }
  @media ${mobile} {
    width: 89%;
    height: 8vh;
  }
`;

export const SocialLoginImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;

  @media ${mobile} {
    width: 7vw;
    height: 4vh;
  }
`;

export const SocialLogin = styled.a`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 10px;
  color: black;
  text-decoration: none;

  @media ${mobile} {
    font-size: 1.1rem;
  }

  @media ${mobileSmall} {
    font-size: 1rem;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 0.76rem;
  margin-left: 6vw;
  margin-bottom: 5vh;
  margin-top: -3vh;
`;
