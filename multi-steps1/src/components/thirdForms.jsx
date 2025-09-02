"use client";
import React from "react";
import { ThirdBtns } from "@/components";
import { useState } from "react";

export const ThirdForms = (setStep) => {
  const [form, setForm] = useState({
    date: "",
  });

  const [errors, setErrors] = useState({});

  function gotoNext() {
    const newErrors = {};

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateRegex.test(form.date)) {
      newErrors.date = null;
    } else {
      newErrors.date = "Please select a date.";
    }
    setErrors(newErrors);

    if (!newErrors.date) {
      setStep("fourth");
    }
  }

  function goBack() {
    setStep("second");
  }

  console.log(errors);

  // console.log(form);
  return (
    <div>
      <p className="font-semibold text-[14px] text-[#334155] mb-2">
        Date of birth <span className="text-[#E14942]">*</span>
      </p>
      <input
        className={
          !errors.date
            ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
            : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
        }
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      {errors.date && (
        <div className="text-[#E14942] text-[14px] mb-3">{errors.date}</div>
      )}
      <p className="font-semibold text-[14px] text-[#334155] ">
        Profile image <span className="text-[#E14942]">*</span>
      </p>
      <input
        className="w-[416px] p-3  rounded-md  mt-[12px] bg-[rgba(127, 127, 128, 0.05)] h-[180px] bg-[#7F7F800D]"
        type="image"
        alt="Add image"
      />
      <ThirdBtns gotoNext={gotoNext} goBack={goBack}></ThirdBtns>
    </div>
  );
};
