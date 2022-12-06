import React, { FC } from "react";
import * as HIcons from "@heroicons/react/24/outline";

const DynamicHeroIcon: FC<{ icon: string }> = (props) => {
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

const GoalList = () => {
  const GoalLists = [
    {
      GoalID: Date.now(),
      DateCreated: "09:05 AM",
      GoalName: "Instagram Post Update",
      GoalType: "Social Media",
      GoalIcon: "InboxStackIcon",
      DueDate: "Today, 17:00 PM",
      GoalTarget: "Engagement",
      GoalStatus: "Onprogress",
    },
    {
      GoalID: Date.now(),
      DateCreated: "09:05 AM",
      GoalName: "Android Studio Course",
      GoalType: "Learning",
      GoalIcon: "CodeBracketIcon",
      DueDate: "25 Dec, 2022",
      GoalTarget: "Intermediate Level",
      GoalStatus: "Onprogress",
    },
    {
      GoalID: Date.now(),
      DateCreated: "09:05 AM",
      GoalName: "Business Improvement",
      GoalType: "Business",
      GoalIcon: "ChartPieIcon",
      DueDate: "28 Dec, 2022",
      GoalTarget: "Sales Target",
      GoalStatus: "Onprogress",
    },
    {
      GoalID: Date.now(),
      DateCreated: "09:05 AM",
      GoalName: "Home Interior Design",
      GoalType: "Property",
      GoalIcon: "HomeModernIcon",
      DueDate: "06 Nov, 2022",
      GoalTarget: "Interior Stuff",
      GoalStatus: "Done",
    },
    {
      GoalID: Date.now(),
      DateCreated: "09:05 AM",
      GoalName: "Mike Air Jordan Shop",
      GoalType: "Fashion shopping",
      GoalIcon: "ShoppingCartIcon",
      DueDate: "06 Nov, 2022",
      GoalTarget: "Upgrade Style",
      GoalStatus: "Done",
    },
  ];

  // DYNAMIC HEROICON
  // https://github.com/tailwindlabs/heroicons/issues/278
  // SCROLLBAR
  // https://www.npmjs.com/package/tailwind-scrollbar

  const OnprogressGoals = GoalLists.filter(
    (Goal) => Goal.GoalStatus === "Onprogress"
  );
  const GoalsDone = GoalLists.filter((Goal) => Goal.GoalStatus === "Done");
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
        {OnprogressGoals.map((Goal) => (
          <tr key={Goal.GoalID} className=" hover:bg-gray-900 cursor-pointer">
            <td className="py-3 pl-5">
              <span className="text-gray-400 text-sm">{Goal.DateCreated}</span>
            </td>
            <td className="flex items-center py-3">
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
        <tr>
          <td colSpan={4} className="px-5">
            <h1 className="py-5 font-semibold text-3xl">Goal done</h1>
          </td>
        </tr>
        {GoalsDone.map((Goal) => (
          <tr key={Goal.GoalID} className=" hover:bg-gray-900 cursor-pointer">
            <td className="py-3 pl-5">
              <span className="text-gray-400 text-sm">{Goal.DateCreated}</span>
            </td>
            <td className="flex items-center py-3">
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
      </table>
    </div>
  );
};

export default GoalList;
