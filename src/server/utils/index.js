export const getStaticRoute = async (asyncRoute) => {
  const staitcRoute = [];
  const len = asyncRoute.length;

  for (let i = 0; i < len; i++) {
    const item = asyncRoute[i];
    staitcRoute.push({
      ...item,
    });
    if (item.component._load) {
      const component = (await item.component._load()).default;
      staitcRoute[staitcRoute.length - 1].component = component;
    }
  }

  return staitcRoute;
};

export const getAimComp = (routeList, pathname) => {
  const len = routeList.length;
  for (let i = 0; i < len; i++) {
    if (routeList[i].path === pathname) {
      return routeList[i];
    }
  }
};
