import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import queryString from 'query-string';
import _ from 'lodash';
import styled from 'styled-components';

import SEO from '../components/SEO';
import ArticleContent from '../components/ArticleContent';
import Container from '../components/Container';
import clientConfig from '../../client-config';
import Loading from '../components/Loading';

//

const FetchPage = () => {
  const [articles, setArticles] = useState(null);
  const isSSR = typeof window === 'undefined';

  let searchParams;
  // eslint-disable-next-line no-restricted-globals
  if (!isSSR) searchParams = queryString.parse(location.search);

  useEffect(() => {
    if (!isSSR) {
      const client = sanityClient({
        projectId: clientConfig.sanity.projectId,
        dataset: clientConfig.sanity.dataset,
        token: process.env.SANITY_TOKEN,
        useCdn: false,
      });

      const groq = `
      *[_type == "article" && date <= now() && title match "${searchParams.for}"] | order(date desc) {
        _id,
        title,
        date,
        category,
        shortDescription,
        articleType,
        'slug': {
          'current': slug.current,
        },
        'image': image.asset->url,
      }
    `;

      client
        .fetch(groq)
        .then((response) => response)
        .then((resData) => {
          setArticles(resData);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSSR) return null;

  return (
    <>
      <SEO title={`Searching for "${searchParams.for}"`} />

      <Container>{!articles && <Loading />}</Container>

      <SearchContainer>
        {articles && articles.length > 0 && (
          <>
            <Results>
              <h4 className="font__spacey-subtitle">Showing results for</h4>
              <h3 className="font__article-card-headline">
                "{searchParams.for}"
              </h3>
            </Results>

            <ArticleContent data={_.chunk(articles, 3)} />
          </>
        )}
        {articles && articles.length === 0 && (
          <Results>
            <h3 className="font__article-card-headline">
              No results found for "{searchParams.for}"
            </h3>
          </Results>
        )}
      </SearchContainer>
    </>
  );
};

export default FetchPage;

const SearchContainer = styled.div`
  position: relative;
  top: 16rem;
`;

const Results = styled.div`
  position: relative;
  text-align: center;

  h4 {
    margin-bottom: 0.4rem;
    color: var(--foil);
  }

  h3 {
    color: var(--black);
  }
`;
