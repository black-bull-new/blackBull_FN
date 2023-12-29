import React from "react";

const Checkbox = (props: any) => {
  return (
    <div className="flex gap-2 mt-2 font-medium">
      <input type="checkbox" className="bg-[#D9D9D9] " />
      <label className="text-sm">
        <span className="text-[#151515]"> {props.content}</span>
        <b className="font-medium"></b>
      </label>
    </div>
  );
};

export default Checkbox;
