import React, { useState } from "react";
import { SecondBtns } from "@/components";
// import { motion } from "motion/react";

export const Secondforms = ({ setStep, form, setForm }) => {
  // const [form, setForm] = useState({
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirm: "",
  // });

  console.log(form);

  const [errors, setErrors] = useState({});

  function gotoNext() {
    const newErrors = {};

    // const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*\s).{8,15}$/;

    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Please provide a valid email address.";
    }

    if (phoneRegex.test(form.phone)) {
      newErrors.phone = null;
    } else {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else {
      newErrors.password =
        "Password must include letters, numbers and special characters.";
    }

    // if (form.password === form.confirm && !form.confirm === "") {
    //   newErrors.confirm = null;
    // } else {
    //   newErrors.confirm = "Passwords do not match. Please try again.";
    // }

    if (form.password === form.confirm) {
      newErrors.confirm = null;
    } else {
      newErrors.confirm = "Passwords do not match. Please try again.";
    }
    if (form.confirm === "") {
      newErrors.confirm = "Passwords do not match. Please try again.";
    }

    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.phone &&
      !newErrors.password &&
      !newErrors.confirm
    ) {
      localStorage.setItem("my-form", JSON.stringify(form));

      setStep("third");
    }
  }

  function goBack() {
    setStep("first");
  }
  console.log(errors);

  return (
    <div
      className="relative"
      // initial={{ opacity: 0, right: -30 }}
      // animate={{ opacity: 1, right: 0 }}
    >
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Email <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.email
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-[#E14942] text-[14px] mb-3">{errors.email}</div>
        )}
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Phone number <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.phone
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone number"
        />
        {errors.phone && (
          <div className="text-[#E14942] text-[14px] mb-3">{errors.phone}</div>
        )}
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.password
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-[#E14942] text-[14px] mb-3">
            {errors.password}
          </div>
        )}
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Confirm password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.confirm
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="password"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          placeholder="Confirm password"
        />
        {errors.confirm && (
          <div className="text-[#E14942] text-[14px] mb-3">
            {errors.confirm}
          </div>
        )}
      </div>
      <SecondBtns gotoNext={gotoNext} goBack={goBack}></SecondBtns>
    </div>
  );
};
