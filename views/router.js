module.exports = (path, routes) => {
  routes.map((route) => {
    const { component, pathname } = route;
    if (pathname === path) {
      return component;
    } else {
      return '';
    }
  });
};
