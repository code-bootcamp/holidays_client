import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 700px;
  border: 1px solid black;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  border-radius: 8px;
  padding: 80px 64px 100px 64px;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const TitleImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h1`
  margin-bottom: 19px;
  font-size: 50px;
`;

export const UserButtonTie = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserTie = styled.div`
  margin-bottom: 30px;
`;

export const UserName = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Time = styled.div`
  font-size: 15px;
  color: #999;
`;

export const LikeButton = styled.button`
  height: 40px;
  width: 85px;
  font-size: 15px;
  border: none;
  background-color: white;
  border: 1px solid rgb(242, 131, 22);
  color: rgb(242, 131, 22);
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #fafafa;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const WrapperContents = styled.div``;

export const Contents = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const CommentWrite = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 55px;
  background-color: #f2f2f2;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  border: none;
  border-radius: 4px;
  :focus {
    outline: none;
  }
`;

export const CommentBox = styled.div`
  margin-top: 30px;
  padding: 0px 7px;
`;

export const CommentUser = styled.div`
  font-size: 16px;
`;

export const CommentTime = styled.div`
  font-size: 15px;
  color: #999;
  margin-top: 2px;
`;

export const CommentContents = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 175px;
  height: 45px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &.Edit {
    color: gray;
  }
`;
