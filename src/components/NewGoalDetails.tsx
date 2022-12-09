import React from "react";
import {
  ArrowRightOnRectangleIcon,
  CalendarIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const NewGoalDetails = () => {
  return (
    <div className="h-[99%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-50">
      <div className="flex items-center justify-between border-b p-7">
        <h1 className="text-2xl font-medium">New Goal</h1>
        <ArrowRightOnRectangleIcon className="w-5 h-5" />
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
            />
            <PencilIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGoalDetails;
