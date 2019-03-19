import firebase from "firebaseConfig";

// get me the firebase database
const databaseRef = firebase.database().ref();

// get me the table named user-details
// if it does not exist, firebase will
// automatically create it
const userDetailsRef = databaseRef.child("user-details");

const registerAction = (name, email, password) => async dispatch => {
  // firebase offers us this function createUserWithEmailAndPassword
  // which will automatically create the user for us
  // it only has two arguments, the email and the password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    // then() function is used to know when the async call has ended
    // that way, we can notify our reducers that register was succesful
    .then(function(user) {
      // we take the user id and it's name and we add it in our
      // user-details table
      userDetailsRef.push().set({ userId: user.user.uid, userName: name });
      // after that we dispatch to our reducers the fact that
      // register was succesful by sending true
      dispatch({ type: "register", payload: true });
      // if the register was not succesful we can catch the erros here
    })
    .catch(function(error) {
      // if we have any erros, we'll throw an allert with that error
      alert(error);
    });
};
export default registerAction;
