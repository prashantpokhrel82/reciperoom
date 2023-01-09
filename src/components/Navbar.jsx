import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";
import { GrClose, GrMenu } from "react-icons/gr";

const Menu = ({toggleMenu=()=>{}}) => (
  <ul className="menu" onClick={()=>toggleMenu()}>
    <li className="menu-item">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="menu-item">
      <NavLink to="/categories ">Categories</NavLink>
    </li>
    <li className="menu-item">
      <NavLink to="# ">About</NavLink>
    </li>
    <li className="menu-item">
      <NavLink to="# ">Contact</NavLink>
    </li>
  </ul>
);

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="desktop-menu">
          <Menu />
        </div>
        <div className={isSearchOpen ? "search show-search-bar" : "search"}>
          <input type="text" placeholder="Search" className="search-input" />
          <GrClose className="close-icon" onClick={() => toggleSearch()} />
        </div>
        <div className="right">
          <BsSearch className="search-icon" onClick={() => toggleSearch()} />
          <GrMenu className="menu-icon" onClick={() => toggleMenu()} />
        </div>
        <div
          className={
            isMenuOpen ? "mobile-menu show-mobile-menu" : "mobile-menu"
          }
        >
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
          <GrClose className="close-menu" onClick={() => toggleMenu()} />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
width:100%;
  max-width: var(--max-width);
  margin: 0 auto;
  .nav {
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100px;
  }

  .logo {
    width: 200px;
    max-width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .menu-item {
    font-weight: 500;
    transition: var(--transition);
  }

  .menu .menu-item:hover {
    color: var(--color-primary);
  }

  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    display: none;
    justify-content: center;
    align-items: center;
    transition: all var(--transition);
    backdrop-filter: blur(10px);

    input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1rem 0.5rem;
      width: 70%;
      border: none;
      outline: 1px solid var(--color-black);
      border-radius: 3px;
      transition: 0.1s;
    }

    .close-icon {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translate(-5%, -50%);
      cursor: pointer;
      font-size: 1.5rem;
    }

    input:focus {
      outline: 1.5px solid var(--color-black);
    }
  }

  .search.show-search-bar {
    display: flex;
  }

  .search-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .menu-icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 2rem;
    display: none;
  }

  .desktop-menu {
    display: block;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    background: rgb(0 0 0 /0.2);
    backdrop-filter: blur(10px);
    z-index: 5;
    color: var(--color-white);
  }
  
  .mobile-menu .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    font-size: 2rem;
    font-weight: 400;
  }
  
  .close-menu {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    .nav {
      padding: 0 2rem;
    }
    .desktop-menu {
      display: none;
    }

    .menu-icon {
      display: flex;
    }

    .mobile-menu.show-mobile-menu {
      display: flex;
    }
  }
`;
