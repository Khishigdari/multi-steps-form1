import React from "react";

export const SecondBtns = ({ gotoNext, goBack }) => {
  return (
    <div className="flex gap-2">
      {" "}
      <button
        onClick={goBack}
        className="flex gap-1 w-[128px] rounded-[6px] border-[1px] px-3 py-[10px] border-[#CBD5E1] mt-[82px]"
      >
        <img className="w-6 h-6" src="chevron_left.svg" />
        Back
      </button>
      <button
        onClick={gotoNext}
        className="bg-[#121316] w-[416px] rounded-[6px] px-3 py-[10px] text-white mt-[82px] flex justify-center gap-1 cursor-pointer"
      >
        Continue 2/3
        <img className="w-6 h-6" src="chevron_right.svg" />
      </button>
    </div>
  );
};
