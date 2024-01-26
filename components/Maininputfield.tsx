import React from "react";

const Maininputfield = (props: any) => {
  return (
    <div className="bg-[#EFF2F3]  pt-[6px] pb-[6px] rounded-md h-fit leading-none">
      <label
        className={`text-[12px] block pl-[15px] text-[#57727E] leading-none ${props.labelClass}`}
      >
        {props.label}
      </label>
      <input
        type="First Name"
        id={props.id}
        className={`pl-[15px] bg-[#EFF2F3] outline-none w-[300px] placeholder:text-[12px] text-[12px] font-medium leading-none ${props.className}`}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Maininputfield;
