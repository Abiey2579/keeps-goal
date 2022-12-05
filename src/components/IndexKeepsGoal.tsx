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
    <div className="flex">
      <SideNavigation />
      <div className="flex-grow">
        <TopNavigation />
        <div className="flex min-h-max">
          <div className="flex-grow p-5">
            <Metrics />
            <GoalList />
          </div>
          <div className="w-96 min-w-fit max-w-sm p-5 bg-gray-100">
            <GoalDetails />
            <NewGoalDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepsGoal;
