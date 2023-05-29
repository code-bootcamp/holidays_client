import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";
import { mobile, tablet } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;

// Banner

export const Banner = styled.div`
  display: flex;
  margin: auto;
  height: 400px;
  width: 1000px;
  margin-top: 30px;
  @media ${mobile} {
    width: 90vw;
    height: 60vw;
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 300px;
  height: 100%;
  opacity: 0.85;
  padding-top: 80px;
`;

export const SearchTitle = styled.div`
  font-weight: 700;
  font-size: 31px;
  cursor: pointer;
`;

export const ServiceAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media ${tablet} {
    flex-direction: row;
  }
`;

export const Service = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 35px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const ServiceText = styled.div`
  font-size: 14px;
`;

export const Expand = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 2px;
  margin-left: 5px;
`;

export const Area = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 35px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  @media ${tablet} {
    margin-top: 0;
  }
`;

export const AreaText = styled.div`
  font-size: 14px;
`;

export const SearchBox = styled.input`
  margin-top: 40px;
  width: 100%;
  height: 45px;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 3px;
  border: none;
  border-radius: 4px;
  :focus {
    outline: none;
  }
  @media ${tablet} {
    width: 95vw;
    margin-top: 1vw;
  }
`;

// Header

export const Header = styled.div`
  width: 1000px; /* 수정: 1200px에서 1000px로 변경 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 60px;
`;

export const Line = styled.div`
  border: 1px solid #f2f2f2;
  width: 100%;
  text-align: right;
  margin-top: 20px;
  @media ${tablet} {
    display: none;
  }
`;
export const Body = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin-bottom: 100px;
  @media ${mobile} {
    width: 100%;
  }
`;

export const PremiumAD = styled.div`
  width: 900px;
  @media ${tablet} {
    display: none;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  margin-top: 10px;
  margin-left: 20px;
`;

export const PremiumWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  animation: ${SlideBottom} 0.7s ease-in-out both;
`;

export const PremiumPosts = styled.div`
  cursor: pointer;
  margin-top: 20px;
`;

export const PremiumPostBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const PremiumTemplate = styled.article`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const PremiumPostImg = styled.img`
  width: 350px;
  height: 200px;
  width: 101%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PremiumPostTitle = styled.div`
  font-family: "Arita-SemiBold";
  font-size: 18px;
  margin-left: 2px;
`;

export const PremiumPostContent = styled.div`
  padding: 0px 2px;
`;

export const PremiumPostInfo = styled.div`
  margin-top: 5px;
`;

export const PremiumAddress = styled.div`
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
  margin-left: auto; /* 변경된 부분 */
  margin-bottom: 10px;
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

export const PremiumAvatarContentTie = styled.div`
  margin-top: 3px;
`;

export const PremiumContent = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

export const PremiumPriceTie = styled.div``;

export const PremiumPrice = styled.div`
  text-align: end;
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0px;
`;

// 클래스

export const NewestPopularity = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

export const Newest = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const Popularity = styled.div`
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 725px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 260px;
  @media ${mobile} {
    width: 100%;
    margin-left: 0vw;
    margin-top: 0vw;
    justify-content: center;
  }
`;

export const Posts = styled.div`
  width: 725px;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px rgba(0.2, 0.2, 0.2, 0.2);
  }
  @media ${mobile} {
    width: 100%;
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media ${mobile} {
  }
`;

export const Template = styled.article`
  width: 150px;
  height: 150px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
`;

export const PostImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  padding: 8px;
`;

export const PostTitle = styled.div`
  font-family: "Arita-SemiBold";
  font-size: 18px;
  margin-bottom: 5px;
  padding-left: 3px;
  @media ${mobile} {
    font-size: 15px;
    margin: 3vw 0vw;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const PostInfo = styled.div`
  padding-left: 3px;
`;

export const Address = styled.div`
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
  margin-left: auto; /* 변경된 부분 */
  margin-bottom: 10px;
  @media ${mobile} {
    margin-left: 0%;
  }
`;

export const Time = styled.div`
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

export const AvatarContentTie = styled.div``;

export const Content = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const PriceTie = styled.div`
  width: 550px;
  text-align: end;
  @media ${mobile} {
    width: 100%;
    text-align: start;
  }
`;

export const Price = styled.div`
  font-size: 15px;
  font-family: "Arita-SemiBold";
  @media ${mobile} {
    margin-top: 3vw;
  }
`;

export const ClassWrapper = styled.div`
  display: flex;
`;

export const Class = styled.div`
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
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
`;
