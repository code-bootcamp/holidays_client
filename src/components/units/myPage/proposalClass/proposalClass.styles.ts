import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";
import { mobile } from "../../../../commons/styles/breakPoints";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 900px;
  margin-top: 80px;
  @media ${mobile} {
    width: 100%;
    padding: 0px 5vw;
  }
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
  margin-top: 1px;
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
  @media ${mobile} {
    width: 100%;
  }
`;

export const Emoji = styled.div`
  font-size: 128px;
`;

export const Text = styled.p`
  font-size: 22px;
  color: #828282;
  @media ${mobile} {
    font-size: 20px;
    margin-top: 5vw;
  }
`;

export const MainText = styled.p`
  font-size: 25px;
  color: #4a4247;
  @media ${mobile} {
    font-size: 22px;
  }
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

  @media ${mobile} {
    width: 80vw;
  }
`;

// 리스트
export const Header = styled.div`
  display: flex;
  width: 1215px;
  margin-top: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 1215px;
`;

export const PremiumAD = styled.div``;

export const Title = styled.div`
  margin-bottom: 25px;
  font-weight: 700;
`;

export const PremiumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-collapse: collapse;
  justify-content: space-between;
  align-items: center;
  animation: ${SlideBottom} 0.7s ease-in-out both;
  margin-bottom: 300px;
  width: 100%;
`;

export const Posts = styled.div``;

export const PremiumPosts = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  width: 447px;
  padding: 15px 10px 15px 5px;
  margin-bottom: 7px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0.2, 0.2, 0.2, 0.2);
  }
`;

export const PremiumPostBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PremiumTemplate = styled.article`
  border-radius: 4px;
  padding-left: 5px;
`;

export const PremiumPostImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

export const PremiumPostTitle = styled.div`
  font-weight: 700;
  font-size: 17px;
`;

export const PremiumPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
  width: 100%;
`;

export const PremiumPostInfo = styled.div`
  margin-top: 3px;
`;

export const PremiumDate = styled.div`
  color: #4a4247;
  font-size: 14px;
`;

export const PremiumAvatarContentTie = styled.div``;

export const PremiumContent = styled.div`
  color: #4a4247;
  font-size: 14px;
`;

export const TextColor = styled.span`
  color: #f28316;
  font-size: 14px;
  font-weight: 500;
`;

export const PremiumUserTie = styled.div``;

export const PremiumUser = styled.div`
  font-size: 14px;
  color: #4a4247;
`;

export const ButtonTie = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Approve = styled.button`
  background-color: #f28316;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  width: 90px;
  height: 36px;
  font-size: 14px;
  font-weight: 700;
  margin: 0px 5px;
  :hover {
    background-color: #e97100;
  }
`;

export const Cancel = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #f2f2f2;
  width: 90px;
  height: 36px;
  font-size: 14px;
  font-weight: 700;
  margin: 0px 5px;
`;

export const PremiumPriceTie = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 400px;
`;

export const PremiumPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
