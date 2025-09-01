"use client";
import {
  ContinueBtn,
  Forms,
  Join,
  LastPage,
  SecondBtns,
  Secondforms,
  ThirdBtns,
  ThirdForms,
} from "@/components";
import React, { useState } from "react";

export default function Home() {
  const [step, setStep] = useState("first");

  if (step === "first") {
    return (
      <div className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border">
        <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px]">
          <Join></Join>

          <Forms></Forms>
          <ContinueBtn setStep={setStep}></ContinueBtn>
        </div>
      </div>
    );
  }

  if (step === "second") {
    return (
      <div className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border">
        <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px]">
          <Join></Join>

          <Secondforms></Secondforms>
          <SecondBtns setStep={setStep}></SecondBtns>

          {/* <ContinueBtn setStep={setStep}></ContinueBtn> */}
        </div>
      </div>
    );
  }
  if (step === "third") {
    return (
      <div className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border">
        <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px]">
          <Join></Join>

          <ThirdForms></ThirdForms>
          <ThirdBtns setStep={setStep}></ThirdBtns>

          {/* <ContinueBtn setStep={setStep}></ContinueBtn> */}
        </div>
      </div>
    );
  }
  if (step === "fourth") {
    return <LastPage></LastPage>;
  }
}
