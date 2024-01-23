import React from "react";
import Checkbox from "../../../components/Checkbox";
// import {useLogin} from '../../network-request/mutation';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import InputField from "../../../components/InputField";
import Image from "next/image";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Login } from "@/network-request/types";
import { loginUser } from "@/network-request/api";

const Login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as Login,

    // validationSchema: SignupvalidationSchema,
    onSubmit: (values: Login) => {
      console.log("VALUES", { values })
      onLogin(values)
    },
  });

  const { values, errors, handleChange, handleSubmit, touched, setFieldValue, handleBlur } = formik;
  console.log({ values })

  const onLogin = React.useCallback(async (values: any) => {
    try {
      const response = await loginUser(values?.email, values?.password)
      console.log({ response })
      if (response?.token) {
        router.push("/onboarding")
      } else {
        console.log("Login credentials error")
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
        <div className=" pt-6 pl-8 absolute">
          <Image src="/logoOzi.svg" alt="logo" width={130} height={50} />
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
                Welcome Back!
              </h1>
              <p className="mt-2">
                Log in to BlackBull for instant access to your dashboard.
              </p>
              <div className="flex gap-4 flex-col mt-11">
                <InputField
                  type="text"
                  placeholder="Email address"
                  className="bg-cool-gray"
                  onChange={formik.handleChange}
                  required={"required"}
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
                  required={"required"}
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
                  text="Login"
                  className="!rounded-[30px] justify-center"
                />
              </div>
              <div>
                <span
                  className="text-[#737373] text-sm mt-10 font-medium cursor-pointer"
                  onClick={() => router.push("/signup")}
                >
                  Don&apos;t have an account?
                  <b className="text-primary font-medium"> Sign Up</b>
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
export default Login;

const Qualities = [
  {
    heading: "Efficiency Unleashed.",
    content:
      "Optimize operations with streamlined logistics solutions tailored to your business needs.",
  },
  {
    heading: "24/7 Support & Assurance",
    content:
      "Round-the-clock assistance and peace of mind for smooth logistics, always at your service.",
  },
  {
    heading: "Global Reach, Local Touch",
    content:
      "Seamlessly connect to a world of logistics possibilities while experiencing personalized, local support.",
  },
];
