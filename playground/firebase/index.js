import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCWvfVuavFkL7rua9bS0YN53nC8jmHbHLI",
  authDomain: "bootcamp-c9d14.firebaseapp.com",
  databaseURL: "https://bootcamp-c9d14.firebaseio.com",
  storageBucket: "bootcamp-c9d14.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Dmitry',
    age: 27
  }
});


firebaseRef.update({
  'app/name': 'Todo Application',
  'user/name': 'Andrew'
});
firebaseRef.child('app').update({
  name: 'Todo Application 2'
});
firebaseRef.child('user').update({
  name: 'Vasya'
});
