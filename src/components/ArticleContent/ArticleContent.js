import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Container from '../Container';
import ThreeThirds from '../Grids/ThreeThirds';
import ArticleCard from '../CardTypes/ArticleCard';
import BigBoiBanner from '../CardTypes/BigBoiBanner';
import Story from '../Story';
import Loading from '../Loading';
import Newsletter from '../Newsletter/Newsletter';

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

const ArticleContent = ({ data, story, leadArticle, noCategory }) => {
  const [items, setItems] = useState(_.slice(data, 0, 4));
  const [isFetching, setIsFetching] = useState(false);

  // *
  // ** Function to detect the bottom of the page

  function handleScroll() {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 10
    ) {
      setIsFetching(true);
    }
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

  console.log('story', story);
  return (
    <Container>
      {items.map((row, index) => (
        <>
          {leadArticle && index === 2 && (
            // Paid promo banner
            <BigBoiBanner
              title={leadArticle.title}
              image={leadArticle.image.asset.url}
              category={leadArticle.category}
              desc={leadArticle.shortDescription}
              slug={leadArticle.slug.current}
              advert={2}
            />
          )}
          {index % 1 === 0 && index % 2 !== 0 && index > 4 && index > 2 && (
            // Random article banner
            <BigBoiBanner
              title={row[0].title}
              image={row[0].image}
              category={row[0].category}
              desc={row[0].shortDescription}
              slug={row[0].slug.current}
              advert={index + 1}
              fetched
            />
          )}
          {index === 2 && <Newsletter />}
          {index % 4 === 0 && index > 0 && index > 4 && <Newsletter />}
          {story && index === 1 && <Story data={story._id} />}
          <ThreeThirds>
            {row.map((card) => (
              <ArticleCard
                title={card.title}
                category={card.category}
                slug={card.slug.current}
                desc={card.shortDescription}
                image={card.image}
                tags={card.articleType}
                noCategory={noCategory}
                date={card.date}
                imageScale={{ height: '700', width: '700' }}
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
  noCategory: PropTypes.bool,
  leadArticle: PropTypes.object,
};

ArticleContent.defaultProps = {
  data: null,
  story: null,
  noCategory: false,
  leadArticle: null,
};
