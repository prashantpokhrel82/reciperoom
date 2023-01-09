import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import Slide from "./Slide";
import cheesecake from "../assets/images/cheesecake.jpg";
import test from "../assets/images/404.svg";
import { useGetRecipesByTagNameQuery } from "../redux/services/tastyApi";
import Loading from "./Loading";
import Error from "./Error";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Header = ({ tagName }) => {
  let sliderSize = 5;
  const [recipes, setRecipes] = useState([]);
  const { data, isFetching, isError } = useGetRecipesByTagNameQuery({
    tagName: tagName?.name,
    size: sliderSize,
  });
  useEffect(() => {
    setRecipes(data);
  }, [data]);

  if (isFetching) return <Loading />;
  if (isError) return <Error />;
  console.log(recipes);

  return (
    <Wrapper className="section__padding flex__center">
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
        {recipes?.results.map((recipe) => (
          <SwiperSlide key={recipe?.id}>
            <Slide
              id={recipe?.id}
              image={recipe?.thumbnail_url}
              alt={recipe?.thumbnail_alt_text || "image"}
              title={recipe?.name}
              percentage={recipe?.user_ratings?.count_positive || 0}
              description={recipe?.description || ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;

  .swiper {
    width: 100%;
    box-shadow: var(--shadow-soft);
  }

  .swiper-slide {
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background: var(--color-primary-semitransparent);
    padding: 2rem;
    border-radius: 50%;
    color: black;
    transform: scale(0.5);
  }
`;
