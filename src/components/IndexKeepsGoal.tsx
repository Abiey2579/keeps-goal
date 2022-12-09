import React, { useState } from "react";
import "./../index.css";

// COMPONENTS
import GoalDetails from "./GoalDetails";
import GoalList from "./GoalList";
import Metrics from "./Metrics";
import NewGoalDetails from "./NewGoalDetails";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

/* 

  I have categorized the screen into 4 section

  section 1 === the Left Side Navigation
  section 2 === the Top Navigation
  section 3 === The middle content also the main section
  section 4 === The Right Side Content


*/

const KeepsGoal = () => {
  let NewGoalDetailsComponent = <NewGoalDetails HideSection4={HideSection4} />;
  let GoalDetailsComponent = <GoalDetails HideSection4={HideSection4} />;

  // This State Holds the Status of Section it has two Values
  // 1 === Show Active Component
  // 0 === Hide Active Component
  const [Section4ActiveComponent, setSection4ActiveComponent] = useState([
    NewGoalDetailsComponent,
    1,
  ]);

  // This Function Hide Section 4 when Close Icon is clicked
  function HideSection4() {
    setSection4ActiveComponent([<span></span>]);
  }

  // This function gets called up when ADD GOAL button is click
  // If clicked and New Goal Component is Hidden it will Display it but won't send anything to database
  // But if clicked and New Goal Component is on the Screen it check for input
  // And send inputs to database
  function EnterNewGoal() {
    if (Section4ActiveComponent[1] !== 1) {
      setSection4ActiveComponent([NewGoalDetailsComponent, 1]);
      return;
    }
    alert("Now I can send something to database!");
  }

  // This Function Displays the Goal Details when Goal items clicked
  function ShowGoalDetail(id: Number) {
    if (Section4ActiveComponent[1] !== 2) {
      setSection4ActiveComponent([GoalDetailsComponent, 2]);
      return;
    }
    alert(id);
  }

  return (
    <div className="flex">
      <SideNavigation />
      <div className="flex-grow h-screen">
        <TopNavigation EnterNewGoal={EnterNewGoal} />
        <div className="flex h-[85%]">
          <div className="flex-grow h-full">
            <Metrics />
            <GoalList ShowGoalDetail={ShowGoalDetail} />
          </div>
          {Section4ActiveComponent[0]}
        </div>
      </div>
    </div>
  );
};

export default KeepsGoal;
