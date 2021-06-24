import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    // ...YourConfigs...
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthP = new firebase.auth.GoogleAuthProvider();
googleAuthP.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(p);

export default firebase;

// export const createUserProfileDoc = async (userAuth, otherData) => {
//   if (!userAuth) {
//     return;
//   }
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapShot = await userRef.get();
//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...otherData,
//       });
//     } catch (e) {
//       console.log("error user creation", e.message);
//     }
//   }
//   return userRef;
// };