import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCtMeaomkeWuZvNziXdRqCrWgmTCZIivPw",
    authDomain: "todo-2fbe5.firebaseapp.com",
    databaseURL: "https://todo-2fbe5.firebaseio.com",
    projectId: "todo-2fbe5",
    storageBucket: "todo-2fbe5.appspot.com",
    messagingSenderId: "97247614191"
  };
firebase.initializeApp(config);
var database = firebase.database();

export {database};