import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 900px;
  margin-top: 80px;
`;

export const ListNameIconWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const ListName = styled.h1`
  font-size: 23px;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 7px;
  margin-left: 10px;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #cabeb3;
  margin: 30px 0px 50px 0px;
`;

export const Box = styled.div`
  width: 100%;
  height: 530px;
  margin-bottom: 200px;
  background-color: #e7e1d8;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Emoji = styled.div`
  font-size: 128px;
`;

export const Text = styled.p`
  font-size: 22px;
  color: #828282;
`;

export const MainText = styled.p`
  font-size: 25px;
  color: #4a4247;
`;

export const Button = styled.div`
  background: #f28316;
  border-radius: 8px;
  width: 365px;
  height: 78px;
  font-size: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 30px;
  :hover {
    background-color: #e97100;
  }
`;

// 리스트
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1215px;
  margin-top: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1215px;
`;

export const PremiumAD = styled.div``;

export const Title = styled.div`
  margin-bottom: 25px;
  font-weight: 700;
`;

export const PremiumWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${SlideBottom} 0.7s ease-in-out both;
  margin-bottom: 300px;
`;

export const PremiumPosts = styled.div`
  width: 280px;
  cursor: pointer;
`;

export const PremiumPostBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PremiumTemplate = styled.article`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
`;

export const PremiumPostImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PremiumPostTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const PremiumDate = styled.div`
  font-size: 16px;
  color: #828282;
  width: 100%;
  text-align: end;
`;

export const PremiumPostContent = styled.div``;

export const PremiumPostInfo = styled.div``;

export const PremiumUser = styled.div`
  color: #4a4247;
  font-size: 14px;
  margin-top: 10px;
`;

export const PremiumAvatarContentTie = styled.div``;

export const PremiumContent = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const PremiumPriceTie = styled.div``;

export const PremiumPrice = styled.div`
  text-align: end;
`;
