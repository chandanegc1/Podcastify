import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const PodcastCard = () => {
  return (
    <NavLink
      to={"/"}
      className="flex overflow-hidden rounded-lg w-3/12 h-80 transform duration-300 hover:-translate-y-3 p-4 bg-lsecondary text-ltext dark:text-dtext dark:bg-dsecondary hover:saturate-200"
    >
      <div className="flex flex-col gap-4 relative">
        <NavLink to={"/favourites"} className="z-40 absolute right-0">
          <div className="bg-yellow-300 hover:bg-yellow-500 rounded-full w-8 h-8 grid place-items-center">
            <AiFillHeart size={20} />
          </div>
        </NavLink>
        <figure>
          <img
            src="https://media.wired.com/photos/613bb0daa755c6a4b550bac8/16:9/w_2226,h_1252,c_limit/Gear-Podcast-Hearing-Loss-1279654034.jpg"
            alt=""
            className="rounded object-contain"
          />
        </figure>
        <div className="flex gap-3 flex-col">
          <figcaption className="text-lg font-bold">
            The Tim Ferriss Show
          </figcaption>
          <p className="tracking-tighter h-14 text-sm font-medium text-ltext/80 dark:text-dtext/80 text-ellipsis overflow-hidden">
            The Tim Ferriss Show is a podcast hosted by Tim Ferriss, an author,
            entrepreneur, and public speaker. The podcast features interviews
            with world-class performers from a variety of fields, including
            business, sports, entertainment, and more. Each episode explores the
            guest's strategies, tactics, and habits for achieving success and
            overcoming challenges.
          </p>
        </div>
        <div className="flex justify-between place-items-center">
          <img
            src="https://media.wired.com/photos/613bb0daa755c6a4b550bac8/16:9/w_2226,h_1252,c_limit/Gear-Podcast-Hearing-Loss-1279654034.jpg"
            alt=""
            className="w-6 h-6 object-cover rounded-full"
          />
          <h3 className="uppercase font-medium text-sm">Creator Name</h3>
          <h3 className="text-sm">321 views</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default PodcastCard;
