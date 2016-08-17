import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCWvfVuavFkL7rua9bS0YN53nC8jmHbHLI",
    authDomain: "bootcamp-c9d14.firebaseapp.com",
    databaseURL: "https://bootcamp-c9d14.firebaseio.com",
    storageBucket: "bootcamp-c9d14.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
