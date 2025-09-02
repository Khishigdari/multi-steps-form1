import React, { useState } from "react";
import { ContinueBtn } from "@/components";

export const Forms = ({ setStep }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const [errors, setErrors] = useState({});

  function gotoNext() {
    const newErrors = {};

    // const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
    const nameRegex = /^[a-z ,.'-]+$/i;

    if (nameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }

    if (nameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    if (nameRegex.test(form.username)) {
      newErrors.username = null;
    } else {
      newErrors.username =
        "Username cannot contain special characters or numbers.";
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.username) {
      setStep("second");
    }
  }
  console.log(errors);

  //   const pCommonstyles = {
  //     fontWeight: "semibold",
  //     fontSize: "14px",
  //     color: "#33415",
  //     marginBottom: "8px",
  //   };

  return (
    <div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          {/* <p style={pCommonstyles}> */}
          First name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.firstName
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="text"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          placeholder="First name"
        />

        {errors.firstName && (
          <div className="text-[#E14942] text-[14px] mb-3">
            {errors.firstName}
          </div>
        )}
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Last name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.lastName
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          placeholder="Last name"
        />
        {errors.lastName && (
          <div className="text-[#E14942] text-[14px] mb-3">
            {errors.lastName}
          </div>
        )}
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Username <span className="text-[#E14942]">*</span>
        </p>
        <input
          className={
            !errors.username
              ? "w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
              : " w-[416px] p-3 border-[#E14942] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          }
          type="text"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          placeholder="Username"
        />
        {errors.username && (
          <div className="text-[#E14942] text-[14px] mb-3">
            {errors.username}
          </div>
        )}
      </div>
      <ContinueBtn gotoNext={gotoNext}></ContinueBtn>
    </div>
  );
};
