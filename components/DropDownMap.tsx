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
}: ProposFrence) => {
  console.log("check kr", mapOption);

//   const [selectedData, setSelectedData] = useState("");

  const selectValue = (value: any) => {
    setSelectedData(value.target.value);
  };
  console.log("data", selectedData);

  return (
    <div className="bg-[#EFF2F3]  pt-[5px] pb-[5px] rounded-md">
      <label className="text-[12px] block pl-[15px] text-[#57727E]">
        {label}
      </label>
      <select
        id={id}
        className="pl-[10px] bg-[#EFF2F3] outline-none w-[97%] h-[70%] text-[12px] text-[#8097A2]"
        onChange={selectValue}
      >
        {mapOption?.map((items: any, index: number) => {
          console.log("new data", { items });
          return (
            <>
              <option
                key={`${index}`}
                value={`${items.value}`}
                onClick={() => selectValue(items.value)}
              >
                {items.value}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownMap;
