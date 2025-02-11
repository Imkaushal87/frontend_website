import React from "react";
import myImage from "../../Image/image.jpg"; // Adjust the path based on your folder structure

export default function About() {
  return (
    <div className="py-16 bg-white">
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      <div className="md:w-5/12 lg:w-5/12">
        <img
          src={myImage}
          alt="About Us"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-7/12 lg:w-6/12">
        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
          React development is carried out by passionate developers
        </h2>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
