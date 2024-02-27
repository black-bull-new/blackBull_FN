import Image from "next/image";
import { useState } from "react";

interface StatusChipProps {
  chipColor: (value: any) => void;
}

const StatusChip = ({ chipColor }: StatusChipProps) => {
  const [color, setColor] = useState("");
  const toggleColor = (value: any) => {
    setColor(value.target.value);
    chipColor(value?.target?.value);
  };
  const options = [
    { option: "Select", value: "Select" },
    { option: "Approved", value: "Approved" },
    { option: "Under Review", value: "Under Review" },
    { option: "Rejected", value: "Rejected" },
  ];
  return (
    <>
      <div className={"relative"}>
        <select
          name="status" 
          id="status"
          className={`focus:outline-none appearance-none pt-[5px] pb-[7px] text-center pl-4 pr-8 rounded-full text-white ${
            color === "Approved"
              ? "bg-[#D9F2DD]  !text-[#359742] w-fit px-4 py-[5px] rounded-full m-auto flex items-center gap-2"
              : color === "Under Review"
              ? "bg-[#EAEDFA]  !text-[#5872DA] w-fit px-4 py-[5px] rounded-full m-auto flex items-center gap-2"
              : color === "Rejected"
              ? "bg-[#FFE5E5]  !text-[#FF6666] w-fit px-4 py-[5px] rounded-full m-auto flex items-center gap-2"
              : "!text-black border"
          }`}
          onChange={toggleColor}
        >
          {options?.map((value, index) => {
            return (
              <option
                value={value.value}
                key={index}
                onClick={() => toggleColor(value.option)}
                className="bg-white text-black"
              >
                {value.option}
              </option>
            );
          })}
        </select>
        <Image
          src="/arrow-white.svg"
          alt="arrow down"
          width={16}
          height={16}
          className={`absolute right-2 top-[10px] ${
            color === "Approved"
              ? "!text-[#359742]"
              : color === "Under Review"
              ? "text-[#5872DA]"
              : color === "Rejected"
              ? "text-[#FF6666]"
              : "text-black"
          }`}
        />
      </div>
    </>
  );
};
export default StatusChip;


