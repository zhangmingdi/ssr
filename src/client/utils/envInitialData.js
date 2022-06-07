export const envInitialData = (props) => { // 参数传入props
  let initialData;

  if (__isServer) { // StaticRouter的context传入到了props.staticContext
    initialData = props.staticContext.initialData;
  } else { // Route的render (props) => ...传入到props.xxx
    initialData = props.initialData;
  }

  return initialData || {};
};
