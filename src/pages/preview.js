import React from 'react';
import Helmet from 'react-helmet';
import PreviewTemplate from '../templates/PreviewTemplate';

//

const PreviewPage = ({ location }) => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <PreviewTemplate location={location} />
  </>
);

export default PreviewPage;
