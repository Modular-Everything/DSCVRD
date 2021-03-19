import React from 'react';

const ArticlePage = (props) => {
  const slug = props['*'];

  return <div style={{ marginTop: '15vh' }}>{slug}</div>;
};

export default ArticlePage;
