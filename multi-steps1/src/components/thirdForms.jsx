import React from "react";

export const ThirdForms = () => {
  return (
    <div>
      <p className="font-semibold text-[14px] text-[#334155] mb-2">
        Date of birth <span className="text-[#E14942]">*</span>
      </p>
      <input
        className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
        type="date"
      />
      <p className="font-semibold text-[14px] text-[#334155] ">
        Profile image <span className="text-[#E14942]">*</span>
      </p>
      <input
        className="w-[416px] p-3  rounded-md  mt-[12px] bg-[rgba(127, 127, 128, 0.05)] h-[180px] bg-[#7F7F800D]"
        type="image"
        alt="Add image"
      />
    </div>
  );
};
