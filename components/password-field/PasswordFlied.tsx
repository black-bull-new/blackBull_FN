import Image from "next/image";
import { useState } from "react";

interface passWordField {
  createPassword?: any;
  confirmPassword?: boolean;
  createId?: any;
  confirmId?: any;
}
const PasswordField = ({
  createPassword,
  confirmPassword,
  createId,
  confirmId,
}: passWordField) => {
  const openEye = "/open-eye.svg";
  const closedEye = "/closed-eye.svg";
  const [eyeIcon, setEyeIcon] = useState(openEye);
  const [eyeIconConfirm, setEyeIconConfim] = useState(openEye);

  return (
    <>
      <div className=" grid grid-cols-3 gap-4 pt-[6px] pb-[6px] rounded-md h-fit leading-none">
        <div className="bg-[#EFF2F3] py-2 px-1 rounded-md relative">
          <label className="text-[12px] block pl-[15px] text-[#57727E] leading-none">
            Create Password
          </label>
          <input
            type={eyeIcon === openEye ? "password" : "text"}
            id={createId}
            className="pl-[15px] bg-[#EFF2F3] outline-none w-[300px] placeholder:text-[12px] text-[12px] font-medium leading-none"
            placeholder={"Enter password"}
          />
          <Image
            src={eyeIcon}
            alt="eye"
            width={24}
            height={24}
            className="absolute right-2 bottom-2 cursor-pointer"
            onClick={() =>
              eyeIcon === openEye ? setEyeIcon(closedEye) : setEyeIcon(openEye)
            }
          />
        </div>
        {confirmPassword && (
          <div className="bg-[#EFF2F3] py-2 px-1 rounded-md relative">
            <label className="text-[12px] block pl-[15px] text-[#57727E] leading-none">
              Confirm Password
            </label>
            <input
              type={eyeIconConfirm === openEye ? "password" : "text"}
              id={confirmId}
              className="pl-[15px] bg-[#EFF2F3] outline-none w-[300px] placeholder:text-[12px] text-[12px] font-medium leading-none"
              placeholder={"Confirm Password"}
            />
            <Image
              src={eyeIconConfirm}
              alt="eye"
              width={24}
              height={24}
              className="absolute right-2 bottom-2 cursor-pointer"
              onClick={() =>
                eyeIconConfirm === openEye
                  ? setEyeIconConfim(closedEye)
                  : setEyeIconConfim(openEye)
              }
            />
          </div>
        )}
      </div>
      <div className="flex gap-4 mt-2">
        <div className="flex">
          <Image src={"/green-check.svg"} alt="" width={20} height={20} />
          <span className="text-sm">Minimum 6 characters</span>
        </div>
        <div className="flex">
          <Image src={"/red-cross.svg"} alt="" width={20} height={20} />
          <span className="text-sm text-coolGrey-500">One number</span>
        </div>
        <div className="flex">
          <Image src={"/red-cross.svg"} alt="" width={20} height={20} />
          <span className="text-sm text-coolGrey-500">
            One uppercase letter
          </span>
        </div>
        <div className="flex">
          <Image src={"/green-check.svg"} alt="" width={20} height={20} />
          <span className="text-sm">One special character</span>
        </div>
      </div>
    </>
  );
};
export default PasswordField;
