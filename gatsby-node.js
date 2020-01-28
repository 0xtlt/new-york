const path = require("path");

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const createPrismicPages = new Promise((resolve, reject) => {
       resolve(graphql(`
{
  allPrismicPage {
    edges {
      node {
        data {
          handle {
            text
          }
        }
      }
    }
  }
}

       `).then(result => {
           if (result.errors) {
               reject(result.errors);
           }

           result.data.allPrismicPage.edges.forEach(page => {
               createPage({
                   path: page.node.data.handle.text,
                   component: path.resolve("./src/templates/page.js"),
                   context: {
                       handle: page.node.data.handle.text
                   }
               });
           });
       }));
    });

    return Promise.all([createPrismicPages]);
};