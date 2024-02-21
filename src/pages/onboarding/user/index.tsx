import Image from "next/image";
import Progressbar from "../../../../components/Progressbar";
import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useRef, useState } from "react";
import Checkbox from "../../../../components/Checkbox";
import PasswordField from "../../../../components/password-field/PasswordFlied";
import Button from "../../../../components/Button";
import { createUser } from "@/network-request/user/createUser";
import { getCookie } from "cookies-next";
import { correctUserStateName } from "../utility/utilityMethod";

const User = () => {
  const [selectedData, setSelectedData] = useState("");
  const token = getCookie("token");
  const [profile, setProfile] = useState<any>("");
  const divRef: any = useRef(null);

  const [user, setUser] = useState<any>({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    number: "",
    username: "",
    domains: "",
    employeeId: "",
    accessLevel: "",
    designation: "",
    role: "",
    temporaryPassword: false,
    password: "",
    confirmPassword: "",
    requirePassword: false,
    sendPassword: false,
  });

  const [error, setError] = useState<any>({
    firstNameError: "",
    lastNameError: "",
    displayNameError: "",
    emailError: "",
    numberError: "",
    usernameError: "",
    domainsError: "",
    employeeIdError: "",
    accessLevelError: "",
    designationError: "",
    roleError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  console.log("user", user);

  const createUserHandler = async () => {
    // Check validation and get error status
    const hasErrors = checkValidation();
    console.log("Errors", error);
    if (hasErrors) {
      alert("Please fix the validation errors before submitting.");
      return;
    }
    const response: any = await createUser(user, token || "");
    if (response?.status === 200) {
      alert("User Added Successfully");
    } else {
      alert("Something went Wrong! Please try again later.");
    }
  };

  const checkValidation = () => {
    const newErrors = { ...error };
    let hasErrors = false;
    Object.keys(user).forEach((key) => {
      // Handle non-nested fields
      // Auto scroll up for better user experience
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
      });

      if (
        key !== "requirePassword" &&
        key !== "sendPassword" &&
        key !== "temporaryPassword"
      ) {
        if (!user[key]) {
          newErrors[key + "Error"] = `${correctUserStateName(key)} is required`;
          hasErrors = true;
        } else {
          newErrors[key + "Error"] = "";
        }
      }
    });
    setError(newErrors);
    // Return the error status
    return hasErrors;
  };

  const handleImageClick = () => {
    // Trigger file input click when the image is clicked
    const currentDivRef = divRef.current;
    if (currentDivRef) {
      const inputElement = document.createElement("input");
      inputElement.type = "file";
      inputElement.accept = "image/*"; // Add your desired file types
      inputElement.style.display = "none";
      inputElement.addEventListener("change", handleOnChangeProfile);

      // Use type assertions to ensure TypeScript understands the type
      (currentDivRef as HTMLDivElement).appendChild(inputElement);
      inputElement.click();
      (currentDivRef as HTMLDivElement).removeChild(inputElement); // Remove the input element after click
    }
  };

  const handleOnChangeProfile = (e: any) => {
    // const file: File | undefined = e.target.files?.[0]; 
    // setProfile(file);

    const file = e.target.files?.[0];
      if (file) {
        setProfile(file); // Update the profile state with the file name
        // Perform any other actions you need with the file
      }


    // if (file && divRef.current) {
    //   const currentDivRef = divRef.current as HTMLInputElement;
    //   if (currentDivRef) {
    //     currentDivRef.value = file.name;
    //     console.log("File Path", file.name);
    //   }
    // }
  };

  console.log("profile", profile);

  // const handleOnChangeProfile = (e: any) => {
  //   const filePath = e.target.files[0]; // Access the file path
  //   divRef.current.filePath = filePath;
  //   console.log("File Path", filePath);
  // };

  return (
    <>
      <div className="flex bg-[#E9EFFF]">
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold text-black">
              Create User
            </h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4 mb-20">
            <div className="mx-2">
              <Progressbar />
            </div>
            <div ref={divRef} className="relative w-fit">
              <Image
                src= {profile!=='' ? `/${profile}` : "/driverImage.svg"}
                alt="driver"
                width={100}
                height={100}
                onClick={handleImageClick}
              />
              <span className="w-6 h-6 rounded-full bg-accent3 block text-white flex justify-center items-end text-xl absolute right-2 bottom-2">
                +
              </span>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4 text-black">
                Personal Information
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="First Name"
                  value={user.firstName}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      firstName: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        firstNameError: "",
                      });
                    }
                  }}
                  errorMessage={error.firstNameError}
                />
                <Maininputfield
                  label="Last Name"
                  value={user.lastName}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      lastName: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        lastNameError: "",
                      });
                    }
                  }}
                  errorMessage={error.lastNameError}
                />
                <Maininputfield
                  label="Display Name"
                  value={user.displayName}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      displayName: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        displayNameError: "",
                      });
                    }
                  }}
                  errorMessage={error.displayNameError}
                />
                <Maininputfield
                  label="Email Address"
                  value={user.email}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      email: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        emailError: "",
                      });
                    }
                  }}
                  errorMessage={error.emailError}
                />
                <Maininputfield
                  label="Contact Number"
                  value={user.number}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      number: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        numberError: "",
                      });
                    }
                  }}
                  errorMessage={error.numberError}
                />
              </div>
              <div className="grid mt-4 grid-cols-3 gap-4 ">
                <div className="relative">
                  <Maininputfield
                    label="Username"
                    value={user.username}
                    className="w-full"
                    onChange={(e: any) => {
                      setUser({
                        ...user,
                        username: e.target.value,
                      });
                      if (e.target.value.length > 0) {
                        setError({
                          ...error,
                          usernameError: "",
                        });
                      }
                    }}
                    errorMessage={error.usernameError}
                  />
                  <span className="absolute right-[-15px] bottom-2">@</span>
                </div>
                <DropDownMap
                  label="Domains"
                  mapOption={domainsCollection}
                  selectedData={selectedData}
                  setSelectedData={selectedData}
                  value={user.domains}
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      domains: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        domainsError: "",
                      });
                    }
                  }}
                  errorMessage={error.domainsError}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4 text-black">
                Professional Information
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Employee ID"
                  value={user.employeeId}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      employeeId: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        employeeIdError: "",
                      });
                    }
                  }}
                  errorMessage={error.employeeIdError}
                />
                <Maininputfield
                  label="Access Level"
                  value={user.accessLevel}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      accessLevel: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        accessLevelError: "",
                      });
                    }
                  }}
                  errorMessage={error.accessLevelError}
                />
                <Maininputfield
                  label="Designation"
                  value={user.designation}
                  className="w-full"
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      designation: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        designationError: "",
                      });
                    }
                  }}
                  errorMessage={error.designationError}
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold mb-4 text-black">User Role</h2>

              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Role Selected"
                  mapOption={roleCollection}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                  value={user.role}
                  onChange={(e: any) => {
                    setUser({
                      ...user,
                      role: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        roleError: "",
                      });
                    }
                  }}
                  errorMessage={error.roleError}
                />
              </div>
            </div>
            <div className="mt-8">
              <Checkbox
                content="Auto create a temporary password"
                checked={user.temporaryPassword}
                className="w-full"
                onChange={(e: any) => {
                  setUser({
                    ...user,
                    temporaryPassword: e.target.checked,
                  });
                }}
              />
            </div>
            <div className="mt-4">
              <PasswordField
                state={user}
                setState={setUser}
                confirmPassword={true}
                error={error}
                setError={setError}
                errorMessageOfPassword={error.passwordError}
                errorMessageOfConfirm={error.confirmPasswordError}
              />
            </div>
            <div className="mt-4 grid gap-2">
              <Checkbox
                content="Require a password change for this user upon their initial login"
                checked={user.requirePassword}
                className="w-full"
                onChange={(e: any) => {
                  setUser({
                    ...user,
                    requirePassword: e.target.checked,
                  });
                }}
              />
              <Checkbox
                content="Send a password in email upon completion"
                checked={user.sendPassword}
                className="w-full"
                onChange={(e: any) => {
                  setUser({
                    ...user,
                    sendPassword: e.target.checked,
                  });
                }}
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                text="Cancel"
                className="!bg-transparent !text-black border border-[#e5e5e5] px-6"
              />
              <Button
                onClick={createUserHandler}
                text="Create"
                className="px-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
const domainsCollection = [
  {
    value: "blackbulltrans.com.au",
  },
  {
    value: "domain1",
  },
  {
    value: "domain2",
  },
];
const roleCollection = [
  {
    value: "Global Administrator",
  },
  {
    value: "Account Administrator",
  },
  {
    value: "Operations Administrator",
  },
  { value: "Booking Administrator" },
  {
    value: "Dispatch Administrator",
  },
  {
    value: "User Administrator",
  },
  {
    value: "Compliance Administrator",
  },
  {
    value: "Supplier Administrator",
  },
  {
    value: "Customer Administrator",
  },
  {
    value: "Custom Access",
  },
];
