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
import { Register } from "@/network-request/types";
import { createUser } from "@/network-request/api";
const SignUp = () => {
  const { mutate } = useRegister();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      designation: "",
      companyName: "",
      profEmail: "",
      address: "",
      password: "",
    } as Register,

    // validationSchema: SignupvalidationSchema,
    onSubmit: (values: Register) => {
      console.log("VALUES", { values })
      onSignup(values)
      // onDriver(values);
    },
  });

  const { values, errors, handleChange, handleSubmit, touched, setFieldValue, handleBlur } = formik;
  console.log({ values })

  const onSignup = React.useCallback(async (values: any) => {
    try {
      const response = await createUser(values)
      const result = response?.data
      console.log({ result })
      if (result) {
        router.push("/login")
      }
    } catch (error: any) {
      console.log({ error })
    }
  }, [])

  const [visibel, SetVisible] = React.useState(false);
  const isValidVisibility = formik.dirty && formik.isValid;

  return (
    <React.Fragment>
      <div>
        <div className=" pt-4 pl-6 absolute">
          <Image src="/logoOzi.svg" alt="logo" width={150} height={150} />
        </div>
        <div className="grid grid-cols-2 items-center">
          <form onSubmit={handleSubmit}>
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
                    onBlur={handleBlur}
                    value={values?.firstName}
                    onChange={handleChange}
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
                    onBlur={handleBlur}
                    required={"required"}
                    value={values?.lastName}
                    onChange={handleChange}
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
                  id={"email"}
                  src=""
                  alt=""
                  svgWidth={0}
                  svgHeight={0}
                  onBlur={handleBlur}
                  value={values?.email}
                  onChange={handleChange}
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
                  // required={"required"}
                  svgHeight={0}
                  value={values?.number}
                  onChange={handleChange}
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
                    // required={"required"}
                    value={values?.designation}
                    onChange={handleChange}
                    alt={""}
                    src={""}
                    svgWidth={0}
                    svgHeight={0}
                  />
                  <InputField
                    type="text"
                    placeholder="Company Name"
                    className="bg-cool-gray"
                    name={"companyName"}
                    id={"companyName"}
                    // required={"required"}
                    value={values?.companyName}
                    onChange={handleChange}
                    alt={""}
                    src={""}
                    svgWidth={0}
                    svgHeight={0}
                  />
                </div>

                <InputField
                  // required={"required"}
                  type="text"
                  placeholder="Email"
                  className="bg-cool-gray"
                  name={"profEmail"}
                  id={"profEmail"}
                  src=""
                  alt=""
                  svgWidth={0}
                  svgHeight={0}
                  value={values?.profEmail}
                  onChange={handleChange}
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
                  // required={"required"}
                  svgHeight={0}
                  value={values?.address}
                  onChange={handleChange}
                />
              </div>
              <InputField
                type={visibel ? "text" : "password"}
                placeholder="password"
                className="bg-cool-gray"
                onChange={handleChange}
                required={"required"}
                onBlur={handleBlur}
                value={values?.password}
                hasError={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                name={"password"}
                id={""}
                src="/lock.svg"
                alt="lock"
                svgWidth={16}
                svgHeight={16}
                onClick={() => SetVisible(!visibel)}
                isvisibel={visibel}
              />

              <div className="mt-8 mb-4">
                <Button text="Get Started" type="submit" className="!w-fit text-white mt-4" />
                {/* <Button
                  // visible={isValidVisibility}
                  type="submit"
                  text="Get Started"
                  className="!rounded-[30px]  justify-center"
                //onClick={() => router.push("/login")}
                /> */}
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
    </React.Fragment >
  );
};
export default SignUp;
