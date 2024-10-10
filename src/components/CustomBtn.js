import React from "react";

const CustomBtn = ({ text, extraStyles, handleClick, successMessage }) => {
  return (
    <button
      className={`bg-secondary border-2 border-secondary text-black text-[14px] font-semibold px-5 py-2 rounded-lg  z-10 relative transition-all duration-300 hover:bg-transparent hover:text-gray ${extraStyles}`}
      onClick={handleClick}
    >
      {/* REMEMBER LATER -> Add some animation so when the text changes from success to the default text, it has some effect */}
      {successMessage ? successMessage : text}
    </button>
  );
};

export default CustomBtn;
