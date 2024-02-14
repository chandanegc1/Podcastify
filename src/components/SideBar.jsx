import React from "react";
import { NavLink } from "react-router-dom";
import { FaPodcast } from "react-icons/fa6";
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { IoMdCloudUpload, IoMdLogIn } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Theme from "../utils/Theme";

const SideBar = ({ menu, setMenu }) => {
  return (
    <div
      className={`w-52 ${
        menu ? "opacity-100" : "opacity-0 pointer-events-none"
      } z-[100] bg-lsecondary duration-200 transition-opacity ease-in-out dark:bg-dsecondary h-full py-4 place-items-center fixed flex-col`}
    >
      <div className="px-3 flex justify-between w-full">
        <NavLink to={"/"} className="flex place-items-center gap-2 ">
          <FaPodcast className="text-yellow-500" size={30} />
          <span className="md:text-2xl font-bold uppercase text-yellow-500">
            Podcastify
          </span>
        </NavLink>
        <button
          className="text-ltext dark:text-dtext md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <RxCross1 size={25} />
        </button>
      </div>
      <div className="mt-6 text-ltext dark:text-dtext flex flex-col w-full">
        <NavLink
          to={"/"}
          className="flex  place-items-center py-4 px-4 gap-5 hover:bg-black/60 dark:hover:bg-white/40 transform hover:-translate-y-2"
        >
          <AiFillHome size={25} />
          <span className="text-lg font-normal">Dashboard</span>
        </NavLink>
        <NavLink
          to={"/search"}
          className="flex place-items-center py-4 px-4 gap-5 hover:bg-black/60 dark:hover:bg-white/40 transform hover:-translate-y-2"
        >
          <AiOutlineSearch size={25} />
          <span className="text-lg font-normal">Search</span>
        </NavLink>
        <NavLink
          to={"/favourites"}
          className="flex place-items-center py-4 px-4 gap-5 hover:bg-black/60 dark:hover:bg-white/40 transform hover:-translate-y-2"
        >
          <AiFillHeart size={25} />
          <span className="text-lg font-normal">Favourites</span>
        </NavLink>
        <div className="w-full h-[2px] bg-dsecondary dark:bg-lsecondary my-8"></div>
        <NavLink
          to={"/upload"}
          className="flex place-items-center py-4 px-4 gap-5 hover:bg-black/60 dark:hover:bg-white/40 transform hover:-translate-y-2"
        >
          <IoMdCloudUpload size={25} />
          <span className="text-lg font-normal">Upload</span>
        </NavLink>
        <Theme />
        <NavLink
          to={"/login"}
          className="flex place-items-center py-4 px-4 gap-5 hover:bg-black/60 dark:hover:bg-white/40 transform hover:-translate-y-2"
        >
          <IoMdLogIn size={25} />
          <span className="text-lg font-normal">Login</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
