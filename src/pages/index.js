import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';

import HeadlineArticle from '../components/HeadlineArticle';
import ArticleContent from '../components/ArticleContent';

//

const HomePage = ({ data }) => {
  const idx = data.sanityIndexPage;
  const articles = data.allSanityArticle;

  // * Grab all the headline data
  const { headline } = idx;

  // * Get all of the articles
  const { nodes } = articles;

  // *
  // 1. Loop through the array
  // 2. Filter out any big banners
  // 3. Group the remaining items into an object of 2 or 3 posts

  const items = [
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Yak',
      highlight: false,
      date: '2021-01-30',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Bluefish',
      highlight: false,
      date: '2021-01-29',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Cricket',
      highlight: false,
      date: '2021-01-28',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Boa',
      highlight: true,
      date: '2021-01-31',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Kangaroo',
      highlight: false,
      date: '2021-01-22',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Pig',
      highlight: false,
      date: '2021-01-22',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Pot Bellied Pig',
      highlight: true,
      date: '2021-01-15',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Emu',
      highlight: false,
      date: '2021-01-14',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Worm',
      highlight: false,
      date: '2021-01-13',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Ladybug',
      highlight: false,
      date: '2021-01-30',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Tyrant Flycatcher',
      highlight: false,
      date: '2021-01-01',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Llamas',
      highlight: true,
      date: '2021-01-05',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Giant Tortoise',
      highlight: false,
      date: '2021-01-10',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Okapi',
      highlight: false,
      date: '2021-01-12',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Yak',
      highlight: false,
      date: '2021-01-30',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Bluefish',
      highlight: false,
      date: '2021-01-29',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Cricket',
      highlight: false,
      date: '2021-01-28',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Boa',
      highlight: true,
      date: '2021-01-31',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Kangaroo',
      highlight: false,
      date: '2021-01-22',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Pig',
      highlight: false,
      date: '2021-01-22',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Pot Bellied Pig',
      highlight: true,
      date: '2021-01-15',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Emu',
      highlight: false,
      date: '2021-01-14',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Worm',
      highlight: false,
      date: '2021-01-13',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Ladybug',
      highlight: false,
      date: '2021-01-30',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Tyrant Flycatcher',
      highlight: false,
      date: '2021-01-01',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Llamas',
      highlight: true,
      date: '2021-01-05',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Giant Tortoise',
      highlight: false,
      date: '2021-01-10',
    },
    {
      image:
        'https://cdn.sanity.io/images/lylk5ufs/production/128d1098e63e22784aef6015611775e29404931c-1440x900.png',
      type: 'post',
      title: 'Okapi',
      highlight: false,
      date: '2021-01-12',
    },
  ];

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
