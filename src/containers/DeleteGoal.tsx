import { firebaseDB } from "./db";

// DELETE A DOC IN A GOALS COLLECTION
const DeleteGoal = () => {
  try {
    // const response = await firebaseDB
    //   .collection("goals")
    //   .doc(req.params.id)
    //   .delete();
    const e = "Something";
  } catch (error) {
    console.log(error);
  }
};

export default DeleteGoal;
