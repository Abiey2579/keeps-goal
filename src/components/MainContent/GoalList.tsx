import React, { FunctionComponent } from "react";
import OnprogressGoals from "./OnprogressGoals";
import GoalsDone from "./GoalsDone";

// FunctionComponent<any> tell react that this component can
// recieve props (NOTE: Removing it will break the program)
// It's a Parent Component Contains Following Children
// - OnprogressGoals
// - GoalsDone
// PRESETATIONAL COMPONENT (CONTAINS ONLY UI)
const GoalList: FunctionComponent<any> = (props) => {
  return (
    <div className="h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-50">
      <table className="w-full h-full">
        <tr className="border-b px-5">
          <td className="text-sm font-medium py-5 pl-5">
            <span>Date created</span>
          </td>
          <td className="text-sm font-medium py-5">
            <span className="border-l pl-3">Goal name</span>
          </td>
          <td className="text-sm font-medium py-5">
            <span className="border-l pl-3">Due date</span>
          </td>
          <td className="text-sm font-medium py-5 pr-5">
            <span className="border-l pl-3">Goal target</span>
          </td>
        </tr>
        <tr>
          <td colSpan={4} className="px-5">
            <h1 className="py-5 font-semibold text-2xl">On progress</h1>
          </td>
        </tr>
        <OnprogressGoals ShowGoalDetail={props.ShowGoalDetail} />
        <tr>
          <td colSpan={4} className="px-5">
            <h1 className="py-5 font-semibold text-2xl">Goal done</h1>
          </td>
        </tr>
        <GoalsDone ShowGoalDetail={props.ShowGoalDetail} />
      </table>
    </div>
  );
};

export default GoalList;
