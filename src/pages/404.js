import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

import SEO from '../components/SEO';

//

const NotFound = () => (
  <>
    <SEO title="Page Not Found" />
    <Container>
      <NotFoundWrap>
        <h2 className="font__smaller-headline-text">Page Not Found</h2>
        <p className="font__article-card-copy">
          Sorry, this page couldn't be found! If this was in error, please
          contact us.
        </p>
      </NotFoundWrap>
    </Container>
  </>
);

export default NotFound;

const NotFoundWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 12rem);

  h2 {
    margin-bottom: 2.4rem;
  }
`;
