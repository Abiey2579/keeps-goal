// CODE TO INITIALIZE FIREBASE ADMIN
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import credentials from "./key/serviceAccountKey.json";

const app = initializeApp(credentials);
const firebaseDB = getFirestore(app);

export { firebaseDB };
