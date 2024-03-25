import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FloatingNavDemo } from "./FloatingNavDemo";
const Navbar = () => {
  return (
    // <div
    //   className={`${
    //     menu === true ? "lg:w-[85%] w-full" : "w-full"
    //   } h-16 shadow-lg shadow-yellow-400/60 fixed text-ltext dark:text-dtext flex justify-between place-items-center py-4 px-10 bg-lsecondary dark:bg-dprimary z-50`}
    // >
    //   <button onClick={() => setMenu(!menu)}>
    //     <RiMenu2Fill size={25} />
    //   </button>
    //   <h1 className="text-2xl font-bold">Hello Abhinav</h1>
    //   <img
    //     src="https://lh3.googleusercontent.com/a/ACg8ocKV9tgmoAN-5hehPD64D6y72WqOvNGjeV39LtcBluyh1lY=s96-c"
    //     alt=""
    //     className="w-10 h-10 rounded-full"
    //   />
    // </div>
    <FloatingNavDemo />
  );
};

export default Navbar;
