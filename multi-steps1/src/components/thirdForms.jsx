"use client";
import React from "react";
import { ThirdBtns } from "@/components";
import { useState } from "react";

export const ThirdForms = ({ setStep, form, setForm }) => {
  console.log(form);

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }

  function gotoNext() {
    const newErrors = {};

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const imageRegex = /\.(jpg|jpeg|png)$/i;

    if (dateRegex.test(form.date)) {
      newErrors.date = null;
    } else {
      newErrors.date = "Please select a date.";
    }
    if (imageRegex.test(form.image)) {
      newErrors.image = null;
    } else {
      newErrors.image = "Image cannot be blank.";
    }
    setErrors(newErrors);

    if (!newErrors.date && !newErrors.image) {
      localStorage.setItem("my-form", JSON.stringify(form));

      setStep("fourth");
    }
  }

  function goBack() {
    setStep("second");
  }

  console.log(errors);

  // console.log(form);
  return (
    <div className="relative">
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
        max="2012-12-31"
      />
      {errors.date && (
        <div className="text-[#E14942] text-[14px] mb-3">{errors.date}</div>
      )}
      <p className="font-semibold text-[14px] text-[#334155] ">
        Profile image <span className="text-[#E14942]">*</span>
      </p>
      {/* <input
        className="w-[416px] p-3  rounded-md  mt-[12px] bg-[rgba(127, 127, 128, 0.05)] h-[180px] bg-[#7F7F800D] mb-[12px]"
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        // alt="Add image"
        name="Add Image"
        // value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      {errors.image && (
        <div className="text-[#E14942] text-[14px] mb-3">{errors.image}</div>
      )} */}

      <div className="w-[416px] p-3  rounded-md  mt-[12px] bg-[rgba(127, 127, 128, 0.05)] h-[180px] bg-[#7F7F800D] mb-[12px] flex flex-col gap-2 items-center justify-center relative">
        <img src="./addImage.svg" />
        Add image
        {preview && (
          <img
            src={preview}
            className="absolute inset-0 h-full w-full object-cover rounded-md"
          />
        )}
        <input
          type="file"
          // accept="image/png, image/jpg, image/jpeg"
          className=" absolute opacity-0 inset-0"
          onChange={(e) => {
            handleImageChange(e);
            setForm({ ...form, image: e.target.files[0].name });
          }}
        />
      </div>
      {errors.image && (
        <div className="text-[#E14942] text-[14px] mb-3">{errors.image}</div>
      )}

      <ThirdBtns gotoNext={gotoNext} goBack={goBack}></ThirdBtns>
    </div>
  );
};
