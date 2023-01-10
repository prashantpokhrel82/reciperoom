import React from "react";
import styled from "styled-components";
import cheesecake from "../assets/images/cheesecake.jpg";

const PopularCategories = () => {
  return (
    <Wrapper>
      <div className="section__padding">
        <h2>Popular Categories</h2>
        <div className="categories">
          <div className="category">
            <div className="category-image">
              <img src={cheesecake} alt="image" />
            </div>
            <p>Title</p>
          </div>
          <div className="category">
            <div className="category-image">
              <img src={cheesecake} alt="image" />
            </div>
            <p>Title</p>
          </div>
          <div className="category">
            <div className="category-image">
              <img src={cheesecake} alt="image" />
            </div>
            <p>Title</p>
          </div>
          <div className="category">
            <div className="category-image">
              <img src={cheesecake} alt="image" />
            </div>
            <p>Title</p>
          </div>
          <div className="category">
            <div className="category-image">
              <img src={cheesecake} alt="image" />
            </div>
            <p>Title</p>
          </div>
          <div className="category">
            <div className="category-image">
              <img src={cheesecake} alt="image" />
            </div>
            <p>Title</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PopularCategories;

const Wrapper = styled.div`
  .categories {
    margin: 1rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .category {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .category-image {
    height: 170px;
    width: 170px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  p {
    font-weight: 700;
    font-size: 1rem;
  }

  @media screen and (max-width: 638px) {
    .category-image {
      height: 150px;
      width: 150px;
    }
  }
`;
