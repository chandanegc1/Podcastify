import React from "react";

const SearchCard = () => {
  return (
    <div className="max-w-60 rounded overflow-hidden shadow-lg bg-lsecondary dark:bg-dsecondary">
      <img
        className="w-full h-64 object-cover"
        src="https://media.wired.com/photos/613bb0daa755c6a4b550bac8/16:9/w_2226,h_1252,c_limit/Gear-Podcast-Hearing-Loss-1279654034.jpg"
        alt="as"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">asd</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">sadas</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
          #as
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
          #asdas
        </span>
        <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
          #asd
        </span>
      </div>
    </div>
  );
};

export default SearchCard;
