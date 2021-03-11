import path from 'path';

async function turnArticlesIntoPages({ graphql, actions }) {
  const articleTemplate = path.resolve('./src/templates/Article.js');

  const { data } = await graphql(`
    query {
      articles: allSanityArticle(filter: { _id: { glob: "!drafts*" } }) {
        nodes {
          title
          category
          slug {
            current
          }
        }
      }
    }
  `);

  data.articles.nodes.forEach((article) => {
    console.info(`Creating page for: "${article.title}"...`);
    actions.createPage({
      path: `${article.category}/${article.slug.current}`,
      component: articleTemplate,
      context: {
        slug: article.slug.current,
      },
    });
  });
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  const categoryTemplate = path.resolve('./src/templates/Category.js');

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  console.info(`Creating ${data.categories.nodes.length} pages...`);

  data.categories.nodes.forEach((category) => {
    if (category.slug !== null) {
      actions.createPage({
        path: `${category.slug.current}`,
        component: categoryTemplate,
        context: {
          slug: category.slug.current,
        },
      });
    }
  });
}

export async function createPages(params) {
  await turnArticlesIntoPages(params);
  await turnCategoriesIntoPages(params);
}
