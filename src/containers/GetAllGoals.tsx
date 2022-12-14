import { firebaseDB } from "./db";
import { collection, getDocs } from "firebase/firestore";

const responseArr: any[] = [];

// GETS ALL AVAILABLE DOCS IN GOALs COLLECTION
const getAllGoals = async () => {
  try {
    const response = await getDocs(collection(firebaseDB, "goals"));
    response.forEach((doc) => {
      responseArr.push(doc.data());
    });
    return true;
  } catch (error) {
    responseArr.push(false);
    responseArr.push(error);
    return false;
  }
};

export { getAllGoals, responseArr };
