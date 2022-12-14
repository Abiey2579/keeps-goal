import React, { FunctionComponent, useState } from "react";
import {
  ArrowRightOnRectangleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

// FunctionComponent<any> tell react that this component can
// recieve props (NOTE: Removing it will break the program)
// PRESETATIONAL COMPONENT (CONTAINS ONLY UI)
const NewGoal: FunctionComponent<any> = (props) => {
  // State for keep the Updated Input Values
  const [newGoalInputs, setnewGoalInputs]: any = useState({
    GoalID: Math.floor(Math.random() * 9999999),
    GoalType: "Social Media",
    GoalIcon: "InboxStackIcon",
    GoalCompletion: "Onprogress",
    GoalName: "",
    GoalStatus: "",
    DateCreated: "",
    DueDate: "",
    GoalTarget: "",
  });

  // This Function Gets called whenever input detect a change (onChange())
  // It Updates the State with latest input values
  // And Pass the Updated State to KeepsGoalContainer.tsx Component for further

  function handleInputValue(e: any) {
    const { name, value } = e.target;
    const stateCopy = { ...newGoalInputs };
    stateCopy[name] = value;
    setnewGoalInputs(stateCopy);
    // This property is in KeepsGoalContainer Component it Recieves the Data
    props.newGoalData(newGoalInputs);
  }

  return (
    <div
      className="h-[99%] w-96 bg-gray-100 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-50"
      id="NewGoalSection"
    >
      <div className="flex items-center justify-between border-b p-7">
        <h1 className="text-2xl font-medium">New Goal</h1>
        <ArrowRightOnRectangleIcon
          className="w-5 h-5 cursor-pointer"
          onClick={props.hideSection4}
        />
      </div>
      <div className="px-7 py-5">
        <div className="mb-4">
          <label
            htmlFor="GoalName"
            className="text-sm font-medium mb-1 text-gray-500"
          >
            Goal name
          </label>
          <div className="flex items-center justify-between border-b py-3">
            <input
              type="text"
              name="GoalName"
              placeholder="Goal name"
              className="w-full border-0 outline-0 bg-transparent font-semibold"
              onChange={handleInputValue}
              value={newGoalInputs["GoalName"]}
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="GoalStatus"
            className="text-sm font-medium mb-1 text-gray-500"
          >
            Status
          </label>
          <div className="flex items-center justify-between border-b py-3">
            <input
              type="text"
              name="GoalStatus"
              placeholder="Goal Status"
              className="w-full border-0 outline-0 bg-transparent font-semibold"
              onChange={handleInputValue}
              value={newGoalInputs["GoalStatus"]}
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="mb-4">
            <label
              htmlFor="DateCreated"
              className="text-sm font-medium mb-1 text-gray-500"
            >
              Date Created
            </label>
            <div className="flex items-center justify-between border-b py-3">
              <input
                type="date"
                name="DateCreated"
                placeholder="Date Created"
                className="w-full border-0 outline-0 bg-transparent font-semibold"
                onChange={handleInputValue}
                value={newGoalInputs["DateCreated"]}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="DueDate"
              className="text-sm font-medium mb-1 text-gray-500"
            >
              Due Date
            </label>
            <div className="flex items-center justify-between border-b py-3">
              <input
                type="date"
                name="DueDate"
                placeholder="Due Date "
                className="w-full border-0 outline-0 bg-transparent font-semibold"
                onChange={handleInputValue}
                value={newGoalInputs["DueDate"]}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="GoalTarget"
            className="text-sm font-medium mb-1 text-gray-500"
          >
            Goal Target
          </label>
          <div className="flex items-center justify-between border-b py-3">
            <input
              type="text"
              name="GoalTarget"
              placeholder="Goal Target"
              className="w-full border-0 outline-0 bg-transparent font-semibold"
              onChange={handleInputValue}
              value={newGoalInputs["GoalTarget"]}
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGoal;
