import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Container from '../Container';
import ThreeThirds from '../Grids/ThreeThirds';
import ArticleCard from '../CardTypes/ArticleCard';
import BigBoiBanner from '../CardTypes/BigBoiBanner';
import Story from '../Story';
import Loading from '../Loading';

//

// So how does the Wonderland website work?
// They have a big banner at the top
// Then 3 cards below
// Then a big banner
// Followed by 3 more cards
// *
// The big banner at the top is repeated content of some random article
// It seems to change daily, but it picks an article from below
// *
// The next 3 cards are the latest 3 articles posted
// *
// The big banner follows the same kind of logic as the top banner

//

const ArticleContent = ({ data, story }) => {
  const [items, setItems] = useState(_.slice(data, 0, 4));
  const [isFetching, setIsFetching] = useState(false);

  // *
  // ** Function to detect the bottom of the page

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setIsFetching(true);
  }

  // *
  // ** Register scroll listener

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // *
  // ** Listen for a change to isFetching

  useEffect(() => {
    if (!data) return null;

    function fetchMoreItems() {
      setTimeout(() => {
        setItems(_.slice(data, 0, items.length + 4));
        setIsFetching(false);
      }, 2000);
    }

    if (!isFetching) return;
    fetchMoreItems();
  }, [isFetching, data, items.length]);

  if (!data) return null;

  return (
    <Container>
      {items.map((row, index) => (
        <>
          {index === 4 && (
            <BigBoiBanner
              title={row[0].title}
              image={row[0].image.asset.fluid}
              category={row[0].category}
              desc={row[0].shortDescription}
              slug={row[0].slug.current}
              advert={1}
            />
          )}

          {index % 1 === 0 && index % 2 !== 0 && index > 4 && index > 2 && (
            <BigBoiBanner
              title={row[0].title}
              image={row[0].image.asset.fluid}
              category={row[0].category}
              desc={row[0].shortDescription}
              slug={row[0].slug.current}
              advert={index}
            />
          )}

          {/* index === 2 && <div>newsletter</div> */}

          {/* index % 4 === 0 && index > 0 && index > 4 && <div>newsletter</div> */}

          {story && index === 1 && <Story data={story} />}

          <ThreeThirds>
            {row.map((card) => (
              <ArticleCard
                title={card.title}
                category={card.category}
                slug={card.slug.current}
                desc={card.shortDescription}
                image={card.image.asset.fluid}
                tags={card.tags}
              />
            ))}
          </ThreeThirds>
        </>
      ))}

      {isFetching && data.length !== items.length && <Loading />}
    </Container>
  );
};

export default ArticleContent;

ArticleContent.propTypes = {
  data: PropTypes.object,
  story: PropTypes.object,
};

ArticleContent.defaultProps = {
  data: null,
  story: null,
};
