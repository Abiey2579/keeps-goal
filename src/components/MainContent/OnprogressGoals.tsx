import React, { FunctionComponent } from "react";
import * as HIcons from "@heroicons/react/24/outline";
import Response from "./Response/data";

// This Function Customizes the HeroIcon Library
// Used for Dynamic Icon Creation
const DynamicHeroIcon: FunctionComponent<{ icon: string }> = (props) => {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon
        className="w-8 h-8 bg-lime-300 rounded-full p-1 mr-2"
        aria-hidden="true"
      />
    </>
  );
};

// FunctionComponent<any> tell react that this component can
// recieve props (NOTE: Removing it will break the program)
// PRESETATIONAL COMPONENT (CONTAINS ONLY UI)
const OnprogressGoals = (props: any) => {
  // Destructuring Goals List from it Props
  const { goalsList } = props;
  // console.log(`On progress - ${goalsList}`);

  // ABOUT --> goalsList
  // if it returns true then all values are value
  // if it returns false then index [0] = false and [1] = the error message

  // This Variable Will Holds Only Goals with Status "Onprogress"
  const OnprogressGoalsResponse = Response.filter(
    (Goal) => Goal.GoalStatus === "Onprogress"
  );
  return (
    <React.Fragment>
      {OnprogressGoalsResponse.map((Goal) => (
        <tr
          key={Goal.GoalID}
          className="items-center hover:bg-gray-900 cursor-pointer"
          onClick={() => props.ShowGoalDetail(Goal.GoalID)}
        >
          <td className="py-3 pl-5">
            <span className="text-gray-400 text-sm">{Goal.DateCreated}</span>
          </td>
          <td className="flex items-center h-full py-3">
            <DynamicHeroIcon icon={Goal.GoalIcon} />
            <div className="flex flex-col items-start">
              <span className="text-gray-900 text-sm font-medium">
                {Goal.GoalName}
              </span>
              <span className="text-xs text-gray-500">{Goal.GoalType}</span>
            </div>
          </td>
          <td className="py-3">
            <span className="text-gray-500 text-sm font-medium">
              {Goal.DueDate}
            </span>
          </td>
          <td className="py-3 pr-5">
            <span className="text-gray-500 text-sm font-medium">
              {Goal.GoalTarget}
            </span>
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default OnprogressGoals;
