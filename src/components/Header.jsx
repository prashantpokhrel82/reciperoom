import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from "swiper";
import Slide from "./Slide";
import cheesecake from '../assets/images/cheesecake.jpg'
import test from '../assets/images/404.svg'


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Header = () => {
  return <Wrapper className="section__padding flex__center">
    <Swiper
        // spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper swiper"
      >
        <SwiperSlide>
          <Slide image={cheesecake} title="Mighty Super Cheesecake" percentage="85" description="Look no further for a creamy and ultra smooth classic cheesecake recipe no one can deny its simple decandence."/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={test} title="Lighty Super Cheesecake" percentage="85" description="Look no further for a creamy and ultra smooth classic cheesecake recipe no one can deny its simple decandence."/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={cheesecake} title="Highty Super Cheesecake" percentage="85" description="Look no further for a creamy and ultra smooth classic cheesecake recipe no one can deny its simple decandence."/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={test} title="Sweet Super Cheesecake" percentage="85" description="Look no further for a creamy and ultra smooth classic cheesecake recipe no one can deny its simple decandence."/>
        </SwiperSlide>
      </Swiper>
  </Wrapper>;
};

export default Header;

  const Wrapper = styled.header`
  width: 100%;
  .swiper{
    width: 100%;
  }

  .swiper-slide{
    width: 100%;
  }

  .swiper-button-prev,.swiper-button-next {
    position: absolute;
    bottom: 5%;
  color: black;
  transform: scale(.5);
}



`