import styled from "styled-components";
import React from "react";
import Rating from "./Rating";

const Recipe = ({ name, rating, image, alt }) => {
  // console.log(name, rating, image, alt)
  return (
    <Wrapper>
      <div className="recipe">
        <div className="recipe-image">
          <img src={image} alt={alt} />
        </div>
        {rating && <Rating rating={rating} />}
        <p>{name}</p>
      </div>
    </Wrapper>
  );
};

export default Recipe;

const Wrapper = styled.div`
  .recipe {
    height: 300px;
    width: 340px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .recipe-image {
    height: 80%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }
  }

  p {
    font-weight: 700;
    text-transform: capitalize;
  }

  @media screen and (max-width: 450px) {
    .recipe {
      height: 300px;
      width: 100%;
    }
  }
`;
