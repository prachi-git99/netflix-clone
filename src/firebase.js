import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1ZYl_DnffskZI0S4ZhNozFnuvZQIDkB4",
    authDomain: "netflix-clone-e8d19.firebaseapp.com",
    projectId: "netflix-clone-e8d19",
    storageBucket: "netflix-clone-e8d19.appspot.com",
    messagingSenderId: "655013876004",
    appId: "1:655013876004:web:01345a43da6d4c133b23b1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {auth};

  export default db ; 