import React, { useState } from "react";

export const Secondforms = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  console.log(form);

  return (
    <div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Email <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Phone number <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone number"
        />
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9] mb-[12px]"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />
      </div>
      <div>
        <p className="font-semibold text-[14px] text-[#334155] mb-2">
          Confirm password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-[416px] p-3 border-[#CBD5E1] border-[1px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0CA5E9]"
          type="password"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          placeholder="Confirm password"
        />
      </div>
    </div>
  );
};
