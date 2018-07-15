import firebase from 'firebase';

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

const loginUser = (user) => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

const logOut = (user) => {
  return firebase.auth().signOut;
};

export default {registerUser, loginUser, logOut};
