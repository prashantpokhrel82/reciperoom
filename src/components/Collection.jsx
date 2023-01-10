import React from "react";
import styled from "styled-components";
import cheesecake from "../assets/images/cheesecake.jpg";

const Collection = () => {
  return (
    <Wrapper>
      <div className="collection">
        <div className="collection-image">
          <img src={cheesecake} alt="image" />
        </div>
        <div className="collection-content">
          <h4>Sushi Combos for your Party</h4>
          <p>156 Recipes</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Collection;

const Wrapper = styled.div`
  .collection {
    width: 550px;
    border: 1px solid var(--color-medium-gray);
    border-radius: 5px;
  }

  .collection-image {
    height: 400px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }
  }

  .collection-content {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    width: 60%;
  }

  p {
    border: 2px solid var(--color-black);
    padding: 0.2rem 1rem;
    border-radius: 5px;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    .collection {
      width: 100%;
    }

    .collection-content {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 1280px) {
    .collection {
      width: 450px;
    }

    .collection-image {
      height: 320px;
    }
  }
`;
