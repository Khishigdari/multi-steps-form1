"use client";
import { Forms, Join, LastPage, Secondforms, ThirdForms } from "@/components";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function Home() {
  const [step, setStep] = useState("first");

  const localForm =
    typeof window !== "undefined" ? localStorage.getItem("my-form") : null;

  console.log(localForm);

  const [form, setForm] = useState(
    localForm
      ? JSON.parse(localForm)
      : {
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          phone: "",
          password: "",
          confirm: "",
          date: "",
          image: "",
        }
  );

  if (step === "first") {
    return (
      <motion.div
        className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border relative"
        initial={{ opacity: 0, right: -30 }}
        animate={{ opacity: 1, right: 0 }}
      >
        <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px] ">
          <Join></Join>

          <Forms setStep={setStep} form={form} setForm={setForm}></Forms>
          {/* <ContinueBtn setStep={setStep}></ContinueBtn> */}
        </div>
      </motion.div>
    );
  }

  if (step === "second") {
    return (
      <div className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border ">
        <motion.div
          className="w-[480px] h-fit bg-white p-[32px] rounded-[8px] relative"
          initial={{ opacity: 0, right: -30 }}
          animate={{ opacity: 1, right: 0 }}
        >
          <Join></Join>

          <Secondforms
            setStep={setStep}
            form={form}
            setForm={setForm}
          ></Secondforms>
          {/* <SecondBtns setStep={setStep}></SecondBtns> */}

          {/* <ContinueBtn setStep={setStep}></ContinueBtn> */}
        </motion.div>
      </div>
    );
  }
  if (step === "third") {
    return (
      <motion.div
        className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border relative"
        initial={{ opacity: 0, right: -30 }}
        animate={{ opacity: 1, right: 0 }}
      >
        <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px] relative">
          <Join></Join>

          <ThirdForms
            setStep={setStep}
            form={form}
            setForm={setForm}
          ></ThirdForms>
          {/* <ThirdBtns onClickNext={() => setStep("third")}></ThirdBtns> */}

          {/* <ContinueBtn setStep={setStep}></ContinueBtn> */}
        </div>
      </motion.div>
    );
  }
  if (step === "fourth") {
    return <LastPage></LastPage>;
  }
}
