import React from "react";
import styled from "styled-components";
import Collection from "./Collection";

const CollectionContainer = () => {
  return (
    <Wrapper>
      <div className="section__padding">
        <h2>Hand-Picked Collections</h2>
        <div className="collections">
          <Collection />
          <Collection />
          <Collection />
          <Collection />
        </div>
      </div>
    </Wrapper>
  );
};

export default CollectionContainer;
const Wrapper = styled.div`
  .collections {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
  }
`;
