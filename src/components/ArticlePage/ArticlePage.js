/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sanityClient from '@sanity/client';
import { navigate } from 'gatsby';

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
  const [seo, setSeo] = useState(null);

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
        if (resData.length === 0) {
          navigate('/404/');
        } else {
          setContent(resData);
          setSeo({
            title: resData[0].title,
            description: resData[0].subtitle,
            image: `${resData[0].image}?w=1080&h=1080&auto=format`,
          });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bannerAd = Math.ceil(Math.random() * 3);

  return (
    <>
      {!content && (
        <Container>
          <Loading />
        </Container>
      )}

      {content && seo && seo.image && content.length > 0 && (
        <>
          <SEO
            title={seo.title}
            description={seo.description}
            ogImage={seo.image}
            article
          />

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

            <LongBanner type={bannerAd === 1 ? 2 : 3} />
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
