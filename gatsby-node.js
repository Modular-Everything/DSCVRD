import path from 'path';

async function turnArticlesIntoPages({ graphql, actions }) {
  const articleTemplate = path.resolve('./src/templates/Article.js');

  const { data } = await graphql(`
    query {
      articles: allSanityArticle {
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

export async function createPages(params) {
  await turnArticlesIntoPages(params);
}
