import React from "react";
import CalendarIcon from "./svg/CalendarIcon";
import Image from "next/image";

const Maindatefield = (props: any) => {
  return (
    <div className="bg-[#EFF2F3]  pt-[6px] pb-[6px] rounded-md  relative flex gap-2 pl-[10px]">
      <Image src="/calendarInput.svg" alt="calender" width={18} height={18} />
      <div>
        <label className="text-[12px] block text-[#57727E]" htmlFor="cal">
          {props.label}
        </label>

        <input
          type="date"
          id="cal"
          className="bg-[#EFF2F3] outline-none  placeholder:text-[12px] text-[12px] font-medium "
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Maindatefield;
