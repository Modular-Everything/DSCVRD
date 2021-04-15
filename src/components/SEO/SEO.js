import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

import Card from '../../images/social-card.jpeg';

//

const SEO = ({
  article,
  description,
  lang,
  meta,
  ogImage,
  ogTag,
  title,
  pathname,
}) => {
  const { pathname: defaultPath } = useLocation();
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
  const canonical = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : defaultPath;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: 'keywords',
        //   content: site.siteMetadata.keywords.join(','),
        // },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article:${ogTag}` : `website`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          ogImage
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: ogImage.width,
                },
                {
                  property: 'og:image:height',
                  content: ogImage.height,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    />
  );
};

export default SEO;

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  ogImage: null,
  ogTag: null,
  article: false,
};

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  ogTag: PropTypes.string,
  pathname: PropTypes.string,
};
