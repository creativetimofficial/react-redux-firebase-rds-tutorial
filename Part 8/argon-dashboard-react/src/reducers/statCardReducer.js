export default (state = {}, action) => {
  switch (action.type) {
    case "addStatCard":
      console.log("adding ", action.payload);
      // since we will always fetch our stat cards
      // from firebase, each time we add one new
      // we will just return the state
      return state;
    case "getAllStatCards":
      console.log("getting ", action.payload);
      console.log(action.payload);
      return {
        // keep the old state
        ...state,
        // add all the cards from the database
        // they will come in a json format,
        // so we need to convert them to array
        statCardState: Object.values(action.payload)
      };
    default:
      return state;
  }
};
