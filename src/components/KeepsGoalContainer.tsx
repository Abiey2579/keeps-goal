import React, { useState } from "react";
import "./../index.css";

// SESCTION 1 --> LEFT SIDE COMPONENT (PRESENTATIONAL COMPONENT)
import SideNavigation from "./SideNavigation/SideNavigation";
// SECTION 2 --> TOP NAVIGATION (PRESENTATIONAL COMPONENT)
import TopNavigation from "./TopNavigation/TopNavigation";
// SECTION 3 --> MIDDLE OR MAIN COMPONENTS
import Metrics from "./MainContent/Metrics";
import GoalList from "./MainContent/GoalList";
// SECTION 4 --> RIGHT SIDE COMPONENTS
import GoalDetails from "./AsideContent/GoalDetails";
import NewGoal from "./AsideContent/NewGoal";

/* 

  I have categorized the screen into 4 section

  Section 1 Also Side Navigation === the Left Side Navigation
  Section 2 Also Top Navigation === the Top Navigation
  Section 3 Also Middle or Main Content === The middle content also the main section
  Section 4 Also Right Side Content === The Right Side Content

  NOTE:
  Section 4 has two Components that are rendered conditionally

  They are name A and B e.g. bellow
  - Section4A ==> Component To Add New Goal (By Default this is the Active Component)
  - Section4B ==> Component To Display Goal Details

*/

// ORIGIN COMPONENT
const KeepsGoal = () => {
  // State holding info for conditionally rendering What to display on Section 4
  let Section4A = <NewGoal HideSection4={HideSection4} />;
  let Section4B = <GoalDetails HideSection4={HideSection4} />;

  // This State Holds the Status of Section 4 it has two Values
  // 1 === Show Active Component
  // 0 === Hide Active Component

  const [Section4Component, setSection4Component] = useState<any>([
    Section4A,
    1,
  ]);

  // This Function Hide Section 4 when Close Icon is clicked
  function HideSection4() {
    setSection4Component([<span></span>]);
  }

  // This function gets called up when ADD GOAL button is click
  // If clicked and New Goal Component is Hidden it will Display it but won't send anything to database
  // But if clicked and New Goal Component is on the Screen it check for input
  // And send inputs to database
  function addNewGoal() {
    if (Section4Component[1] !== 1) {
      setSection4Component([Section4A, 1]);
      return;
    }
    alert("Now I can send something to database!");
  }

  // This Function Displays the Goal Details when Goal items clicked
  function ShowGoalDetail(id: Number) {
    if (Section4Component[1] !== 2) {
      setSection4Component([Section4B, 2]);
      return;
    }
    alert(id);
  }

  return (
    <div className="flex">
      <SideNavigation />
      <div className="flex-grow h-screen">
        <TopNavigation addNewGoal={addNewGoal} />
        <div className="flex h-[85%]">
          <div className="flex-grow h-full">
            <Metrics />
            <GoalList ShowGoalDetail={ShowGoalDetail} />
          </div>
          {Section4Component[0]}
        </div>
      </div>
    </div>
  );
};

export default KeepsGoal;