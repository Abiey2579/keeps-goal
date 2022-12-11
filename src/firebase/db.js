const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDawTrhVQF7X9OUox44mWayQiJfwkS5jpo",
  authDomain: "tbb-keepsgoal-demo.firebaseapp.com",
  projectId: "tbb-keepsgoal-demo",
  storageBucket: "tbb-keepsgoal-demo.appspot.com",
  messagingSenderId: "284992440560",
  appId: "1:284992440560:web:75292c5e98ddcc174b5a35",
};

const keepsGoalApp = initializeApp(firebaseConfig);
const db = getFirestore(keepsGoalApp);

export { db };
