import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setTagNames } from "../redux/features/recipeSlice";
import {
  Header,
  Display,
  PopularCategories,
  CTA,
  CollectionContainer,
  LatestRecipes,
  Footer,
  Loading,
  Error,
} from "../components";
import { useGetAllTagsQuery } from "../redux/services/tastyApi";

const Landing = () => {
  const { data, isFetching, isError } = useGetAllTagsQuery();
  const { tagNames } = useSelector((store) => store.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTagNames(data));
  }, [data]);

  if (isFetching) return <Loading />;
  if (isError) return <Error />;

  console.log(tagNames);

  return (
    <Wrapper>
      <div className="spaced">
        <Header tagName={tagNames[0]} />
        <Display tagName={tagNames[1]} />
        <Display tagName={tagNames[2]} />
        <PopularCategories />
      </div>

      <CTA />
      <div className="spaced">
        <CollectionContainer />
        <LatestRecipes />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  .spaced {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
  }
`;
