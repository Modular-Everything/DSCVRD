import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

//

const SEO = ({ description, ogImage, title, pathname }) => {
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
  const image = ogImage || null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet defer={false}>
      {/* General tags */}
      <title>{title} | DSCVRD</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
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
  description: ``,
  ogImage: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  pathname: PropTypes.string,
};
