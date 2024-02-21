import React from "react";

const CommonUI = (props: any) => {
  return (
    <p className=" bg-[#D9F2DD] text-[#359742] w-fit px-4 py-[5px] rounded-full m-auto flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#359742] block"></span>{" "}
      {props.status}
    </p>
  );
};

export default CommonUI;
