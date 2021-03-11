import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import contrast from 'contrast';
import Contact from '../Contact';

//

const query = graphql`
  query {
    sanityStoreSettings(_id: { eq: "storeSettings" }) {
      storeLink
    }

    sanityMiscSettings(_id: { eq: "miscSettings" }) {
      contactDesc
      enquiryTypes
    }

    allSanityCategory {
      nodes {
        name
        _id
        slug {
          current
        }
        description
        image {
          asset {
            metadata {
              palette {
                dominant {
                  background
                }
              }
            }
            fluid(maxWidth: 1280) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const Menu = ({ status, contact, theme, setMenuOpen }) => {
  const [menuBg, setMenuBg] = useState(null);

  const {
    allSanityCategory,
    sanityMiscSettings,
    sanityStoreSettings,
  } = useStaticQuery(query);

  function handleItemHover(image, contrastColor) {
    setMenuBg(image);
    theme.setAssetColor(contrastColor);
  }

  if (allSanityCategory && status) {
    return (
      <>
        <Helmet>
          <style type="text/css">
            {`
              body {
                overflow: hidden;
              }
            `}
          </style>
        </Helmet>

        <MenuWrapper theme={theme.assetColor === 'light' ? 'black' : 'white'}>
          {contact.contactOpen && (
            <Contact types={sanityMiscSettings.enquiryTypes} />
          )}

          <div className="menu__content">
            <ul>
              {allSanityCategory.nodes.map((item) => {
                const BgColorContrast = contrast(
                  item.image.asset.metadata.palette.dominant.background
                );

                return (
                  <li
                    onMouseOver={() =>
                      handleItemHover(item.image, BgColorContrast)
                    }
                    onFocus={() => handleItemHover(item.image, BgColorContrast)}
                    onMouseOut={() => handleItemHover(null, 'light')}
                    onBlur={() => handleItemHover(null, 'light')}
                  >
                    <Link
                      to={`/${item.slug.current}`}
                      onClick={() => setMenuOpen(false)}
                      onKeyDown={() => setMenuOpen(false)}
                    >
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </Link>
                  </li>
                );
              })}

              <li
                onMouseOver={() => handleItemHover(null, 'light')}
                onFocus={() => handleItemHover(null, 'light')}
                onMouseOut={() => handleItemHover(null, 'light')}
                onBlur={() => handleItemHover(null, 'light')}
              >
                <a href={sanityStoreSettings.storeLink}>
                  <h2>Store</h2>
                  <p>Records, merch and DSCVRD exclusives!</p>
                </a>
              </li>

              <li
                onMouseOver={() => handleItemHover(null, 'light')}
                onFocus={() => handleItemHover(null, 'light')}
                onMouseOut={() => handleItemHover(null, 'light')}
                onBlur={() => handleItemHover(null, 'light')}
              >
                <button
                  type="button"
                  onClick={() => contact.setContactOpen(true)}
                >
                  <h2>Contact</h2>
                  {sanityMiscSettings.contactDesc && (
                    <p>{sanityMiscSettings.contactDesc}</p>
                  )}
                </button>
              </li>
            </ul>
          </div>

          {menuBg && (
            <div className="menu__bg">
              <Img fluid={menuBg.asset.fluid} />
            </div>
          )}
        </MenuWrapper>
      </>
    );
  }

  return null;
};

export default Menu;

const MenuWrapper = styled.nav`
  position: fixed;
  z-index: 475;
  background-color: var(--yellow);

  .menu__content {
    display: grid;
    width: calc(100vw - 6.4rem);
    height: calc(100vh - 12.8rem);
    padding: 6.4rem 3.2rem;
    overflow-x: hidden;
    overflow-y: scroll;

    @media (min-width: 768px) {
      width: calc(100vw - 19.2rem);
      height: calc(100vh - 19.2rem);
      padding: 9.6rem;
      overflow: auto;
    }

    @media (min-width: 1092px) {
      place-items: center;
    }
  }

  ul {
    display: grid;
    z-index: 60;
    grid-column-gap: 10rem;
    grid-row-gap: 2.4rem;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    width: 100%;
    margin: 0;
    padding: 0;
    padding-bottom: 9.6rem;
    list-style: none;

    @media (min-width: 1092px) {
      padding-bottom: unset;
    }
  }

  li {
    button {
      padding: 0;
      border: 0;
      outline: none;
      background: transparent;
      text-align: left;
      cursor: pointer;
    }

    &:hover {
      opacity: 0.8;

      @supports (-webkit-text-stroke: 1px var(--${(props) => props.theme})) {
        opacity: 1;

        h2 {
          color: var(--${(props) => props.theme});
        }
      }
    }
  }

  h2 {
    color: var(--${(props) => props.theme});
    font-size: clamp(6rem, 8vw, 10.4rem);
    font-weight: bold;
    line-height: 11.4rem;
    text-transform: uppercase;

    @supports (-webkit-text-stroke: 1px var(--${(props) => props.theme})) {
      color: transparent;
      -webkit-text-stroke: 1px var(--${(props) => props.theme});
    }
  }

  a {
    text-decoration: none;
  }

  p {
    color: var(--${(props) => props.theme});
    font-family: var(--font-serif-copy);
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .menu__bg {
    position: fixed;
    z-index: 50;
    top: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
`;

Menu.propTypes = {
  status: PropTypes.bool.isRequired,
};
