import React, { useState } from "react";

export const Forms = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  console.log(form);

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
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          type="text"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          placeholder="First name"
        />
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Last name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          placeholder="Last name"
        />
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Username <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9]"
          type="text"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          placeholder="Username"
        />
      </div>
    </div>
  );
};
