const layout = require('../../layout');

module.exports = ({ req }) => {
  return layout({
    content: /*html*/ `
      <div class="box">
        <div class="form-wrapper">
          <h3 class="form-header">New Item</h3>
          <form class="form" action="/new-item" method="POST" enctype="multipart/form-data">
            <div class="form-cols-wrapper">
              <div class="form-col">
                <div class="form-input_wrapper">  
                  <input name="nameRU" placeholder="Название" class="form-input" type="text" />
                </div>
                <div class="form-input_wrapper">
                  <textarea class="form-textarea" name="descRU"></textarea>
                </div>
              </div>
              <div class="form-col">
                <div class="form-input_wrapper">  
                  <input name="nameRO" placeholder="Nume" class="form-input" type="text" />
                </div>
                <div class="form-input_wrapper">
                  <textarea class="form-textarea" name="descRO"></textarea>
                </div>
              </div>
            </div>
            <div class="form-input_wrapper">
              <select name="category" class="form-input form-select">
                <option>Wardrobes</option>
                <option>Kitchens</option>
                <option>Tables</option>
                <option>Hallways</option>
                <option>Offices</option>
                <option>Livings</option>
              </select>
            </div>
            <div class="form-input_wrapper">
              <input name="image" type="file" class="form-input" />
            </div>
            <input type="submit" class="form-submit" value="Submit" />
          </form>
        </div>
      </div>
    `,
    req,
  });
};
