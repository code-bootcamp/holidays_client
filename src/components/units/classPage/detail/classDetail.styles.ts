import styled from "@emotion/styled";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { mobile, mobileSmall } from "../../../../commons/styles/breakPoints";

export const Wrapper = styled.div`
  width: 1113px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 70px;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_header = styled.div`
  width: 1113px;
  padding-top: 100px;

  display: flex;
  flex-direction: column;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_header_top = styled.div`
  height: 59px;
  font-size: 24px;
  font-weight: 700;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_header_bottom = styled.div`
  font-size: 15px;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  @media ${mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95vh;
  }

  @media ${mobileSmall} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vh;
  }
`;

export const Review_count = styled.div`
  font-size: 15px;
`;

export const Wrapper_header_bottom_left = styled.div``;

export const Wrapper_header_bottom_right = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1040px;

  @media ${mobile} {
    margin-left: 85vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${mobileSmall} {
    margin-left: 40vh;
  }
`;

export const SlickWrapper = styled.div`
  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Btn = styled.div`
  font-size: 15px;
  cursor: pointer;
`;

export const Slick = styled.div`
  border: 1px solid black;
  width: 1113px;
  height: 466px;
  border-radius: 15px;
`;

export const Wrapper_body_left = styled.div`
  width: 711px;

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_body_header = styled.div`
  width: 711px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #000000;
  padding: 40px 0px 20px 0px;
`;

export const Heart = styled(HeartOutlined)`
  width: 18px;
  height: 20px;
  cursor: pointer;

  :hover {
    background-color: seashell;
    border-radius: 25px;
  }
`;

export const Heart_fill = styled(HeartFilled)`
  width: 18px;
  height: 20px;
  cursor: pointer;

  :hover {
    background-color: antiquewhite;
    border-radius: 25px;
  }
`;

export const Wrapper_body_bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_body_bottom_left = styled.div`
  width: 711px;
`;

export const Wrapper_body_bottom_right = styled.div``;

export const Remarks = styled.div`
  color: rgba(189, 189, 189, 1);
  font-size: 13px;
  padding: 25px 0px 25px 0px;
`;

export const ClassInfo_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  border-top: 1px solid rgba(189, 189, 189, 1);
  border-bottom: 1px solid rgba(189, 189, 189, 1);

  @media ${mobile} {
    display: flex;
    flex-direction: row;
  }

  @media ${mobileSmall} {
    width: 50vh;
    display: flex;
    flex-direction: column;
  }
`;

export const ClassInfo_container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 0px 15px 0px;

  @media ${mobile} {
    width: 25vh;
    margin-left: 5vh;
  }

  @media ${mobileSmall} {
    width: 20vh;
    margin-left: 0vh;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  margin-right: 17px;
`;

export const ClassInfo_container_right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 43px;
`;

export const Label = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

export const SubLabel = styled.div`
  font-size: 13px;
  color: gray;
`;

export const Contents_wrapper = styled.div`
  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Contents = styled.div`
  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_footer = styled.div`
  margin-top: 100px;
  padding-top: 30px;
  border-top: 1px solid rgba(189, 189, 189, 1);

  @media ${mobile} {
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Map = styled.div`
  width: 1113px;
  height: 478px;
  border-radius: 5px;

  @media ${mobile} {
    width: 95vh;
    height: 45vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
    height: 30vh;
  }
`;

export const Address = styled.div`
  padding: 25px 0px 70px 0px;
  font-size: 17px;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
`;

export const AddressDetail = styled.div`
  font-size: 17px;
  margin-left: 10px;
`;

export const Wrapper_body = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${mobile} {
    display: flex;
    flex-direction: column;
    width: 95vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
  }
`;

export const Wrapper_body_right = styled.div`
  margin-top: 20px;

  @media ${mobile} {
    margin-top: 10vh;
  }
`;
