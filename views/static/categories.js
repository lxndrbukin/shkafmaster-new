const categoriesLocal = require('../../public/localization/categories.json');
const { kitchen, wardrobes, hallways, office, tables, living } =
  categoriesLocal.categoryNames;
const { categoriesHeader } = categoriesLocal;

const categoriesList = (lang) => {
  return [
    {
      name: kitchen[lang],
      path: 'kitchens',
      img: '/imgs/menu_kitchen.png',
    },
    {
      name: wardrobes[lang],
      path: 'wardrobes',
      img: '/imgs/menu_wardrobe.png',
    },
    {
      name: hallways[lang],
      path: 'hallways',
      img: '/imgs/menu_hallway.png',
    },
    {
      name: office[lang],
      path: 'offices',
      img: '/imgs/menu_office.png',
    },
    {
      name: tables[lang],
      path: 'tables',
      img: '/imgs/menu_table.png',
    },
    {
      name: living[lang],
      path: 'livings',
      img: '/imgs/menu_living.png',
    },
  ];
};

const categories = (lang) => {
  return /*html*/ `
    <div class="categories-list">
      ${categoriesList(lang)
        .map(({ path, name, img }) => {
          return /*html*/ `
            <a href="/catalog/${path}" class="category ${path}">
              <img src="${img}" class="category-bg">
              <span class="category-header">${name}</span>
            </a>`;
        })
        .join(' ')}
    </div>
  `;
};

module.exports = ({ req }) => {
  const { lang } = req.cookies;
  return /*html*/ `
    <div class="categories-wrapper">
      <div class="categories">
        <h3 class="categories-header">
          ${categoriesHeader[lang]}
        </h3>
        ${categories(lang)}
      </div>
    </div>
  `;
};
