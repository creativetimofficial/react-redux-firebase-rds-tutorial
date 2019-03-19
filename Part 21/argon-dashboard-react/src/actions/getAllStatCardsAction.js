import firebase from "firebaseConfig";
const databaseRef = firebase.database().ref();
// this is to get the stat-cards table from firebase
const statCardsRef = databaseRef.child("stat-cards");

const getAllStatCardsAction = () => async dispatch => {
  // this function will get all the entires of the
  // stat-cards table, in a json format
  statCardsRef.on("value", snapshot => {
    dispatch({
      type: "getAllStatCards",
      // if the json returns null, i.e. the
      // stat-cards table is blank - empty
      // then we'll return an empty object
      payload: snapshot.val() || {}
    });
  });
};
export default getAllStatCardsAction;
