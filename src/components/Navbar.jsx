import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-[84%] h-16 shadow-lg dark:shadow-lsecondary/30 shadow-dsecondary/30 fixed text-ltext dark:text-dtext flex justify-between place-items-center py-4 px-10 bg-lsecondary dark:bg-dsecondary">
      <RiMenu2Fill size={25} />
      <h1 className="text-2xl font-bold">Hello Abhinav</h1>
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocKV9tgmoAN-5hehPD64D6y72WqOvNGjeV39LtcBluyh1lY=s96-c"
        alt=""
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default Navbar;
