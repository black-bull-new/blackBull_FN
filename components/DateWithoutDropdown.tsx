import Image from "next/image";

const DateWithoutDropdown = (props: any) => {
  return (
    <>
      <div>
        <div className="bg-[#EFF2F3]  pt-[6px] pb-[6px] rounded-md  relative flex gap-2 pl-[10px] h-fit">
          <Image
            src="/calendarInput.svg"
            alt="calender"
            width={18}
            height={18}
          />
          <div>
            <label
              className="text-[12px] block text-[#57727E] leading-none"
              htmlFor={props.id}
            >
              {props.label}
            </label>

            <input
              type="text"
              id={props.id}
              className="bg-[#EFF2F3] outline-none  placeholder:text-[12px] text-[12px] font-medium leading-none"
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DateWithoutDropdown;
