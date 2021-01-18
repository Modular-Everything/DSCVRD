import React from 'react';
import { graphql } from 'gatsby';
import HeadlineArticle from '../components/HeadlineArticle';

//

const Category = ({ data }) => {
  const { category } = data;
  return (
    <HeadlineArticle
      category={category.name}
      image={category.image.asset.fluid}
      shorten
    />
  );
};

export default Category;

//

export const query = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      name
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;