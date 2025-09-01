import React from "react";

export const ContinueBtn = ({ setStep }) => {
  return (
    <button
      onClick={() => setStep("second")}
      className="bg-[#121316] w-[416px] rounded-[6px] px-3 py-[10px] text-white mt-[162px] flex justify-center gap-1 cursor-pointer"
    >
      Continue 1/3
      <img className="w-6 h-6" src="chevron_right.svg" />
    </button>
  );
};
