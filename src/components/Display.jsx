import React, { useState, useEffect } from "react";
import { useGetRecipesByTagNameQuery } from "../redux/services/tastyApi";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import Recipe from "./Recipe";

const Display = ({ tagName }) => {
  let recipesNumber = 5;
  const [recipes, setRecipes] = useState([]);
  const { data, isFetching, isError } = useGetRecipesByTagNameQuery({
    tagName: tagName?.name,
    size: recipesNumber,
  });
  useEffect(() => {
    setRecipes(data);
  }, [data]);
  console.log(data);
  if (isFetching) return <Loading />;
  if (isError) return <Error />;

  return (
    <Wrapper>
      <div className="section__padding">
        <h2>{tagName?.display_name}</h2>

        <div className="recipes">
          {recipes?.results.map((recipe) => {
            const rating = (recipe?.user_ratings?.score * 5).toFixed(1);
            return (
              <Recipe
                key={recipe?.id}
                name={recipe?.name}
                rating={rating}
                image={recipe?.thumbnail_url}
                alt={recipe?.thumbnail_alt_text || "image"}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Display;

const Wrapper = styled.div`
  .recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
    column-gap: 2rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
`;
