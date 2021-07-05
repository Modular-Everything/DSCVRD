import path from 'path';

// async function clientOnlyRoutes({ page, actions }) {
//   console.log(page);

//   const { createPage } = actions;
//   if (page.path.match(/^\/(drop|format|kulture|noise|shred)/)) {
//     page.matchPath = `${page.path}/*`;
//     createPage(page);
//   }
// }

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
  // await turnArticlesIntoPages(params);
  await turnCategoriesIntoPages(params);
}

// export async function onCreatePage(params) {
//   await clientOnlyRoutes(params);
// }
