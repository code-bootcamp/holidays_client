import styled from "@emotion/styled";
import { SlideBottom } from "../../../../commons/styles/keyframes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1100px;
  margin: auto;
  margin-top: 200px;
`;

export const TitleTie = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 31px;
  margin-right: 370px;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const Service = styled.div`
  width: 130px;
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

export const InputBox = styled.input`
  margin-top: 40px;
  width: 590px;
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
`;

export const Line = styled.div`
  border: 1px solid #f2f2f2;
  width: 100%;
  text-align: right;
  margin-top: 30px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  border-collapse: collapse;
  margin-top: 30px;
  margin-bottom: 100px;
  animation: ${SlideBottom} 0.7s ease-in-out both;
`;

export const Posts = styled.div`
  width: 265px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Template = styled.article`
  width: 265px;
  height: 177px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const PostImg = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.08);
  }
`;

export const PostTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 3px;
  width: 240px;
`;

export const PostContent = styled.div``;

export const PostInfo = styled.div``;

export const Address = styled.div`
  color: #757575;
  font-size: 12px;
`;

export const AvatarContentTie = styled.div``;

export const Content = styled.div`
  font-size: 14px;
`;

export const PriceTie = styled.div``;

export const Price = styled.div`
  font-size: 12px;
  color: #757575;
`;
