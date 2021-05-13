import React from 'react';
import { Router } from '@reach/router';

import { graphql } from 'gatsby';
import CategoryListings from '../components/CategoryListings';
import ArticlePage from '../components/ArticlePage';

//

const Category = (props) => {
  const { path, data, location } = props;

  return (
    <Router basepath={path}>
      {location.pathname.includes('-') ? (
        <ArticlePage path="/:slug" />
      ) : (
        <CategoryListings path="/" data={data} />
      )}
    </Router>
  );
};

export default Category;

export const data = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      name
      image {
        asset {
          fluid(maxWidth: 1280) {
            ...GatsbySanityImageFluid
          }
        }
      }
      leadArticle {
        title
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
        shortDescription
        subtitle
        category
      }
      activeStory {
        name
        openingText
        outroText
        disableOpening
        openingImage {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        slides {
          title
          subtitle
          copy
          _key
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
