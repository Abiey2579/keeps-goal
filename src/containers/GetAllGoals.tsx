import { firebaseDB } from "./db";
import { collection, getDocs } from "firebase/firestore";

const responseArr: any[] = [];

// GETS ALL AVAILABLE DOCS IN GOALs COLLECTION
const getAllGoals = async () => {
  const response = await getDocs(collection(firebaseDB, "goals"));
  response.forEach((doc) => {
    responseArr.push(doc.data());
  });
};

console.log(responseArr);

export { getAllGoals, responseArr };
