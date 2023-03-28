module.exports = (catalogItems, req) => {
  const { lang } = req.cookies;
  const renderedCatalogItems = catalogItems
    .map((item) => {
      return /*html*/ `
        <div>
          <div>${item[lang].name}</div>
          <img src="data:image/png;base64, ${item.image}" style="width: 200px;" />
          <div>${item[lang].desc}</div>
        </div>
      `;
    })
    .join('');

  return /*html*/ `
    <div>${renderedCatalogItems}</div>
  `;
};
