import React from "react";
import OnprogressGoals from "./OnprogressGoals";
import GoalsDone from "./GoalsDone";

const GoalList = () => {
  // DYNAMIC HEROICON
  // https://github.com/tailwindlabs/heroicons/issues/278
  // SCROLLBAR
  // https://www.npmjs.com/package/tailwind-scrollbar

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
            <h1 className="py-5 font-semibold text-3xl">On progress</h1>
          </td>
        </tr>
        <OnprogressGoals />
        <tr>
          <td colSpan={4} className="px-5">
            <h1 className="py-5 font-semibold text-3xl">Goal done</h1>
          </td>
        </tr>
        <GoalsDone />
      </table>
    </div>
  );
};

export default GoalList;
