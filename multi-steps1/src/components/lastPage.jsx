import React from "react";

export const LastPage = () => {
  return (
    <div className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border">
      <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px]">
        <img className="w-15 h-15" src="MainLogo.svg" />
        <p className="text-[26px] font-semibold text-[#202124] my-2">
          You're All Set 🔥
        </p>
        <p className="text-[#8E8E8E] font-[18px] ">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
