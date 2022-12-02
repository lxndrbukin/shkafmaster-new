const header = require('./static/header');
const footer = require('./static/footer');
const banner = require('./static/banner');
const callback = require('./static/callback');
const categories = require('./static/categories');

module.exports = ({ content, lang, path }) => {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/styles/styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>SHKAFMASTER</title>
      </head>
      <body>
        <div class="container">
          ${header(lang)}
          <div class="content">
            ${banner({ lang, path })}
            ${categories({ lang, path })}
            ${content}
          </div>

          ${footer(lang)}
        </div>
        <script src="/scripts/changeLanguage.js"></script>
      </body>
    </html>
  `;
};
