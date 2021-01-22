import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import contrast from 'contrast';

//

const query = graphql`
  query {
    sanityMiscSettings(_id: { eq: "miscSettings" }) {
      contactDesc
      contactEmail
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
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const Menu = ({ status, theme }) => {
  const [menuBg, setMenuBg] = useState(null);

  const { allSanityCategory, sanityMiscSettings } = useStaticQuery(query);

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
                    <Link to={`/${item.slug.current}`}>
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
                <h2>Contact</h2>
                {sanityMiscSettings.contactDesc && (
                  <p>{sanityMiscSettings.contactDesc}</p>
                )}
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
  z-index: 45;
  background-color: var(--yellow);

  .menu__content {
    display: grid;
    width: 100vw;
    height: 100vh;
    place-items: center;
  }

  ul {
    display: grid;
    z-index: 60;
    grid-column-gap: 10rem;
    grid-row-gap: 2.4rem;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li:hover {
    opacity: 0.8;

    @supports (-webkit-text-stroke: 1px var(--${(props) => props.theme})) {
      opacity: 1;

      h2 {
        color: var(--${(props) => props.theme});
      }
    }
  }

  h2 {
    color: var(--${(props) => props.theme});
    font-size: 10.4rem;
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
  }
`;

Menu.propTypes = {
  status: PropTypes.bool.isRequired,
};
