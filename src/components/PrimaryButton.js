import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
      {children}
    </button>
  );
};

export default PrimaryButton;
