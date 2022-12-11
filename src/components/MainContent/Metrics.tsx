import React from "react";

// PRESENTAIONAL COMPONENT (CONTAINS ONLY UI)
const Metrics = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-10 py-4 px-5">
      <div className="border-r">
        <span>
          Goal <br /> This Month
        </span>
      </div>
      <div className="flex flex-col border-r">
        <span className="text-sm">Goal</span>
        <span className="font-bold">8 Goals</span>
      </div>
      <div className="flex flex-col border-r">
        <span className="text-sm">Due Date</span>
        <span className="font-bold">30 Nov, 2022</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm">Goal achieved</span>
        <span className="font-bold">4 Achievements</span>
      </div>
    </div>
  );
};

export default Metrics;
