const layout = require('../../layout');

module.exports = ({ req }) => {
  return layout({
    content: /*html*/ `
      <div class="box">
        <div class="form-wrapper">
          <h3 class="form-header">New Item</h3>
          <form class="form">
            <input name="nameRU" placeholder="Name" class="form-input" type="text" />
            <select class="form-input">
              <option>Wardrobes</option>
              <option>Kitchens</option>
              <option>Tables</option>
            </select>
            <input name="img" type="file" class="form-input" type="password" />
            <input type="submit" class="form-submit" value="Submit" />
          </form>
        </div>
      </div>
    `,
    req,
  });
};
