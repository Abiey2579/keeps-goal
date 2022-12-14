import { firebaseDB } from "./db";
import { collection, addDoc } from "firebase/firestore";

// ADDS DOC TO GOALS COLLECTION
const createNewGoal = async (props: any) => {
  try {
    const res = await addDoc(collection(firebaseDB, "goals"), props);
    return res ? true : false;
  } catch (error) {
    return false;
  }
};

export default createNewGoal;
