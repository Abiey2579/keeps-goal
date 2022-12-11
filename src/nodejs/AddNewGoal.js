import React, { FunctionComponent } from "react";
import { db } from "../firebase/db";
import { collection, addDoc } from "firebase/firestore";

const createNewGoal = (props) => {
  alert(JSON.stringify(props));
};

export default createNewGoal;
