import { firebaseDB } from "./db";

// GET SPECIFIC DOC IN GOALS COLLECTION
const getGoal = async () => {
  try {
    // const userRef = await firebaseDB.collection("goals").doc(req.params.id);
    // const response = await userRef.get();
    const x = "somwthing";
  } catch (error) {
    console.log(error);
  }
};

export default getGoal;
