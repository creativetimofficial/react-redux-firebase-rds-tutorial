import firebase from "firebaseConfig";
const databaseRef = firebase.database().ref();
const statCardsRef = databaseRef.child("stat-cards");

const addStatCardAction = (
  statName,
  statDescription,
  statIcon,
  statIconColor,
  statFooterIcon,
  statFooterIconState,
  statFooterPercentage,
  statFooterText
) => async dispatch => {
  statCardsRef
    // the push function will send to our firebase the new object
    .push()
    // and will set in a new row of the table stat-cards
    // with the bellow object
    .set({
      statName: statName,
      statDescription: statDescription,
      statIcon: statIcon,
      statIconColor: statIconColor,
      statFooterIcon: statFooterIcon,
      statFooterIconState: statFooterIconState,
      statFooterPercentage: statFooterPercentage,
      statFooterText: statFooterText
    })
    // when the push has terminated, we will dispatch to our
    // reducer that we have successfully added a new row
    .then(() => {
      dispatch({
        type: "addStatCard"
      });
    });
};
export default addStatCardAction;
