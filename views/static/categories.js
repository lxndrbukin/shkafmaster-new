const categoriesLocal = require('../../public/localization/categories.json');
const { kitchen, wardrobes, hallways, office, tables } =
  categoriesLocal.categoryNames;
const { categoriesHeader } = categoriesLocal;

const categoriesList = (lang) => {
  return [
    {
      name: kitchen[lang],
      img: '',
    },
    {
      name: wardrobes[lang],
      img: '',
    },
    {
      name: hallways[lang],
      img: '',
    },
    {
      name: office[lang],
      img: '',
    },
    {
      name: tables[lang],
      img: '',
    },
  ];
};

const categories = (lang) => {
  return /*html*/ `
    <div class="categories-list">
      ${categoriesList(lang)
        .map((category) => {
          return /*html*/ `
            <a href='/' class="category">
              ${category.name}
            </a>`;
        })
        .join(' ')}
    </div>
  `;
};

module.exports = (lang) => {
  return /*html*/ `
    <div class="categories">
      <h3 class="categories-header">
        ${categoriesHeader[lang]}
      </h3>
      ${categories(lang)}
    </div>
  `;
};
