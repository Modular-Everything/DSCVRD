import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import Container from '../Container';
import ArticleCard from './ArticleCard';

//

const ArticleContent = ({ data }) => (
  <Container>
    {data.map((row, index) => (
      <>
        {index % 1 === 0 && index % 2 !== 0 && index > 0 && (
          <div>{row[0].title}</div>
        )}

        {index % 4 === 0 && index > 0 && <div>newsletter</div>}

        <ThreeThirds>
          {row.map((card) => (
            <ArticleCard title={card.title} image={card.image} />
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

const ThreeThirds = styled.section`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 4.8rem 0;
`;
