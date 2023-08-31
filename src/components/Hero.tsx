import Image from "next/image";
import React from "react"
import { useRouter } from "next/router";

const Hero = () => {
  return (
    <div
      className="flex justify-center h-full sm:h-5/6 md:h-3/5 lg:h-10/12 xl:h-5/6 py-16 "
      style={{
        height: "calc(100vh - 160px)",
      }}
    >
      {/* desktop */}
      <div className="bg-white w-3/4 sm:w-5/6 hidden sm:block  h-full relative rounded-sm transition-shadow shadow-sm hover:shadow-lg">
        <Image
          src={"/images/norwood.jpg"}
          alt={""}
          fill={true}
          className="overflow-hidden rounded-lg"
        />
        <div className="relative left-0 right-0">
          <div className="bg-gray-100 dark:bg-transparent">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
              <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center dark:text-white font-black leading-7 md:leading-10">
                  Unlock creativity,
                  <span className="text-indigo-700">NFTs </span>
                  empower artistic visions fairly
                </h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">
                  A professional website drives sales. Create a beautiful
                  website to impress and engage new customers and establish your
                  business online{" "}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10  py-2 sm:py-4 text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="bg-white w-11/12 block sm:hidden pt-24  h-full md:h-4/6 relative rounded-sm transition-shadow shadow-sm hover:shadow-lg">
        <Image
          src={"/images/norwood.jpg"}
          alt={""}
          fill={true}
          className="overflow-hidden rounded-lg"
        />
        <div className="absolute left-0 right-0">
          <div className="bg-gray-100 dark:bg-transparent">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
              <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center dark:text-white font-black leading-7 md:leading-10">
                  Unlock creativity,
                  <span className="text-indigo-700">NFTs </span>
                  empower artistic visions fairly
                </h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-normal text-center text-sm sm:text-lg">
                  A professional website drives sales. Create a beautiful
                  website to impress and engage new customers and establish your
                  business online{" "}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
