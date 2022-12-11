import React, { FunctionComponent } from "react";
import {
  ArrowRightOnRectangleIcon,
  CalendarIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

// CHART COMPONENT (CONTAINER COMPONENT --> CONTAINS LOGICS)
import { ApexChartComponent } from "./Chart";

// FunctionComponent<any> tell react that this component can
// recieve props (NOTE: Removing it will break the program)
// PRESETATIONAL COMPONENT (CONTAINS ONLY UI)
const GoalDetails: FunctionComponent<any> = (props) => {
  return (
    <div className="h-[99%] w-96 bg-gray-100 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-50">
      <div className="flex items-center justify-between border-b p-7">
        <h1 className="text-2xl font-medium">Goal Detail</h1>
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
              value={"Android Studio Course"}
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="Status"
            className="text-sm font-medium mb-1 text-gray-500"
          >
            Status
          </label>
          <div className="flex items-center justify-between border-b py-3">
            <input
              type="text"
              name="Status"
              placeholder="Status"
              className="w-full border-0 outline-0 bg-transparent font-semibold"
              value={"Actived"}
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="mb-4">
            <label
              htmlFor="DateCreated"
              className="text-sm font-medium mb-1 text-gray-500"
            >
              Date Created
            </label>
            <div className="flex items-center justify-between border-b py-3">
              <input
                type="text"
                name="DateCreated"
                placeholder="Date Created"
                className="w-full border-0 outline-0 bg-transparent font-semibold"
                value={"30 Oct, 2022"}
              />
              <CalendarIcon className="w-5 h-5" />
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
                type="text"
                name="DueDate"
                placeholder="Due Date "
                className="w-full border-0 outline-0 bg-transparent font-semibold"
                value={"25 Dec, 2022"}
              />
              <CalendarIcon className="w-5 h-5" />
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
              value={"Intermediate Level"}
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
        <div className="mb-4">
          <span className="text-sm font-medium mb-3 block text-gray-500">
            Progress
          </span>
          <h1 className="text-2xl font-semibold mb-1">Android Studio Course</h1>
          <div className="flex items-center gap-5 border-b py-3">
            <span className="text-xs bg-green-300 text-green-800 font-semibold py-1 px-2 rounded-full">
              80%
            </span>
            <span className="text-xs bg-green-300 text-green-800 font-semibold py-1 px-2 rounded-full">
              Course
            </span>
          </div>
          <div className="w-full ">
            {/* CHARTS */}
            <ApexChartComponent />
          </div>
          <div className="grid grid-cols-7 items-center gap-4 py-3">
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Sun
            </span>
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Mon
            </span>
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Tue
            </span>
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Wed
            </span>
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Thu
            </span>
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Fri
            </span>
            <span className="text-xs font-medium text-gray-500 hover:bg-gray-600 py-1 px-2 rounded-full hover:text-gray-100 cursor-pointer">
              Sat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalDetails;
