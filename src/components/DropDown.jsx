import React, { useEffect } from "react";

const DropDown = ({ obj, setFunc }) => {
  return (
    <div>
      <select
        name=""
        id=""
        className=" w-96 justify-center items-center text-2xl bg-transparent border border-[#000033] rounded-lg outline-none p-1 text-[#000033]  cursor-pointer"
        onChange={(e) => setFunc(e.target.value)}
      >
        {Object.entries(obj).map(([key, value], index) => (
          <option key={index} value={value} className=" ">
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
