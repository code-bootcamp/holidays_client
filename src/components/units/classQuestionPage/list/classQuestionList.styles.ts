import styled from "@emotion/styled";
import { Rate } from "antd";
import { mobile, mobileSmall } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 1113px;
  display: flex;
  flex-direction: column;
  margin: auto; // 가운데 정렬
  margin-bottom: 70px;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Box = styled.div`
  width: 1130px;
  overflow: auto;
  margin: auto;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_header = styled.div`
  display: flex;
  flex-direction: column;
`;

// 후기 개수
export const ReviewCount = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const Row = styled.div`
  margin-bottom: 20px;
  /* background-color: purple; */
`;

export const Wrapper_header_top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${mobile} {
    width: 92vh;
  }

  @media ${mobileSmall} {
    width: 47vh;
  }
`;

export const ReviewWriter = styled.div`
  width: 100px;
`;

// 별점
export const Star = styled(Rate)`
  @media ${mobileSmall} {
    width: 20vh;
  }
`;

export const BtnWrapper = styled.div`
  width: 65px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 811px;

  @media ${mobile} {
    margin-left: 50vh;
  }

  @media ${mobileSmall} {
    margin-left: 6vh;
  }
`;

export const UpdateBtn = styled.div`
  font-size: 13px;
  cursor: pointer;
`;

export const DeleteBtn = styled.div`
  font-size: 13px;
  cursor: pointer;
`;

export const Date = styled.div`
  font-size: 15px;
  color: rgba(189, 189, 189, 1);
  font-weight: 500;
`;

export const Contents = styled.div`
  padding: 20px 0px 20px 0px;
  font-size: 13px;
`;
