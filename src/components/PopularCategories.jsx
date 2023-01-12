import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import { popularCategories } from "../assets/data/popularCategories";

const PopularCategories = () => {
  return (
    <Wrapper>
      <div className="section__padding">
        <h2>Popular Categories</h2>
        <div className="categories">
          {popularCategories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
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
`;
