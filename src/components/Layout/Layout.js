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

      <form data-netlify="true" name="ContactForm">
        <input type="hidden" name="form-name" value="ContactForm" />
        <input type="hidden" name="name" />
        <input type="hidden" name="email" />
        <input type="hidden" name="enquiry" />
        <input type="hidden" name="message" />
      </form>

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
