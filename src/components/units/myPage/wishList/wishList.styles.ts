import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";
import { mobile } from "../../../../commons/styles/breakPoints";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 830px;
  margin-top: 80px;
  @media ${mobile} {
    width: 100%;
    padding: 0px 5vw;
  }
`;

export const ListNameIconWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  @media ${mobile} {
  }
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
  animation: ${SlideBottom} 0.7s ease-in-out both;
  margin-bottom: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-collapse: collapse;
  padding: 10px;
  @media ${mobile} {
    width: 100%;
    padding: 0vw;
    justify-content: center;
    margin-bottom: 30vw;
  }
`;

export const PremiumPosts = styled.div`
  margin-bottom: 50px;
  cursor: pointer;
  width: 250px;
  @media ${mobile} {
    width: 89vw;
    margin-bottom: 10vw;
  }
`;

export const PremiumPostBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PremiumTemplate = styled.article`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 7px;
`;

export const PremiumPostImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PremiumPostTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  @media ${mobile} {
    margin: 3vw 0vw;
  }
`;

export const PremiumPostContent = styled.div``;

export const PremiumPostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PremiumUser = styled.div`
  width: fit-content;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 20px;
  color: rgb(81, 91, 96);
  background-color: rgb(242, 250, 249);
  border: 1px solid rgb(0, 150, 136);
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 5px;
  margin-right: 4px;
`;

export const PremiumAvatarContentTie = styled.div``;

export const PremiumContent = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const PremiumPriceTie = styled.div``;

export const PremiumPrice = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 700;
`;

export const PremiumTime = styled.div`
  width: fit-content;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 20px;
  color: rgb(81, 91, 96);
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 5px;
  margin-right: 4px;
`;
