// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// //import firebase from "firebase/compat/app";
// //import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBkUL6Hyo6rJeCclfMx2wFS93yCGp_H3jg",
  authDomain: "whatsappclone-7fc1e.firebaseapp.com",
  projectId: "whatsappclone-7fc1e",
  storageBucket: "whatsappclone-7fc1e.appspot.com",
  messagingSenderId: "44419781575",
  appId: "1:44419781575:web:afed4f8504e6d93c703fe2",
  measurementId: "G-WHZ36BCRP4",
};

//const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
//const db = getDatabase(firebaseApp);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // import firebase from "firebase";
// // //import firebase from "firebase/compat/app";
// // //import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// //import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBkUL6Hyo6rJeCclfMx2wFS93yCGp_H3jg",
//   authDomain: "whatsappclone-7fc1e.firebaseapp.com",
//   projectId: "whatsappclone-7fc1e",
//   storageBucket: "whatsappclone-7fc1e.appspot.com",
//   messagingSenderId: "44419781575",
//   appId: "1:44419781575:web:afed4f8504e6d93c703fe2",
//   measurementId: "G-WHZ36BCRP4",
// };

// //const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// //const db = getDatabase(firebaseApp);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;
