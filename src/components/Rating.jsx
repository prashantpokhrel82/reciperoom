import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <Wrapper>
      <div className="rating">
        {Array.from({ length: 5 }, (_, i) => i).map((i) => (
          <FaStar key={i} className={i < rating ? "active" : "inactive"} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Rating;

const Wrapper = styled.div`
  .rating {
    display: flex;
    gap: 3px;
  }

  .active {
    color: #ffd700;
  }

  .inactive {
    color: var(--color-dark-gray);
  }
`;
