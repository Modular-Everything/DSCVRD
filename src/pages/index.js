import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';

import HeadlineArticle from '../components/HeadlineArticle';
import ArticleContent from '../components/ArticleContent';
import Container from '../components/Container';
import LongBanner from '../components/Adverts/LongBanner';
import ArticleCard from '../components/CardTypes/ArticleCard';
import TwoHalves from '../components/Grids/TwoHalves';
import MagazineCard from '../components/MagazineCard';

import items from '../data/sampleArticles';

//

const HomePage = ({ data }) => {
  const idx = data.sanityIndexPage;
  const articles = data.allSanityArticle;

  // * Grab all the headline data
  const { headline } = idx;

  // * Get all of the articles
  const { nodes } = articles;
  const chunked = _.chunk(items, 3);

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

      <Container>
        <TwoHalves>
          <ArticleCard
            title="Mindforce - Excalibur"
            copy="£20.00 + P&amp;P — limited edition vinyl colourway available now exclusively in the Discovered shop."
            image="https://cdn.sanity.io/images/lylk5ufs/production/56a82e8c3b2a2822cc478b56cc88314faf70f5c3-2896x1799.jpg?w=1000&h=1000&fit=max"
          />
          <MagazineCard />
        </TwoHalves>

        <LongBanner type={1} />
      </Container>

      <ArticleContent data={chunked} />
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
    allSanityArticle(sort: { fields: date, order: DESC }) {
      nodes {
        title
        date
        category
        shortDescription
        tags {
          value
        }
        slug {
          current
        }
      }
    }

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
