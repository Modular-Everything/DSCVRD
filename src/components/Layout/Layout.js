import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';

//

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <main>{children}</main>
  </>
);

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
