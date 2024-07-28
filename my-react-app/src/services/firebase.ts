import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCqz6nJ7z5Y6Y9Y6Y6Y6Y6Y6Y6Y6Y6Y6Y',
  authDomain: 'authdomain',
  databaseURL: 'https://databaseurl.firebaseio.com',
  projectId: 'projectid',
  storageBucket: 'storagebucket',
  messagingSenderId: 'messagingSenderId',
  appId: 'appid'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };