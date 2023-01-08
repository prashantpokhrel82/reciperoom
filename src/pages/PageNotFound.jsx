import React from "react";
import styled from "styled-components";
import pageNotFound from "../assets/images/404.svg";

const PageNotFound = () => {
  return (
    <Wrapper className="section__padding flex__center">
      <h1>!! Page Not Found !!</h1>
      <div className="image">
        <img src={pageNotFound} alt="Page Not Found" />
      </div>
    </Wrapper>
  );
};

export default PageNotFound;

const Wrapper = styled.div`
  flex-direction: column;
  height: 100vh;

  .image {
    margin-top: 2rem;
    width: 90%;
    height: 80%;
    max-width: 500px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
