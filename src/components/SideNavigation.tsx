import React from "react";
import "./../index.css";

// USER IMAGE
import UserProfileImage from "./../Images/user.jpg";

// HERO ICONS LIBRARY
import {
  ChartBarIcon,
  CalendarDaysIcon,
  CalendarIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  Cog8ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const SideNavigation = () => {
  return (
    <div className=" bg-gray-100 max-w-xs h-[100vh] p-8 relative">
      <h1 className="text-2xl font-bold mb-10">KEEPSGOAL</h1>
      <ul>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Goal Timeline</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
          >
            <CalendarDaysIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Daily Routine</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
          >
            <CalendarIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Weekly Routine</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
          >
            <CalendarDaysIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Monthly Routine</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
          >
            <DocumentTextIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Export</span>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:bg-lime-300 p-3 rounded-sm transition"
          >
            <QuestionMarkCircleIcon className="h-5 w-5 mr-3" />
            <span className="font-semibold">Help Center</span>
          </a>
        </li>
      </ul>
      <ul className="absolute bottom-0">
        <li className="mb-2">
          <a
            href="./"
            className="flex items-center block hover:font-bold p-3 transition"
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
            className="flex items-center block hover:font-bold p-3 transition"
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
