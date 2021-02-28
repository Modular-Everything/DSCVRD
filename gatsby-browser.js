import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout';

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
}

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
