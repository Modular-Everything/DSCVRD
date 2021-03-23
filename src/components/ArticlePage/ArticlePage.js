/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sanityClient from '@sanity/client';

import styled from 'styled-components';
import clientConfig from '../../../client-config';
import SEO from '../SEO';
import HeadlineArticle from '../HeadlineArticle';
import LongBanner from '../Adverts/LongBanner';
import CardTag from '../CardTag';
import Container from '../Container';
import Social from '../Social';
import Credits from '../Credits';
import PortableText from '../PortableText';
import Loading from '../Loading';

//

const ArticlePage = (props) => {
  const slug = props['*'];
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!slug || !props.uri) return false;
    const category = props.uri.replace('/', '');

    const client = sanityClient({
      projectId: clientConfig.sanity.projectId,
      dataset: clientConfig.sanity.dataset,
      token: process.env.SANITY_TOKEN,
      useCdn: false,
    });

    const groq = `
      *[slug.current == "${slug}" && category == "${category}"] {
        _id,
        category,
        content,
        'image': image.asset->url,
        involved,
        shortDescription,
        subtitle,
        tags,
        title,
      }
    `;

    client
      .fetch(groq)
      .then((response) => response)
      .then((resData) => {
        setContent(resData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!content && (
        <Container>
          <Loading />
        </Container>
      )}
      {content && (
        <>
          <SEO title={content[0].title} />

          <HeadlineArticle
            title={content[0].title}
            involved={content[0].involved}
            category={content[0].category}
            rawImg={content[0].image}
            shorten
          />

          <CenteredContainer>
            <LongBanner type={1} />

            {content[0].subtitle && (
              <Subtitle>
                <CardTag label={content[0].subtitle} />
              </Subtitle>
            )}

            {content[0]._rawContent && (
              <PortableText content={content[0]._rawContent} />
            )}
            {content[0].content && (
              <PortableText content={content[0].content} />
            )}

            <Credits
              involved={content[0].involved}
              published={content[0].date}
            />

            <Social />

            <LongBanner type={Math.ceil(Math.random() * 3)} />
          </CenteredContainer>
        </>
      )}
    </>
  );
};

export default ArticlePage;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.div`
  margin-bottom: 4rem;
`;

ArticlePage.propTypes = {
  '*': PropTypes.string,
  uri: PropTypes.string,
};

ArticlePage.defaultProps = {
  '*': null,
  uri: null,
};
