import *  as firebase from 'firebase';

class Firebase {
  static initialize () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBAQ4UHMg79qqGExk2aPUnR6_SAHRqc2SM',
      authDomain: 'sparkapp-9d602.firebaseapp.com',
      databaseURL: 'https://sparkapp-9d602.firebaseio.com',
      projectId: 'sparkapp-9d602',
      storageBucket: 'sparkapp-9d602.appspot.com',
      messagingSenderId: '213231738935'
    });
  }
}

export default Firebase;
