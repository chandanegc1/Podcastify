import React from "react";
import MostPopular from "./MostPopular";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-lprimary dark:bg-dprimary flex">
      <div className="w-full h-full bg-black">
        <MostPopular />
      </div>
    </div>
  );
};

export default Dashboard;
