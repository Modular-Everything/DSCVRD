import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import ThreeThirds from '../Grids/ThreeThirds';
import ArticleCard from '../CardTypes/ArticleCard';
import BigBoiBanner from '../CardTypes/BigBoiBanner';

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

const ArticleContent = ({ data }) => (
  <Container>
    {data.map((row, index) => (
      <>
        {index === 4 && (
          <BigBoiBanner title={row[1].title} image={row[1].image} advert={1} />
        )}
        {index % 1 === 0 && index % 2 !== 0 && index > 4 && index > 2 && (
          <BigBoiBanner
            title={row[1].title}
            image={row[1].image}
            advert={index}
          />
        )}

        {index === 2 && <div>newsletter</div>}
        {index % 4 === 0 && index > 0 && index > 4 && <div>newsletter</div>}

        {index === 1 && <div>Story time!</div>}

        <ThreeThirds>
          {row.map((card) => (
            <ArticleCard
              title={`${card.title} - ${index}`}
              image={card.image}
            />
          ))}
        </ThreeThirds>
      </>
    ))}
  </Container>
);

export default ArticleContent;

ArticleContent.propTypes = {
  data: PropTypes.object.isRequired,
};
