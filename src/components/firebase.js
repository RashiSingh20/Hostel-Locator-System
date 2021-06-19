import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDb6M3fbcgcxpwPmlY_GIvc2mAwYdLqPQY",
    authDomain: "hostel-locator-system.firebaseapp.com",
    projectId: "hostel-locator-system",
    storageBucket: "hostel-locator-system.appspot.com",
    messagingSenderId: "229593764720",
    appId: "1:229593764720:web:5dd8a4320ff5663c65b5b5",
    measurementId: "G-6XHDX8357S"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const google = new firebase.auth.GoogleAuthProvider();

export { auth };