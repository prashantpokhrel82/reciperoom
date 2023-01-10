import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { tastebiteLinks, legalLinks, followLinks } from "../assets/data/links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="footer-content section__padding">
          <div className="top">
            <div className="footer-description">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p>
                "On the other hand, we denounce with righteous indigestion and
                dislike men who are so beautified and demoralized by the charms
                of pleasure of the moment."
              </p>
            </div>
            <div className="footer-links">
              <div className="links-content">
                <p className="links-title">Tastebyte</p>
                <div className="links">
                  {tastebiteLinks.map((link) => (
                    <Link key={link.id} to={link.to}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="links-content">
                <p className="links-title">Legal</p>
                <div className="links">
                  {legalLinks.map((link) => (
                    <Link key={link.id} to={link.to}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="links-content">
                <p className="links-title">Follow</p>
                <div className="links">
                  {followLinks.map((link) => (
                    <Link key={link.id} to={link.to}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="bottom">
            <div className="copyright">
              <p>&copy; 2020 Tastebite - All rights reserved</p>
            </div>
            <div className="social-links">
              {followLinks.map((link) => (
                <Link key={link.id} to={link.to}>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  .footer {
    width: 100%;
    background: var(--color-white);
  }

  .footer-content {
    display: flex;
    flex-direction: column;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    row-gap: 3rem;
  }

  .line {
    height: 1px;
    width: 100%;
    background: var(--color-medium-gray);
    margin: 4rem 0 2rem;
  }

  .footer-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    color: var(--color-dark-gray);
    p {
      line-height: 24px;
    }
  }

  .logo {
    width: 150px;
    margin-bottom: 1rem;
    img {
      width: 100%;
    }
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .links-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    gap: 1rem;
    margin-left: 3rem;
  }

  .links-title {
    font-weight: 600;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--color-dark-gray);
    text-transform: capitalize;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-dark-gray);
  }

  .copyright {
    font-size: 12px;
  }

  .social-links {
    display: flex;
    gap: 2.5rem;
    font-size: 1.5rem;
  }

  .links > a,
  .social-links > a {
    transition: var(--transition);
  }

  .links > a:hover,
  .social-links > a:hover {
    color: var(--color-black);
  }

  @media screen and (max-width: 950px) {
    .top {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 600px) {
    .bottom {
      flex-direction: column-reverse;
      row-gap: 3rem;
    }

    .footer-description {
      p {
        text-align: center;
      }
    }
  }
`;
