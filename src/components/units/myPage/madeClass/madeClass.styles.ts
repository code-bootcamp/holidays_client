import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";
import { tablet } from "../../../../commons/styles/breakPoints";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 830px;
  margin-top: 80px;
  margin-bottom: 350px;
  @media ${tablet} {
    width: 90vw;
    flex-direction: column;
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
  margin-top: 2px;
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
  width: 100%;
  @media ${tablet} {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    padding: 0px;
  }
  margin-bottom: 10px;
`;

export const PremiumPosts = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PremiumPostBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PremiumTemplate = styled.article`
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 7px;
`;

export const PremiumPostImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PremiumPostTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const PremiumPostContent = styled.div`
  width: 690px;
  padding: 20px;
`;

export const PremiumPostInfo = styled.div``;

export const PremiumUserSummary = styled.div`
  font-size: 15px;
  color: rgb(81, 91, 96);
  margin-bottom: 10px;
`;

export const Tie = styled.div`
  display: flex;
`;

export const PremiumUserCategory = styled.div`
  width: fit-content;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: rgb(81, 91, 96);
  background-color: rgb(254, 249, 243);
  border: 1px solid rgb(242, 131, 22);
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
`;

export const PremiumUserTime = styled.div`
  font-size: 15px;
  color: rgb(81, 91, 96);
  margin-bottom: 10px;
`;

export const PremiumUserName = styled.div`
  margin-bottom: 5px;
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
  margin-bottom: 10px;
`;

export const PremiumAvatarContentTie = styled.div``;

export const PremiumContent = styled.div`
  margin-bottom: 5px;
`;

export const PremiumPriceTie = styled.div``;

export const PremiumPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0px;
`;

export const ButtonTie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const AdButton = styled.button`
  width: 120px;
  height: 45px;
  margin-top: 40px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  background-color: #f28316;
  border: none;
  color: white;
  :hover {
    background-color: #e97100;
  }
  &.Advertising {
    width: 120px;
    height: 45px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    border-radius: 4px;
    background-color: #f2f2f2;
    border: none;
    color: black;
  }
`;

export const DeleteButton = styled.button`
  width: 120px;
  height: 45px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  background-color: #f2f2f2;
  border: none;
  margin-top: 20px;
`;
