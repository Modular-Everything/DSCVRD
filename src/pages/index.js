import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import HeadlineArticle from '../components/HeadlineArticle';

//

const HomePage = ({ data }) => {
  const idx = data.sanityIndexPage;

  // * Grab all the headline data
  const { headline } = idx;

  return (
    <>
      <HeadlineArticle
        title={headline.title}
        involved={headline.involved}
        category={headline.category}
        author={headline.author.name}
        slug={headline.slug.current}
        image={headline.image.asset.fluid}
      />
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

//

export const query = graphql`
  query {
    sanityIndexPage(_id: { eq: "indexPage" }) {
      headline {
        title
        involved
        category
        author {
          name
        }
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
