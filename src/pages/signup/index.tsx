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
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
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
                New User Register
              </h1>
              <p className="mt-2">
                Sign in using your email and temporary password to set up your
                account.
              </p>
              <div className="flex gap-4 flex-col mt-11">
                <InputField
                  type="text"
                  placeholder="User Name"
                  className="bg-cool-gray"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  hasError={
                    formik.touched.username && formik.errors.username
                      ? true
                      : false
                  }
                  name={"username"}
                  id={""}
                  required={"required"}
                  src="/mail.svg"
                  alt="mail"
                  svgWidth={16}
                  svgHeight={16}
                />
                {formik.touched.username && formik?.errors.username ? (
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      marginTop: "-10px",
                      color: "red",
                    }}
                  >
                    {formik?.errors?.username as React.ReactNode}
                  </div>
                ) : null}
                <InputField
                  required={"required"}
                  type="text"
                  placeholder="Email address"
                  className="bg-cool-gray"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name={"email"}
                  hasError={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                  id={""}
                  src="/mail.svg"
                  alt="mail"
                  svgWidth={16}
                  svgHeight={16}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      marginTop: "-10px",
                      color: "red",
                    }}
                  >
                    {formik.errors.email as React.ReactNode}
                  </div>
                ) : null}
                <InputField
                  type={visibel ? "text" : "password"}
                  placeholder="password"
                  className="bg-cool-gray"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
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
                  required={"required"}
                  svgHeight={16}
                  onClick={() => SetVisible(!visibel)}
                  isvisibel={visibel}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: "12px",
                      marginTop: "-10px",
                      color: "red",
                    }}
                  >
                    {formik.errors.password as React.ReactNode}
                  </div>
                ) : null}
                <p className="text-right text-[#0F172A] font-semibold text-sm ">
                  <span className="cursor-pointer">Forgot Password?</span>
                </p>
              </div>
              <div>
                <Checkbox content="Remember Me" />
              </div>

              <div className="mt-8 mb-4">
                <Button
                  visible={isValidVisibility}
                  text="Proceed to Register"
                  className="!rounded-[30px]  justify-center"
                />
              </div>
              <div>
                <span className="text-[#737373] text-sm mt-10 font-medium cursor-pointer " onClick={()=>router.push("/signin")}>
                  Already joined?{" "}
                  <b className="text-black font-medium">Login now</b>
                </span>
              </div>
            </div>
          </form>
          <div className="flex justify-center">
            <Image
              src="/Background.png"
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
