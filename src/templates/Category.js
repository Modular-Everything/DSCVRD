import React from 'react';
import { Router } from '@reach/router';

import CategoryListings from '../components/CategoryListings';
import ArticlePage from '../components/ArticlePage';

//

const Category = ({ path }) => (
  <Router basepath={path}>
    <ArticlePage path="/:slug" />
    <CategoryListings path="/" />
  </Router>
);

export default Category;
