import React, { useState, useEffect } from 'react';
import * as queryString from 'query-string';

import sanityClient from '@sanity/client';
import clientConfig from '../../client-config';
import Article from './Article';

//

async function fetchDataFromSanity(articleId, isDraft) {
  const client = sanityClient({
    projectId: clientConfig.sanity.projectId,
    dataset: clientConfig.sanity.dataset,
    token: process.env.SANITY_TOKEN,
    useCdn: true,
    withCredentials: isDraft,
  });

  console.log(articleId);

  // const query = `*[_id == '${isDraft ? `drafts.${articleId}` : articleId}']`;
  return client.getDocument(articleId).then((res) => res);
}

//

const PreviewTemplate = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = queryString.parse(location.search);
    const { articleId, isDraft } = query;

    async function fetchData() {
      const sanityData = await fetchDataFromSanity(articleId, isDraft);

      if (sanityData) {
        setLoading(false);
        setData(sanityData);
      } else {
        setLoading(false);
      }
    }

    fetchData();

    // if (isDraft) {
    //   subscribeToData(articleId, fetchData());
    // }
  }, [location.search]);

  if (loading) return <div>Loading...</div>;
  if (!data) {
    return <div>No data found..!</div>;
  }

  console.log('data', data);

  return <Article data={{ article: data }} />;
};

export default PreviewTemplate;
