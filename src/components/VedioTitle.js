import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute text-white bg-gradient-to-r from-black to-transparent">
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="py-6 text-base md:text-lg md:w-1/2 lg:w-1/4">{overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black p-3 md:p-4 px-6 md:px-12 text-lg md:text-xl rounded-lg">
            &#9654; Play
          </button>
          <button className="bg-gray-500 text-white p-3 md:p-4 px-6 md:px-12 text-lg md:text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VedioTitle;
