import React from "react";

// HERO ICONS LIBRARY
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const TopNavigation = () => {
  return (
    <div className="flex items-center justify-between p-8 w-full border-b">
      <h1 className="text-4xl font-semibold">Goal Timeline</h1>
      <div className="flex">
        <div className="flex items-center border rounded-sm mr-2 px-1">
          <input
            type="text"
            className="px-2 py-1 outline-0 border-0"
            placeholder="Search goal"
          />
          <MagnifyingGlassIcon className="text-gray-900 font-bold w-5 h-5 cursor-pointer" />
        </div>

        <button className="flex items-center py-2 px-4 bg-gray-900 rounded-sm">
          <PlusIcon className="w-5 h-5 mr-3 text-gray-100" />
          <span className="text-gray-100">Add Goal</span>
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;
