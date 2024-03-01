import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    // NEED TO ADD MY FIREBASE CONFIG ONCE I HAVE THAT INFO AVAILABLE...
    // apiKey: "<KEY>",
    // authDomain: "fir-react-e5296.firebaseapp.com",
    // databaseURL: "https://fir-react-e5296.firebaseio.com",
    // projectId: "fir-react-e5296",
    // storageBucket: "fir-react-e5296.appspot.com",
    // messagingSenderId: "1053912851461",
    // appId: "1:1053912851461:web:5409164401179d21f3538b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
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
               ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

export default firebase;