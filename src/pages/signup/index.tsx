import React from "react";
import Checkbox from "../../../components/Checkbox";
// import {useLogin} from '../../network-request/mutation';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import InputField from "../../../components/InputField";
import Image from "next/image";
import Button from "../../../components/Button";
import { useRegister } from "@/network-request/mutation";
import { SignupvalidationSchema } from "../../../components/fomsValidation";
import { useFormik } from "formik";
import { useRouter } from "next/router";
const SignUp = () => {
  const { mutate } = useRegister();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: SignupvalidationSchema,
    onSubmit: (values: any) => {
      const { username, email, password } = values;
      mutate(
        { username, email, password },
        {
          onSuccess: (data: any) => {
            if (data.success) {
              console.log("data", { data });
              setTimeout(() => {
                window.location.href = "/signin";
              }, 2000);
            } else {
              console.log(data.message || "Login Failed");
            }
          },
          onError: (data: any) => {
            console.log("Something Went Wrong");
          },
        }
      );
    },
  });
  const [visibel, SetVisible] = React.useState(false);
  const isValidVisibility = formik.dirty && formik.isValid;

  return (
    <React.Fragment>
      <div>
        <div className=" pt-4 pl-6 absolute">
          <Image src="/logoOzi.svg" alt="logo" width={150} height={150} />
        </div>
        <div className="grid grid-cols-2 items-center">
          <form
            onSubmit={
              isValidVisibility
                ? formik.handleSubmit
                : (e) => e.preventDefault()
            }
            method="POST"
          >
            <div className="max-w-[440px] ml-auto mr-auto text-center pt-10">
              <h1 className="font-bold text-3xl tracking-wide">
                Join the Journey
              </h1>
              <p className="mt-2">
                Your route to hassle-free logistics begins here.
              </p>
              <div className="flex gap-2 flex-col mt-11">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/image.svg"}
                    alt="userIcon"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-left font-semibold">
                    Personal Information
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap">
                  <InputField
                    type="text"
                    placeholder="First Name"
                    className="bg-cool-gray"
                    name={"firstName"}
                    id={"firstName"}
                    required={"required"}
                    value={""}
                    onChange={function (e: any): void {
                      throw new Error("Function not implemented.");
                    }}
                    alt={""}
                    src={""}
                    svgWidth={0}
                    svgHeight={0}
                  />
                  <InputField
                    type="text"
                    placeholder="Last Name"
                    className="bg-cool-gray"
                    name={"lastName"}
                    id={"lastName"}
                    required={"required"}
                    value={""}
                    onChange={function (e: any): void {
                      throw new Error("Function not implemented.");
                    }}
                    alt={""}
                    src={""}
                    svgWidth={0}
                    svgHeight={0}
                  />
                </div>

                <InputField
                  required={"required"}
                  type="text"
                  placeholder="Email"
                  className="bg-cool-gray"
                  name={"email"}
                  id={""}
                  src=""
                  alt=""
                  svgWidth={0}
                  svgHeight={0}
                  value={""}
                  onChange={function (e: any): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <InputField
                  type={"number"}
                  placeholder="Contact Number"
                  className="bg-cool-gray"
                  name={"number"}
                  id={"number"}
                  src=""
                  alt=""
                  svgWidth={0}
                  required={"required"}
                  svgHeight={0}
                  value={""}
                  onChange={function (e: any): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
              <div className="flex gap-2 flex-col mt-4">
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/image.svg"}
                    alt="userIcon"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-left font-semibold">
                    Personal Information
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap">
                  <InputField
                    type="text"
                    placeholder="Designation"
                    className="bg-cool-gray"
                    name={"designation"}
                    id={"designation"}
                    required={"required"}
                    value={""}
                    onChange={function (e: any): void {
                      throw new Error("Function not implemented.");
                    }}
                    alt={""}
                    src={""}
                    svgWidth={0}
                    svgHeight={0}
                  />
                  <InputField
                    type="text"
                    placeholder="Company Name"
                    className="bg-cool-gray"
                    name={"company"}
                    id={"company"}
                    required={"required"}
                    value={""}
                    onChange={function (e: any): void {
                      throw new Error("Function not implemented.");
                    }}
                    alt={""}
                    src={""}
                    svgWidth={0}
                    svgHeight={0}
                  />
                </div>

                <InputField
                  required={"required"}
                  type="text"
                  placeholder="Email"
                  className="bg-cool-gray"
                  name={"email"}
                  id={""}
                  src=""
                  alt=""
                  svgWidth={0}
                  svgHeight={0}
                  value={""}
                  onChange={function (e: any): void {
                    throw new Error("Function not implemented.");
                  }}
                />

                <InputField
                  type={"text"}
                  placeholder="Address"
                  className="bg-cool-gray"
                  name={"address"}
                  id={"address"}
                  src=""
                  alt=""
                  svgWidth={0}
                  required={"required"}
                  svgHeight={0}
                  value={""}
                  onChange={function (e: any): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>

              <div className="mt-8 mb-4">
                <Button
                  visible={isValidVisibility}
                  text="Get Started"
                  className="!rounded-[30px]  justify-center"
                  onClick={() => router.push("/subscription-plan")}
                />
              </div>
              <div>
                <span className="text-[#737373] text-sm mt-10 font-medium cursor-pointer ">
                  Already have an account?
                  <b
                    className="text-black font-medium text-primary"
                    onClick={() => router.push("/login")}
                  >
                    {" "}
                    Login
                  </b>
                </span>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <Image
              src="/Background.svg"
              alt="logo"
              width={700}
              height={700}
              className="w-full h-screen"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SignUp;
