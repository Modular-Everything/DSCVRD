import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';

import Noise from '../Noise';
import CardTag from '../CardTag';

//

const MagazineCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityMagazine(limit: 1, sort: { order: DESC, fields: date }) {
        nodes {
          title
          issue
          url
          date
          blurb
          image {
            asset {
              fluid(maxWidth: 650) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const { nodes } = data.allSanityMagazine;

  return (
    <Card>
      <a href="https://shopify.com/" target="_blank" rel="noreferrer noopener">
        <div className="card__thumb">
          <Noise />
          <Img fluid={nodes[0].image.asset.fluid} alt={nodes[0].title} />
        </div>

        <div className="card__content">
          <h5 className="font__article-card-headline">Buy the Magazine</h5>
          <p className="font__article-card-copy">
            {_.truncate(nodes[0].blurb, {
              length: 100,
              separator: /,? +/,
            })}
          </p>
        </div>

        <div className="card__tags">
          <CardTag label="Magazine" />
          <CardTag label={`Issue ${nodes[0].issue}`} color="yellow" />
        </div>
      </a>
    </Card>
  );
};

export default MagazineCard;

const Card = styled.div`
  a {
    color: var(--black);
    text-decoration: none;
  }

  .card__thumb {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48rem;
    background-color: var(--black);

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 29rem;
      transform: rotate(1deg);
    }
  }

  .card__content {
    .font__article-card-copy {
      margin-right: 1.6rem;
      color: var(--coal);
    }

    .font__article-card-headline {
      margin: 1.6rem 0;
    }
  }

  .card__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.6rem;

    article {
      margin: 0 0.8rem 0.8rem 0;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;