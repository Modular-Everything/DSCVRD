import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Card from '../../images/social-card.jpeg';

//

const SEO = ({ article, description, meta, ogImage, title, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            titleTemplate
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const image = ogImage || Card;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={canonical} />
      {article ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

SEO.defaultProps = {
  meta: [],
  description: ``,
  ogImage: null,
  article: false,
};

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  pathname: PropTypes.string,
};
