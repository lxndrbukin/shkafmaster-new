const layout = require('../layout');
const banner = require('../static/banner');
const categories = require('../static/categories');
const callback = require('../static/callback');

module.exports = ({ req }) => {
  return layout({
    content: /*html*/ `
        ${banner({ req })}
        ${categories({ req })}
        ${callback({ req })}
    `,
    req,
  });
};
