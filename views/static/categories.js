const categoriesLocal = require('../../public/localization/categories.json');
const { kitchen, wardrobes, hallways, office, tables } =
  categoriesLocal.categoryNames;
const { categoriesHeader } = categoriesLocal;

const categoriesList = (lang) => {
  return [
    {
      name: kitchen[lang],
      img: '/imgs/menu_kitchen.png',
    },
    {
      name: wardrobes[lang],
      img: '/imgs/menu_wardrobe.png',
    },
    {
      name: hallways[lang],
      img: '/imgs/menu_hallway.png',
    },
    {
      name: office[lang],
      img: '/imgs/menu_office.png',
    },
    {
      name: tables[lang],
      img: '/imgs/menu_table.png',
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
              <div 
                style="background-image:url(${category.img})" 
                class="category-bg"
              >
              </div>
              <span class="category-header">${category.name}</span>
            </a>`;
        })
        .join(' ')}
    </div>
  `;
};

module.exports = ({ lang, path }) => {
  if (path === '/') {
    return /*html*/ `
      <div class="categories">
        <h3 class="categories-header">
          ${categoriesHeader[lang]}
        </h3>
        ${categories(lang)}
      </div>
    `;
  } else {
    return '';
  }
};
