import styled from "@emotion/styled";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mobile, mobileSmall } from "../../../../commons/styles/breakPoints";

const SliderComponent = styled(Slider)`
  .slick-dots {
    bottom: 25px;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  .slick-dots li button:before {
    color: white;
  }

  .slick-arrow {
    display: block;
    width: 40px;
    height: 40px;
  }

  .slick-prev {
    left: 5%;
    z-index: 50;
  }

  .slick-next {
    right: 5%;
    z-index: 50;
  }

  .slick-next:before,
  .slick-prev::before {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    background-color: #ddd;
    border-radius: 50%;
  }
  .slick-next:before {
    background-size: 10px;
    background-image: url("/classPage/next.png");
    background-position: center;
    background-repeat: no-repeat;
  }

  .slick-prev:before {
    background-size: 10px;
    background-image: url("/classPage/before.png");
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Wrapper = styled.div`
  width: 1113px;
  height: 466px;
  border-radius: 15px;

  @media ${mobile} {
    width: 95vh;
    height: 43vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
    height: 30vh;
  }
`;

// 이미지
const Img = styled.img`
  width: 1113px;
  height: 466px;
  border-radius: 15px;

  @media ${mobile} {
    width: 95vh;
    height: 43vh;
  }

  @media ${mobileSmall} {
    width: 50vh;
    height: 30vh;
  }
`;

export const MarketImg = styled.div`
  width: 480px;
  background-position: center;
  height: 480px;
`;

export default function SlickPage(props: any) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <SliderComponent {...settings}>
        {props.src && props.src.map((el: any) => <Img src={`${el.url}`} />)}
      </SliderComponent>
    </Wrapper>
  );
}
