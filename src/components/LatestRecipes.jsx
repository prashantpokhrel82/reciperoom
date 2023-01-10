import React from "react";
import styled from "styled-components";
import { Recipe } from "../components";

const LatestRecipes = () => {
  return (
    <Wrapper className="section__padding">
      <div className="container">
        <h2>Latest Recipes</h2>
        <div className="recipes">
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestRecipes;

const Wrapper = styled.div`
  .container {
  }

  .recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  h2 {
    margin-bottom: 3rem;
  }
`;
