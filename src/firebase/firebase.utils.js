

import {  getFirestore , addDoc , collection , doc , getDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXy85G4zquMtavoMgYZzsg1L9MDCJIehQ",
    authDomain: "the-clothing-f3a86.firebaseapp.com",
    projectId: "the-clothing-f3a86",
    storageBucket: "the-clothing-f3a86.appspot.com",
    messagingSenderId: "278879940074",
    appId: "1:278879940074:web:153e815e64a4ffd1c1d693",
    measurementId: "G-DH155E3BQX"
  }

  const app = initializeApp(config);
  const Firestoredb = getFirestore(app);
  export const createUserProfileDocument = async (userAuth , additionalData) => {

      if(!userAuth) return;


      let userRef = null;
      const {displayName , email} = userAuth;

      const createdAt = new Date();

      try {
         const docRef = await addDoc(collection(Firestoredb, "users"), {
           displayName: displayName,
           Email: email,
           createdAt: createdAt
         });
          userRef = doc(Firestoredb, "users", docRef.id);
         console.log("Document written with ID: ", docRef.id);
       } catch (e) {
         console.error("Error adding document: ", e);
       }

      
       return userRef;
  }

 export const auth = getAuth();
 

 

 const provider = new GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});
 const signInWithGoogle = () => {

    signInWithPopup(auth , provider);

 }

 export default signInWithGoogle;


 


