import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const SuccessToast = (props: any) => {
  return (
    <div
      id="toast-success"
      className="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
      style={{
        position: "fixed",
        top: "7%",
        left: "50%",
        right: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{props.Title}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <PlusIcon onClick={props.closeToast} />
      </button>
    </div>
  );
};

export default SuccessToast;
