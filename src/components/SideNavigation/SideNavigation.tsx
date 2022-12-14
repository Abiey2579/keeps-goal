import React from "react";

// USER IMAGE
import UserProfileImage from "./../images/user.jpg";

// HERO ICONS LIBRARY
import {
  ChartBarIcon,
  CalendarDaysIcon,
  CalendarIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

// PRESENTATIONAL COMPONENT (CONTAINS ONLY UI)
const SideNavigation = () => {
  return (
    <div className=" bg-gray-100 w-64 min-w-fit max-w-xs h-[100vh]">
      <div className="h-[15%] flex items-center justify-center">
        <h1 className="text-[1.3rem] font-bold">KEEPSGOAL</h1>
      </div>
      <ul className="px-6 py-3">
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
            onClick={(e) => e.preventDefault()}
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Goal Timeline</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
            onClick={(e) => e.preventDefault()}
          >
            <CalendarDaysIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Daily Routine</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
            onClick={(e) => e.preventDefault()}
          >
            <CalendarIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Weekly Routine</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
            onClick={(e) => e.preventDefault()}
          >
            <CalendarDaysIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Monthly Routine</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
            onClick={(e) => e.preventDefault()}
          >
            <DocumentTextIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Export</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
            onClick={(e) => e.preventDefault()}
          >
            <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Help Center</span>
          </a>
        </li>
      </ul>
      <ul className="absolute bottom-0 px-6">
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block p-3"
            onClick={(e) => e.preventDefault()}
          >
            <img
              src={UserProfileImage}
              className="h-6 w-6 rounded-full mr-3"
              alt="User Profile"
            />
            <span className="font-semibold">Yahaya M. B.</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block p-3"
            onClick={(e) => e.preventDefault()}
          >
            <Cog8ToothIcon className="h-6 w-6 mr-3" />
            <span className="font-semibold">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavigation;
