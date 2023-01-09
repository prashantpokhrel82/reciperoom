import React from "react";
import styled from "styled-components";
import {Header, Display, PopularCategories, CTA, CollectionContainer, LatestRecipes, Footer} from "../components";

const Landing = () => {
  return (<Wrapper>
    <Header/>
    <Display/>
    <PopularCategories/>
    <CTA/>
    <CollectionContainer/>
    <LatestRecipes/>
    <Footer/>
  </Wrapper>);
};

export default Landing;

const Wrapper  = styled.div`
  width:100%;
  max-width: var(--max-width);
  margin: 0 auto;
`