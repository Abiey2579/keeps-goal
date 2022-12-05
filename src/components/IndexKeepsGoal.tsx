import React from "react";
import "./../index.css";

// COMPONENTS
import GoalDetails from "./GoalDetails";
import GoalList from "./GoalList";
import Metrics from "./Metrics";
import NewGoalDetails from "./NewGoalDetails";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";

const KeepsGoal = () => {
  return (
    <div className="flex flex-">
      <SideNavigation />
      <div className="flex-grow">
        {/* <Metrics />
      <GoalDetails />
      <GoalList />
      <NewGoalDetails /> */}
        <TopNavigation />
      </div>
    </div>
  );
};

export default KeepsGoal;
