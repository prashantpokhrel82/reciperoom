import React from "react";
import styled from "styled-components";
import pageNotFound from "../assets/images/404.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Wrapper className="section__padding flex__center">
      <h1>!! Page Not Found !!</h1>
      <div className="image">
        <img src={pageNotFound} alt="Page Not Found" />
      </div>
      <Link to="/" className="btn">
        Back to Recipe Home
      </Link>
    </Wrapper>
  );
};

export default PageNotFound;

const Wrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  h1 {
    text-align: center;
  }
  .image {
    margin: 2rem 0;
    width: 90%;
    max-width: 500px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
