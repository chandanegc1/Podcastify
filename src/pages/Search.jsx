import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import SearchCard from "../components/SearchCard";

const Search = () => {
  return (
    <div className="bg-lprimary dark:bg-black w-full min-h-screen">
      <div className="flex flex-wrap flex-col gap-12 p-8 place-items-center justify-center">
        <aside className="w-3/5 h-12 flex gap-8 pl-8 border-2 place-items-center bg-transparent rounded-3xl text-ltext dark:text-dtext">
          <IoSearchSharp size={30} />
          <input
            type="search"
            className="bg-transparent outline-none w-full"
            placeholder="Search Artist/Podcast"
          />
        </aside>
        <aside className="p-8 w-full h-full dark:text-dtext">
          <h1 className="text-3xl font-bold mb-8">Browse all</h1>
          <div className="w-full h-full">
            <SearchCard />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Search;
