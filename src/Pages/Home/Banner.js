import React from "react";

const Banner = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="p-6 py-12 lg:py-32  rounded-lg dark:bg-violet-400 dark:text-gray-900">
        <div className="container flex justify-center items-center mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Buy Pre-owned Products <br />
              Save up to 60%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
