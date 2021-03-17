import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOHFPKMHovgxz8KZFunqY8h_FzYDgRZhg",
    authDomain: "clone-d33d0.firebaseapp.com",
    projectId: "clone-d33d0",
    storageBucket: "clone-d33d0.appspot.com",
    messagingSenderId: "1051330422609",
    appId: "1:1051330422609:web:735a150dd283d3d4285570"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };