import React, { useState } from "react";

interface ProposFrence {
  mapOption?: any;
  label?: string;
  id?: string;
  option?: any;
  onClick?: any;
  onChange?: any;
  key?: any;
  value?: any;
  selectedData?: any;
  setSelectedData?: any;
  errorMessage?: any;
}

const DropDownMap = ({
  mapOption,
  label,
  id,
  onClick,
  onChange,
  key,
  value,
  selectedData,
  setSelectedData,
  errorMessage,
}: ProposFrence) => {
  const selectValue = (value: any) => {
    setSelectedData(value.target.value);
  };

  return (
    <div className="relative">
      <div className="bg-[#EFF2F3] dropdown pt-[5px] pb-[5px] rounded-md leading-none">
        <label className="text-[12px] block pl-[15px] text-[#57727E]">
          {label}
        </label>
        <select
          className="pl-[10px] bg-[#EFF2F3] outline-none w-[97%] h-[70%] text-[12px] text-[#8097A2]"
          onChange={onChange}
          value={value}
          defaultValue="India"
        >
          {mapOption?.map((items: any, index: number) => {
            return (
              <>
                <option
                  className="text-[Placeholder]"
                  key={index}
                  value={items.value}
                  // onClick={() => selectValue(items.value)}
                  // onChange={() => selectValue(items.value)}
                >
                  {items.value}
                </option>
              </>
            );
          })}
        </select>
      </div>
      {errorMessage && (
        <div className="text-red-500 text-[12px] mt-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default DropDownMap;
