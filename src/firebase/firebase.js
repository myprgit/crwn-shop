import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAiiDS61Q7xFMh-a8Rs4Fj8a0I7fd4PBLk",
    authDomain: "dtmtest-ee633.firebaseapp.com",
    projectId: "dtmtest-ee633",
    storageBucket: "dtmtest-ee633.appspot.com",
    messagingSenderId: "897492770705",
    appId: "1:897492770705:web:422584142e96c64d028430",
    measurementId: "G-9FQQCTRYHV"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthP = new firebase.auth.GoogleAuthProvider();
googleAuthP.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthP);

export default firebase;

export const createUserProfileDoc = async (userAuth, otherData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData,
            });
        } catch (e) {
            console.log("error user creation", e.message);
        }
    }
    return userRef;
};