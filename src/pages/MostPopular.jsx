import React from "react";
import PodcastCard from "../components/PodcastCard";
import { NavLink } from "react-router-dom";

const MostPopular = () => {
  return (
    <div className="px-4 rounded w-full h-full bg-dsecondary/50">
      <aside className="flex text-ltext dark:text-dtext justify-between py-5 px-8">
        <h1 className="text-2xl font-bold">Most Popular</h1>
        <NavLink className="text-xl text-yellow-500 font-medium">
          Show all
        </NavLink>
      </aside>
      <aside className="flex flex-wrap justify-between gap-6">
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </aside>
    </div>
  );
};

export default MostPopular;
