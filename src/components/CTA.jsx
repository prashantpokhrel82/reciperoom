import React from "react";
import styled from "styled-components";

const CTA = () => {
  return (
    <Wrapper>
      <div className="cta">
        <div className="cta-content">
          <h1>Deliciousness to your inbox</h1>
          <p>Enjoy weekly hand picked recipes and recommendations</p>
          <div className="input">
            <input type="email" placeholder="Email Address" />
            <button>Join</button>
          </div>
          <p className="terms">
            By joining to our newsletter you agree to our{" "}
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CTA;

const Wrapper = styled.div`
  .cta {
    width: 100%;
    background: var(--color-secondary);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cta-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    max-width: 600px;
    width: 600px;
    text-align: center;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 4rem;
  }

  p {
    margin: 1rem;
    font-weight: 500;
  }

  .input {
    width: 100%;
    position: relative;
    button {
      position: absolute;
      right: 0;
      top: 0;
      width: max-content;
      height: 100%;
      background: var(--color-primary);
      text-transform: uppercase;
      color: var(--color-white);
      border: none;
      outline: none;
      padding: 0 2rem;
      cursor: pointer;
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem 0.2rem;
  }

  .terms {
    font-size: 11px;
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    .cta-content {
      width: 100%;
    }
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
  @media screen and (max-width: 1500px) {
    .cta-content {
      max-width: 400px;
      /* width: 400px; */
    }
  }
`;
