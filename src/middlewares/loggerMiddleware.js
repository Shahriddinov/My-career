const logger = (store) => (next) => (action) => {
  if (action.type === "@@router/LOCATION_CHANGE") {
    console.group(`${action.type} ${action.payload.pathname}`);
  } else {

  }
  console.info("dispatching", action);
  const result = next(action);

  return result;
};
export default logger;
