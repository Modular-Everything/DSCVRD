import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Header from '../Header';

//

const Layout = ({ children }) => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;

  const { site } = useStaticQuery(query);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <main>
        <Header siteName={site.siteMetadata.title} />
        {children}
      </main>
    </>
  );
};

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
