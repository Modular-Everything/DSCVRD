import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import Card from '../../images/social-card.jpeg';

//

const SEO = ({ title, description, article, ogImage, ogTag }) => {
  const query = graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          titleTemplate
        }
      }
    }
  `;

  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: ogImage || Card,
    articleTag: ogTag,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta name="og:image" content={seo.image} />
      <meta
        property="og:type"
        content={article ? `article:${ogTag}` : `website`}
      />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
  ogImage: PropTypes.string,
  ogTag: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
  ogImage: null,
  ogTag: null,
};
