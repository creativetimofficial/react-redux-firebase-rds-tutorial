const getAllStatCardsAction = () => async dispatch => {
  // here we'll make a call to our database (firebase)
  // that will retrieve all of our stat cards
  dispatch({ type: "getAllStatCards", payload: {} });
};
export default getAllStatCardsAction;
