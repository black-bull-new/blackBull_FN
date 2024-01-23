import Image from "next/image";
import { useState } from "react";
const StatusChip = (props: any) => {
  const [color, setColor] = useState("");
  const toggleColor = (value: any) => {
    setColor(value.target.value);
  };
  console.log(color);
  const options = [
    { option: "Select", value: "Select" },
    { option: "Approved", value: "Approved" },
    { option: "Under Review", value: "Under Review" },
    { option: "Rejected", value: "Rejected" },
  ];
  return (
    <>
      <div className={`relative ${props.className}`}>
        <select
          name="status"
          id="status"
          className={`focus:outline-none appearance-none pt-[5px] pb-[7px] text-center pl-4 pr-8 rounded-full text-white ${
            color === "Approved"
              ? "bg-[#2DD36F]"
              : color === "Under Review"
              ? "bg-[#3DC2FF]"
              : color === "Rejected"
              ? "bg-[#EB445A]"
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
          className="absolute right-2 top-[10px]"
        />
      </div>
    </>
  );
};
export default StatusChip;
