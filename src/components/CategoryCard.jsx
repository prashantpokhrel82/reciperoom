import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGetRecipesByTagNameQuery } from "../redux/services/tastyApi";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const CategoryCard = ({ display_name, name, id }) => {
  const [recipe, setRecipe] = useState({});
  const { data, isFetching, isError } = useGetRecipesByTagNameQuery({
    tagName: name,
    size: 1,
  });
  useEffect(() => {
    setRecipe(data?.results[0]);
  }, [data]);

  if (isFetching) return <Loading />;
  if (isError) return <Error />;

  return (
    <Wrapper>
      <Link to={`/search/${name}`}>
        <div className="category">
          <div className="category-image">
            <img
              src={recipe?.thumbnail_url || logo}
              alt={recipe?.thumbnail_alt_text || "category_image"}
            />
          </div>
          <p>{display_name}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default CategoryCard;

const Wrapper = styled.article`
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
    text-transform: capitalize;
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
