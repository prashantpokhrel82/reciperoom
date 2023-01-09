import React from 'react'
import styled from "styled-components";
import {FiTrendingUp} from 'react-icons/fi'

const Slide = ({image, title, description, percentage}) => {
  return (
    <Wrapper >
        <div className="slide">
        <div className="left-pane">
              <img src={image} alt="trending" />
            </div>
            <div className="right-pane">
              <p className="trend"><FiTrendingUp/>{percentage}% would make this again</p>
              <h2>{title}</h2>
              <p className="desc">{description}</p>
            </div>
        </div>
            
          </Wrapper>
  )
}

export default Slide;

const Wrapper = styled.div`

    .slide{
    width: 100%;
    height:400px;
    display: flex;
    flex-direction: row;
    align-items:center;
    background: var(--color-light-blue);
    border-radius: 10px 0 0 10px;
    }

  .left-pane{
    flex : 1.5;
    width: 100%;
    height:100%;  

    img{
      width: 100%;
      height:100%;
      object-fit:cover;
    border-radius: 10px 0 0 10px;

    }
  }

  .right-pane{
    flex: 1;
    width: 100%;

    padding: 3rem;

    h2{
      margin: 2rem 0;
    }
  }

  .trend{
    font-weight: 500;
    display: flex;
    align-items:center;
  }

  .trend svg{
    font-size: 1.2rem;
    margin-right: 1rem;
  }


  @media screen and (max-width: 900px){
      
      .slide{
          flex-direction: column;
          height:800px;
          border-radius: 10px 10px 0 0;

    }
    .left-pane, .right-pane{
      flex: 1;
    }

    .left-pane{
        height: 50%;
    }

    .left-pane img{
    border-radius: 10px 10px 0 0;
    }

    .right-pane>p{
        margin-top: 2rem;
    }
  }


  @media screen and (max-width: 600px){
    .right-pane{
        padding: 1rem;
    }
  }

`