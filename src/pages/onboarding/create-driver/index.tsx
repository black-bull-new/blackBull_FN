import { useEffect, useState } from "react";
import DropDownMap from "../../../../components/DropDownMap";

import Maindatefield from "../../../../components/Maindatefield";
import Maininputfield from "../../../../components/Maininputfield";
import Progressbar from "../../../../components/Progressbar";

import Image from "next/image";
import Checkbox from "../../../../components/Checkbox";
import Button from "../../../../components/Button";
import DateWithoutDropdown from "../../../../components/DateWithoutDropdown";
import FileUpload from "../../../../components/FileUpload";
import ImageUpload from "../../../../components/imageUpload/ImageUpload";
import { addDriver } from "@/network-request/driver/driverApi";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { correctDriverStateName } from "../utility/utilityMethod";

const CreateDriver = () => {
  const [selectedData, setSelectedData] = useState("");
  const token = getCookie("token");
  const router = useRouter();
  console.log("token check", { token });

  const [driverDetails, setDriverDetails] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
    nationality: "",

    currentAddress: {
      houseNumber: undefined,
      street: "",
      suburb: "",
      state: "",
      country: "",
      pincode: "",
    },
    permanentAddress: {
      houseNumber: undefined,
      street: "",
      suburb: "",
      state: "",
      country: "",
      pincode: "",
    },

    emergencyContactInformation: {
      contactName: "",
      contactNumber: "",
      relationship: "",
    },

    licenseDetails: {
      licenseNumber: "",
      licenseCardNumber: "",
      licenceType: "",
      state: "",
      dateOfIssue: "",
      expiryDate: "",
      daysLeftForRenewal: "",
      documents: "",
    },
    employmentHistory: {
      perviousEmployer: "",
      yearsOfExperience: "",
      reasonForLeaving: "",

      companyName: "",
      referenceContactName: "",
      referenceEmailId: "",
      referenceContactNumber: "",
    },
    specialDrivingLicence: {
      specialDrivingLicence: "",
    },
    onboardingDocuments: [],
  });

  const [error, setError] = useState<any>({
    firstNameError: "",
    middleNameError: "",
    lastNameError: "",
    dateOfBirthError: "",
    emailError: "",
    mobileError: "",
    nationalityError: "",

    currentAddressError: {
      houseNumber: undefined,
      street: "",
      suburb: "",
      state: "",
      country: "",
      pincode: "",
    },

    permanentAddressError: {
      houseNumber: undefined,
      street: "",
      suburb: "",
      state: "",
      country: "",
      pincode: "",
    },

    emergencyContactInformationError: {
      contactName: "",
      contactNumber: "",
      relationship: "",
    },

    licenseDetailsError: {
      licenseNumber: "",
      licenseCardNumber: "",
      licenceType: "",
      state: "",
      dateOfIssue: "",
      expiryDate: "",
      daysLeftForRenewal: "",
      documents: "",
    },
    employmentHistoryError: {
      perviousEmployer: "",
      yearsOfExperience: "",
      reasonForLeaving: "",

      companyName: "",
      referenceContactName: "",
      referenceEmailId: "",
      referenceContactNumber: "",
    },
    specialDrivingLicenceError: {
      specialDrivingLicence: "",
    },
    onboardingDocumentsError: [],
  });

  const handleSubmit = async () => {
    // Check validation and get error status
    const hasErrors = checkValidation();
    if (hasErrors) {
      alert("Please fix the validation errors before submitting.");
      return;
    }
    const response = await addDriver(driverDetails, token || "");
    if (response?.data?.data) {
      router.push("/onboarding/driver-list");
      alert("Driver added successfully");
    } else {
      alert("Something went wrong");
    }
  };

  const checkValidation = () => {
    const newErrors = { ...error };
    let hasErrors = false;
    Object.keys(driverDetails).forEach((key) => {
      if (
        typeof driverDetails[key] === "object" &&
        driverDetails[key] !== null
      ) {
        // Handle nested objects with a different logic
        Object.keys(driverDetails[key]).forEach((nestedKey) => {
          const nestedKeyPath = `${key}Error.${nestedKey}`;
          if (
            !driverDetails[key][nestedKey] ||
            driverDetails[key][nestedKey] === undefined
          ) {
            newErrors[key + "Error"][nestedKey] = `${correctDriverStateName(
              nestedKey
            )} is required in ${correctDriverStateName(key)}`;
            hasErrors = true;
          } else {
            newErrors[nestedKeyPath] = "";
          }
        });
      } else {
        // Handle non-nested fields
        // Auto scroll up for better user experience
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smooth scrolling
        });

        if (!driverDetails[key]) {
          newErrors[key + "Error"] = `${correctDriverStateName(
            key
          )} is required`;
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

  return (
    <>
      <div className="flex bg-[#E9EFFF]">
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold text-[#16161D] text-[24px]">
              Create Driver
            </h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4">
            <div className="mx-2">
              <Progressbar />
            </div>
            <div className="relative w-fit">
              <Image
                src="/driverImage.svg"
                alt="driver"
                width={100}
                height={100}
              />
              <span className="w-6 h-6 rounded-full bg-accent3 block text-black flex justify-center items-end text-xl absolute right-2 bottom-2">
                +
              </span>
            </div>
            <div>
              <h3 className=" w-full my-4 rounded-md font-semibold text-black">
                Vehicle Information
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="First Name"
                  value={driverDetails.firstName}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      firstName: e.target.value,
                    });

                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        firstNameError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.firstNameError}
                />
                <Maininputfield
                  label="Middle Name"
                  value={driverDetails.middleName}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      middleName: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        middleNameError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.middleNameError}
                />
                <Maininputfield
                  label="Last Name"
                  value={driverDetails.lastName}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      lastName: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        lastNameError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.lastNameError}
                />

                <Maindatefield
                  label="DOB"
                  value={driverDetails.dateOfBirth}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      dateOfBirth: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        dateOfBirthError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.dateOfBirthError}
                />

                <Maininputfield
                  label="Email"
                  value={driverDetails.email}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      email: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        emailError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.emailError}
                />
                <Maininputfield
                  label="Mobile"
                  value={driverDetails.mobile}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      mobile: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        mobileError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.mobileError}
                />
                <Maininputfield
                  label="Nationality"
                  value={driverDetails?.nationality}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      nationality: e.target.value,
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        nationalityError: "",
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.nationalityError}
                />

                {/* <FileUpload /> */}
              </div>
            </div>

            <div className="mb-4 mt-8">
              <h3 className=" w-full mb-4 rounded-md font-semibold text-black">
                Address Information
              </h3>
              <h4 className="text-sm font-semibold mb-4 text-black">
                Current Address
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="House Number"
                  value={driverDetails.currentAddress.houseNumber}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      currentAddress: {
                        ...driverDetails.currentAddress,
                        houseNumber: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        currentAddressError: {
                          ...error.currentAddressError,
                          houseNumber: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.currentAddressError?.houseNumber}
                  className="w-full"
                />
                <Maininputfield
                  label="Street"
                  value={driverDetails.currentAddress.street}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      currentAddress: {
                        ...driverDetails.currentAddress,
                        street: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        currentAddressError: {
                          ...error.currentAddressError,
                          street: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.currentAddressError?.street}
                  className="w-full"
                />
                <Maininputfield
                  label="Suburb"
                  value={driverDetails.currentAddress.suburb}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      currentAddress: {
                        ...driverDetails.currentAddress,
                        suburb: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        currentAddressError: {
                          ...error.currentAddressError,
                          suburb: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.currentAddressError?.suburb}
                />
                <DropDownMap
                  label="State"
                  mapOption={stateCollection}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      currentAddress: {
                        ...driverDetails.currentAddress,
                        state: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        currentAddressError: {
                          ...error.currentAddressError,
                          state: "",
                        },
                      });
                    }
                  }}
                  value={driverDetails.currentAddress.state}
                  errorMessage={error.currentAddressError?.state}
                />
                <DropDownMap
                  label="Country"
                  mapOption={countryCollection}
                  value={driverDetails.currentAddress.country}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      currentAddress: {
                        ...driverDetails.currentAddress,
                        country: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        currentAddressError: {
                          ...error.currentAddressError,
                          country: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.currentAddressError?.country}
                />
                <Maininputfield
                  label="Post Code"
                  value={driverDetails.currentAddress.pincode}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      currentAddress: {
                        ...driverDetails.currentAddress,
                        pincode: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        currentAddressError: {
                          ...error.currentAddressError,
                          pincode: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.currentAddressError?.pincode}
                />
                {/* <DropDownMap
                  label="Vehicle Type"
                  mapOption={vehicleTypeColleciton}
                  selectedData={selectedData}
                  setSelectedData={setSelectedData}
                /> */}

                {/* <FileUpload /> */}
              </div>
            </div>
            {/* <Checkbox content="Same as above" /> */}

            <div className="mb-4 mt-8">
              <h4 className="text-sm font-semibold mb-4 text-blueGrey-900">
                {" "}
                Permanent Address
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="House Number"
                  value={driverDetails.permanentAddress.houseNumber}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      permanentAddress: {
                        ...driverDetails.permanentAddress,
                        houseNumber: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        permanentAddressError: {
                          ...error.permanentAddressError,
                          houseNumber: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.permanentAddressError?.houseNumber}
                />
                <Maininputfield
                  label="Street"
                  value={driverDetails.permanentAddress.street}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      permanentAddress: {
                        ...driverDetails.permanentAddress,
                        street: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        permanentAddressError: {
                          ...error.permanentAddressError,
                          street: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.permanentAddressError?.street}
                />
                <Maininputfield
                  label="Suburb"
                  value={driverDetails.permanentAddress.suburb}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      permanentAddress: {
                        ...driverDetails.permanentAddress,
                        suburb: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        permanentAddressError: {
                          ...error.permanentAddressError,
                          suburb: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.permanentAddressError?.suburb}
                />
                <DropDownMap
                  label="State"
                  mapOption={stateCollection}
                  // selectedData={selectedData}
                  // setSelectedData={setSelectedData}
                  value={driverDetails.permanentAddress.state}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      permanentAddress: {
                        ...driverDetails.permanentAddress,
                        state: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        permanentAddressError: {
                          ...error.permanentAddressError,
                          state: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.permanentAddressError?.state}
                />
                <DropDownMap
                  label="Country"
                  mapOption={countryCollection}
                  // selectedData={selectedData}
                  // setSelectedData={setSelectedData}
                  value={driverDetails.permanentAddress.country}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      permanentAddress: {
                        ...driverDetails.permanentAddress,
                        country: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        permanentAddressError: {
                          ...error.permanentAddressError,
                          country: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.permanentAddressError?.country}
                />
                <Maininputfield
                  label="Post Code"
                  value={driverDetails.permanentAddress.pincode}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      permanentAddress: {
                        ...driverDetails.permanentAddress,
                        pincode: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        permanentAddressError: {
                          ...error.permanentAddressError,
                          pincode: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.permanentAddressError?.pincode}
                />
              </div>
            </div>

            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold text-black">
                {" "}
                Emergency Contact Information
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Contact Name"
                  value={driverDetails.emergencyContactInformation.contactName}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      emergencyContactInformation: {
                        ...driverDetails.emergencyContactInformation,
                        contactName: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        emergencyContactInformationError: {
                          ...error.emergencyContactInformationError,
                          contactName: "",
                        },
                      });
                    }
                  }}
                  errorMessage={
                    error.emergencyContactInformationError?.contactName
                  }
                  className="w-full"
                />
                <Maininputfield
                  label="Contact Number"
                  value={
                    driverDetails.emergencyContactInformation.contactNumber
                  }
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      emergencyContactInformation: {
                        ...driverDetails.emergencyContactInformation,
                        contactNumber: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        emergencyContactInformationError: {
                          ...error.emergencyContactInformationError,
                          contactNumber: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={
                    error.emergencyContactInformationError?.contactNumber
                  }
                />
                <Maininputfield
                  label="Relationship"
                  value={driverDetails.emergencyContactInformation.relationship}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      emergencyContactInformation: {
                        ...driverDetails.emergencyContactInformation,
                        relationship: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        emergencyContactInformationError: {
                          ...error.emergencyContactInformationError,
                          relationship: "",
                        },
                      });
                    }
                  }}
                  errorMessage={
                    error.emergencyContactInformationError?.relationship
                  }
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold text-black">
                {" "}
                Employment History
              </h3>
              <h4 className="text-sm font-semibold mb-4 text-black">
                Experience
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Pervious Employer"
                  value={driverDetails.employmentHistory.perviousEmployer}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      employmentHistory: {
                        ...driverDetails.employmentHistory,
                        perviousEmployer: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        employmentHistoryError: {
                          ...error.employmentHistoryError,
                          perviousEmployer: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.employmentHistoryError?.perviousEmployer}
                />
                <Maininputfield
                  label="Years Of Experience"
                  value={driverDetails.employmentHistory.yearsOfExperience}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      employmentHistory: {
                        ...driverDetails.employmentHistory,
                        yearsOfExperience: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        employmentHistoryError: {
                          ...error.employmentHistoryError,
                          yearsOfExperience: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.employmentHistoryError?.yearsOfExperience}
                />
                <Maininputfield
                  label="Reason for leaving"
                  value={driverDetails.employmentHistory.reasonForLeaving}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      employmentHistory: {
                        ...driverDetails.employmentHistory,
                        reasonForLeaving: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        employmentHistoryError: {
                          ...error.employmentHistoryError,
                          reasonForLeaving: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.employmentHistoryError?.reasonForLeaving}
                />
              </div>

              {/* commenting out for temporary as backend is not accepting referance informtion objext*/}
              <div className="mb-4 mt-8">
                <h4 className="text-sm font-semibold mb-4 text-blueGrey-900">
                  Reference Information
                </h4>

                <div className="grid grid-cols-3 gap-4">
                  <Maininputfield
                    label="Company Name"
                    value={driverDetails.employmentHistory.companyName}
                    onChange={(e: any) => {
                      setDriverDetails({
                        ...driverDetails,
                        employmentHistory: {
                          ...driverDetails.employmentHistory,
                          companyName: e.target.value,
                        },
                      });
                      if (e.target.value.length > 0) {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            companyName: "",
                          },
                        });
                      }
                    }}
                    className="w-full"
                    errorMessage={error.employmentHistoryError?.companyName}
                  />
                  <Maininputfield
                    label="Reference (Contact Name)"
                    value={driverDetails.employmentHistory.referenceContactName}
                    onChange={(e: any) => {
                      setDriverDetails({
                        ...driverDetails,
                        employmentHistory: {
                          ...driverDetails.employmentHistory,
                          referenceContactName: e.target.value,
                        },
                      });
                      if (e.target.value.length > 0) {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceContactName: "",
                          },
                        });
                      }
                    }}
                    className="w-full"
                    errorMessage={
                      error.employmentHistoryError?.referenceContactName
                    }
                  />
                  <Maininputfield
                    label="Reference (Email ID)"
                    value={driverDetails.employmentHistory.referenceEmailId}
                    onChange={(e: any) => {
                      setDriverDetails({
                        ...driverDetails,
                        employmentHistory: {
                          ...driverDetails.employmentHistory,
                          referenceEmailId: e.target.value,
                        },
                      });
                      if (e.target.value.length > 0) {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceEmailId: "",
                          },
                        });
                      }
                    }}
                    className="w-full"
                    errorMessage={
                      error.employmentHistoryError?.referenceEmailId
                    }
                  />
                  <Maininputfield
                    label="Reference (Contact Number)"
                    value={
                      driverDetails.employmentHistory.referenceContactNumber
                    }
                    onChange={(e: any) => {
                      setDriverDetails({
                        ...driverDetails,
                        employmentHistory: {
                          ...driverDetails.employmentHistory,
                          referenceContactNumber: e.target.value,
                        },
                      });
                      if (e.target.value.length > 0) {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceContactNumber: "",
                          },
                        });
                      }
                    }}
                    className="w-full"
                    errorMessage={
                      error.employmentHistoryError?.referenceContactNumber
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mb-8 mt-8 flex justify-end">
              <Button
                text="Add More Experiences"
                className="bg-accent3 px-4 !w-fit"
              />
            </div>
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold text-black">
                {" "}
                License Details
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Licence Number"
                  value={driverDetails.licenseDetails.licenseNumber}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        licenseNumber: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          licenseNumber: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.licenseDetailsError?.licenseNumber}
                />
                <Maininputfield
                  label="Licence Card Number"
                  value={driverDetails.licenseDetails.licenseCardNumber}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        licenseCardNumber: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          licenseCardNumber: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.licenseDetailsError?.licenseCardNumber}
                  className="w-full"
                />
                <DropDownMap
                  label="Licence Type"
                  mapOption={licenceTypes}
                  // selectedData={selectedData}
                  // setSelectedData={setSelectedData}
                  value={driverDetails.licenseDetails.licenceType}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        licenceType: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          licenceType: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.licenseDetailsError?.licenceType}
                />
                <DropDownMap
                  label="State of Issue"
                  mapOption={stateCollection}
                  // selectedData={selectedData}
                  // setSelectedData={setSelectedData}
                  value={driverDetails.licenseDetails.state}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        state: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          state: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.licenseDetailsError?.state}
                />
                <DateWithoutDropdown
                  label="Date Of Issue "
                  value={driverDetails.licenseDetails.dateOfIssue}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        dateOfIssue: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          dateOfIssue: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.licenseDetailsError?.dateOfIssue}
                />

                <DateWithoutDropdown
                  label="Expiry Date "
                  value={driverDetails.licenseDetails.expiryDate}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        expiryDate: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          expiryDate: "",
                        },
                      });
                    }
                  }}
                  errorMessage={error.licenseDetailsError?.expiryDate}
                />

                <Maininputfield
                  label="Days left for renewal"
                  value={driverDetails.licenseDetails.daysLeftForRenewal}
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      licenseDetails: {
                        ...driverDetails.licenseDetails,
                        daysLeftForRenewal: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        licenseDetailsError: {
                          ...error.licenseDetailsError,
                          daysLeftForRenewal: "",
                        },
                      });
                    }
                  }}
                  className="w-full"
                  errorMessage={error.licenseDetailsError?.daysLeftForRenewal}
                />
                <FileUpload file="Choose License Document " />
              </div>
            </div>

            {/* <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold text-black">
                {" "}
                Employment History
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <Maininputfield
                  label="Pervious Employer"
                  value={driverDetails.employmentHistory.perviousEmployer}
                  onChange={(e:any)=>setDriverDetails({...driverDetails, employmentHistory: {...driverDetails.employmentHistory, perviousEmployer: e.target.value}})}
                  className="w-full"
                />
                <Maininputfield
                  label="Years Of Experience"
                  value={driverDetails.employmentHistory.yearsOfExperience}
                  onChange={(e:any)=>setDriverDetails({...driverDetails, employmentHistory: {...driverDetails.employmentHistory, yearsOfExperience: e.target.value}})}  
                  className="w-full"
                />

                <Maininputfield
                  label="Reason for leaving"
                  value={driverDetails.employmentHistory.reasonForLeaving}
                  onChange={(e:any)=>setDriverDetails({...driverDetails, employmentHistory: {...driverDetails.employmentHistory, reasonForLeaving: e.target.value}})}
                  className="w-full"
                />
              </div>
            </div> */}

            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold text-black">
                {" "}
                Special Driving Licence
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <DropDownMap
                  label="Special Driving Licence"
                  // selectedData={selectedData}
                  // setSelectedData={setSelectedData}
                  value={
                    driverDetails.specialDrivingLicence.specialDrivingLicence
                  }
                  onChange={(e: any) => {
                    setDriverDetails({
                      ...driverDetails,
                      specialDrivingLicence: {
                        ...driverDetails.specialDrivingLicence,
                        specialDrivingLicence: e.target.value,
                      },
                    });
                    if (e.target.value.length > 0) {
                      setError({
                        ...error,
                        specialDrivingLicenceError: {
                          ...error.specialDrivingLicenceError,
                          specialDrivingLicence: "",
                        },
                      });
                    }
                  }}
                  mapOption={drivingLicenceCollection}
                  errorMessage={
                    error.specialDrivingLicenceError?.specialDrivingLicence
                  }
                />
              </div>
            </div>
          </div>
          <div className="bg-white mr-4 px-4 rounded-md mt-4 p-4">
            <div className="mb-4 mt-8">
              <h3 className="w-full mb-4 rounded-md font-semibold text-black">
                {" "}
                Onboarding Documents
              </h3>

              <div className="grid grid-cols-5 bg-table-header p-4 rounded-md text-black text-center mb-2 ">
                {documentCollectionHeading?.map((value, index) => {
                  return (
                    <>
                      <h4 key={index} className="font-semibold text-sm">
                        {value.heading}
                      </h4>
                    </>
                  );
                })}
              </div>
              <div className="grid grid-cols-5 p-4 rounded-md text-black text-center items-center">
                {documentCollectionData?.map((value, index) => {
                  return (
                    <>
                      <div className="mb-6">{value.documentType}</div>
                      <div className="text-center ">
                        <Button
                          text="Upload"
                          className="!w-fit m-auto bg-accent3 px-6 rounded-md mb-6 py-[4px]"
                        />
                      </div>
                      <div className="mb-6">{value.uploadedDocument}</div>
                      <div className="mb-6">{value.uploadDate}</div>
                      <div className="mb-6 flex gap-2 justify-center">
                        <Image
                          src={"/edit.svg"}
                          alt="svg"
                          width={24}
                          height={24}
                        />
                        <Image
                          src={"/trash.svg"}
                          alt="svg"
                          width={24}
                          height={24}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mb-20 mr-4">
            <ImageUpload handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateDriver;
const stateCollection = [
  {
    value: "Victoria",
  },
  {
    value: "items1",
  },
  {
    value: "items2",
  },
  {
    value: "items3",
  },
  {
    value: "items4",
  },
  {
    value: "items5",
  },
];
const countryCollection = [
  {
    value: "Australia",
  },
  {
    value: "item1",
  },
  {
    value: "item2",
  },
  {
    value: "item3",
  },
  {
    value: "item1",
  },
  {
    value: "item1",
  },
];
const licenceTypes = [
  {
    value: "HR (Heavy Rigid Licence)",
  },
  {
    value: "item1",
  },
  {
    value: "item2",
  },
];
const drivingLicenceCollection = [
  {
    value: "Dangerous Goods",
  },

  {
    value: "item1",
  },
  {
    value: "item2",
  },
];
const documentCollectionHeading = [
  {
    heading: "Document type",
  },
  {
    heading: "Attach files",
  },
  {
    heading: "Uploaded Documents",
  },
  {
    heading: "Date of upload",
  },
];
const documentCollectionData = [
  {
    id: 1,
    documentType: "Visa Status",
    uploadedDocument: "visa-status.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Driver License (Front) ",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Driver License (Back) ",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "License History",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Police Verification",
    uploadedDocument: "police-verification.pdf",
    uploadDate: "20/12/2023",
  },
  {
    documentType: "Passport (Front)",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Passport (Back)",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Health Insurance",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Driver Certificate",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Fitness",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    documentType: "Drug Test",
    uploadedDocument: "-",
    uploadDate: "-",
  },
];
