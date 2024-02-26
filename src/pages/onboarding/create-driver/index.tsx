import { useEffect, useRef, useState } from "react";
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
import {
  addDriver,
  uploadSingleSingleDriverOnboardingDocuments,
} from "@/network-request/driver/driverApi";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { correctDriverStateName } from "../utility/utilityMethod";
import React from "react";
import { formatDate } from "@/utils";
import { regexOfEmail, regexOfPhoneNumber } from "../utility/commonRegex";
import { uploadOnboardingPorfile } from "@/network-request/onboarding-user";

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
    avatar: "",
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
    onboardingDocuments: {
      documentType: "ggweg",
      attachFiles: "gwegweg",
      uploadedDocuments: "ewgwegw",
      dateOfUpload: "gwegwg",
    },
    visaStatus: {
      type: "Work",
      uploadDate: "2023-01-15",
    },
    driverLicenseFront: {
      type: "Front",
      uploadDate: "2023-02-01",
    },
    driverLicenseBack: {
      type: "Back",
      uploadDate: "2023-02-05",
    },
    licenseHistory: {
      type: "History",
      uploadDate: "2023-03-01",
    },
    policeVerification: {
      type: "Verification",
      uploadDate: "2023-03-15",
    },
    passportFront: {
      type: "Front",
      uploadDate: "2023-04-01",
    },
    passportBack: {
      type: "Back",
      uploadDate: "2023-04-05",
    },
    healthInsurance: {
      type: "Insurance",
      uploadDate: "2023-05-01",
    },
    driverCertificate: {
      type: "Certificate",
      uploadDate: "2023-05-15",
    },
    fitness: {
      type: "Fitness",
      uploadDate: "2023-06-01",
    },
    drugTest: {
      type: "Drug Test",
      uploadDate: "2023-06-15",
    },
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
    onboardingDocumentsError: {
      documentType: "ggweg",
      attachFiles: "gwegweg",
      uploadedDocuments: "ewgwegw",
      dateOfUpload: "gwegwg",
    },
    visaStatusError: {
      type: "Work",
      uploadDate: "2023-01-15",
    },
    driverLicenseFrontError: {
      type: "Front",
      uploadDate: "2023-02-01",
    },
    driverLicenseBackError: {
      type: "Back",
      uploadDate: "2023-02-05",
    },
    licenseHistoryError: {
      type: "History",
      uploadDate: "2023-03-01",
    },
    policeVerificationError: {
      type: "Verification",
      uploadDate: "2023-03-15",
    },
    passportFrontError: {
      type: "Front",
      uploadDate: "2023-04-01",
    },
    passportBackError: {
      type: "Back",
      uploadDate: "2023-04-05",
    },
    healthInsuranceError: {
      type: "Insurance",
      uploadDate: "2023-05-01",
    },
    driverCertificateError: {
      type: "Certificate",
      uploadDate: "2023-05-15",
    },
    fitnessError: {
      type: "Fitness",
      uploadDate: "2023-06-01",
    },
    drugTestError: {
      type: "Drug Test",
      uploadDate: "2023-06-15",
    },
  });

  const [uploadStatus, setUploadStatus] = useState<{ [id: number]: boolean }>(
    {}
  );
  const [urls, setUrls] = useState<string[]>([]);
  const [showUploadMessage, setShowUploadMessage] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState<
    { id: number; file: File; currentDate: Date | null }[]
  >([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = React.useState("");
  const [selectedProfile, setSelectedProfile] = React.useState("");

  const handleFileChange = (setSide: any, setPreview: any) => (event: any) => {
    const selectedFile = event.target.files && event.target.files[0];
    setSide({ file: selectedFile });
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader?.result! as any);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleProfileFileChange = handleFileChange(
    setSelectedProfile,
    setProfile
  );

  const handleUploadClick: any = () => {
    if (fileInputRef.current) {
      fileInputRef?.current?.click();
    }
  };

  const combinedObject = selectedFiles.reduce(
    (accumulator: any, currentItem: any) => {
      accumulator[currentItem.id] = {
        id: currentItem.id,
        file: currentItem.file,
        currentDate: currentItem.currentDate,
      };
      return accumulator;
    },
    {}
  );

  const handleFileChanges = (
    event: React.ChangeEvent<HTMLInputElement>,
    documentId: number
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    const documentExists = documentCollectionData.find(
      (doc) => doc.id === documentId
    );
    if (file && documentExists) {
      const newSelectedFiles = [...selectedFiles];
      const existingFileIndex = newSelectedFiles.findIndex(
        (file) => file.id === documentId
      );
      const currentDate = new Date();
      if (existingFileIndex !== -1) {
        newSelectedFiles[existingFileIndex] = {
          id: documentId,
          file,
          currentDate,
        };
      } else {
        newSelectedFiles.push({ id: documentId, file, currentDate });
      }
      setSelectedFiles(newSelectedFiles);
    }
  };

  // const handleUploadFileWithId = async (id: number, combinedObject: any) => {
  //   try {
  //     const project = combinedObject[id];
  //     if (id && project?.id) {
  //       console.log("Project", { project });
  //       const file = [project?.file];
  //       const uploadDocumentResponses = await Promise.all(
  //         Object.values(file)?.map((file) =>
  //           uploadSingleSingleDriverOnboardingDocuments(file)
  //         )
  //       );
  //       console.log({ uploadDocumentResponses });
  //       const newUrls = uploadDocumentResponses
  //         ?.map((response) => response?.response)
  //         .filter(Boolean);
  //       setUrls((prevUrls) => [...prevUrls, ...newUrls]);
  //       setUploadStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
  //       setTimeout(() => {
  //         setShowUploadMessage(true);
  //       }, 4000);
  //     }
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //   }
  // };

  const handleUploadFileWithId = async (id: number, combinedObject: any) => {
    try {
      const project = combinedObject[id];
      if (id && project?.id) {
        console.log("Project", { project });
        const file = [project?.file];
        const uploadDocumentResponses = await Promise.all(
          Object.values(file)?.map((file) => uploadSingleSingleDriverOnboardingDocuments(file))
        );
        console.log({ uploadDocumentResponses });
        const newUrls = uploadDocumentResponses
          ?.map((response) => response?.response)
          .filter(Boolean);
        setUrls((prevUrls) => {
          const updatedUrls = [...prevUrls];
          updatedUrls[id - 1] = newUrls[0]; // Update the URL at the correct index
          return updatedUrls;
        });
        setUploadStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
        setTimeout(() => {
          setShowUploadMessage(true);
        }, 4000);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  console.log({ urls });
  const modifiedUrls = urls.reduce((acc: any, url, index) => {
    acc[index + 1] = url;
    return acc;
  }, []);

  console.log({ selectedFiles });
  const files = selectedFiles?.map((selectedFile) => selectedFile.file);
  console.log({ files });

  const handleSubmit = async () => {
    // Check validation and get error status
    const hasErrors = checkValidation();
    if (hasErrors) {
      alert("Please fix the validation errors before submitting.");
      return;
    }

    const [profileUrl] = await Promise.all([
      Promise.all(
        Object.values(selectedProfile)?.map((imageInfo) =>
          uploadOnboardingPorfile(imageInfo)
        )
      ),
    ]);
    console.log({ profileUrl });

    const customPayload = {
      ...driverDetails,
      avatar: profileUrl[0]?.response,
    };
    console.log({ customPayload });

    const response = await addDriver(customPayload, token || "");
    if (response?.data?.data) {
      router.push("/onboarding/driver-list");
      alert("Driver added successfully");
    } else {
      alert("Something went wrong");
    }
  };

  const handleViewDocuments = (id: number) => {
    const index = id;
    console.log("ID :", id);
    console.log("modifiedUrls", modifiedUrls);
    if (index >= 1 && index < modifiedUrls.length) {
      const url = modifiedUrls[index];
      window.open(url, "_blank");
    } else {
      console.error("URL not found for id:", id);
    }
  };

  const checkValidation = () => {
    const newErrors = { ...error };
    let hasErrors = false;
    Object.keys(driverDetails).forEach((key) => {
      if (
        key !== "avatar" &&
        key !== "driverCertificate" &&
        key !== "driverLicenseBack" &&
        key !== "driverLicenseFront" &&
        key !== "drugTest" &&
        key !== "fitness" &&
        key !== "healthInsurance" &&
        key !== "licenseHistory" &&
        key !== "onboardingDocuments" &&
        key !== "passportBack" &&
        key !== "passportFront" &&
        key !== "policeVerification" &&
        key !== "visaStatus"
      ) {
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
              // driverDetails['licenseDetails']['documents']
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
      }
    });
    setError(newErrors);
    // Return the error status
    return hasErrors;
  };

  console.log("State : ", driverDetails);
  console.log("Error", error);

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
              <span className="flex flex-row justify-center my-4">
                <span className="mb-4 text-center flex justify-center items-center">
                  <label htmlFor="profilelabel">
                    <div
                      className="w-[100px]  rounded-full h-[100px] cursor-pointer"
                      onChange={handleUploadClick}
                    >
                      {profile ? (
                        <div className="w-full h-full">
                          <Image
                            src={profile}
                            alt="driver"
                            width={100}
                            className="w-[100px] h-[100px] border rounded-full"
                            height={100}
                          />
                        </div>
                      ) : (
                        <>
                          <Image
                            src="/driverImage.svg"
                            alt="driver"
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px]"
                          />
                          <span className="w-6 h-6 rounded-full bg-accent3 block text-white flex justify-center items-end text-xl absolute right-2 bottom-6">
                            +
                          </span>
                        </>
                      )}
                    </div>
                  </label>
                  <span className="text-sm">
                    {" "}
                    <input
                      id="profilelabel"
                      type="file"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={(e) => handleProfileFileChange(e)}
                    />
                  </span>
                </span>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const inputValue = e.target.value;
                    if (!regexOfEmail.test(inputValue)) {
                      setError({
                        ...error,
                        emailError: "Please enter a valid email address",
                      });
                    } else {
                      setError({
                        ...error,
                        emailError: "", // Clear the error when the input is valid
                      });
                    }
                    setDriverDetails({
                      ...driverDetails,
                      email: e.target.value,
                    });
                  }}
                  className="w-full"
                  errorMessage={error.emailError}
                />
                <Maininputfield
                  label="Mobile"
                  value={driverDetails.mobile}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const inputValue = e.target.value;
                    if (!regexOfPhoneNumber.test(inputValue)) {
                      setError({
                        ...error,
                        mobileError: "Please enter a valid phone number",
                      });
                    } else {
                      setError({
                        ...error,
                        mobileError: "", // Clear the error when the input is valid
                      });
                    }
                    setDriverDetails({
                      ...driverDetails,
                      mobile: e.target.value,
                    });
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
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  //   const inputValue = e.target.value;

                  //   if (!regexOfPhoneNumber.test(inputValue)) {
                  //     setError({
                  //       ...error,
                  //       emergencyContactInformationError: {
                  //         ...error.emergencyContactInformationError,
                  //         contactName: "Please enter a valid phone number",
                  //       },
                  //     });
                  //   } else {
                  //     setError({
                  //       ...error,
                  //       emergencyContactInformationError: {
                  //         ...error.emergencyContactInformationError,
                  //         contactName: "",
                  //       },
                  //     });
                  //   }

                  //   setDriverDetails({
                  //     ...driverDetails,
                  //     emergencyContactInformation: {
                  //       ...driverDetails.emergencyContactInformation,
                  //       contactName: inputValue,
                  //     },
                  //   });
                  // }}
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
                  // onChange={(e: any) => {
                  //   setDriverDetails({
                  //     ...driverDetails,
                  //     emergencyContactInformation: {
                  //       ...driverDetails.emergencyContactInformation,
                  //       contactNumber: e.target.value,
                  //     },
                  //   });
                  //   if (e.target.value.length > 0) {
                  //     setError({
                  //       ...error,
                  //       emergencyContactInformationError: {
                  //         ...error.emergencyContactInformationError,
                  //         contactNumber: "",
                  //       },
                  //     });
                  //   }
                  // }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const inputValue = e.target.value;

                    if (!regexOfPhoneNumber.test(inputValue)) {
                      setError({
                        ...error,
                        emergencyContactInformationError: {
                          ...error.emergencyContactInformationError,
                          contactNumber: "Please enter a valid phone number",
                        },
                      });
                    } else {
                      setError({
                        ...error,
                        emergencyContactInformationError: {
                          ...error.emergencyContactInformationError,
                          contactNumber: "",
                        },
                      });
                    }

                    setDriverDetails({
                      ...driverDetails,
                      emergencyContactInformation: {
                        ...driverDetails.emergencyContactInformation,
                        contactNumber: inputValue,
                      },
                    });
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const inputValue = e.target.value;
                      if (!regexOfEmail.test(inputValue)) {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceEmailId:
                              "Please enter a valid email address",
                          },
                        });
                      } else {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceEmailId: "",
                          },
                        });
                      }
                      setDriverDetails({
                        ...driverDetails,
                        employmentHistory: {
                          ...driverDetails.employmentHistory,
                          referenceEmailId: e.target.value,
                        },
                      });
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const inputValue = e.target.value;
                      if (!regexOfPhoneNumber.test(inputValue)) {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceContactNumber:
                              "Please enter a valid phone number",
                          },
                        });
                      } else {
                        setError({
                          ...error,
                          employmentHistoryError: {
                            ...error.employmentHistoryError,
                            referenceContactNumber: "",
                          },
                        });
                      }
                      setDriverDetails({
                        ...driverDetails,
                        employmentHistory: {
                          ...driverDetails.employmentHistory,
                          referenceContactNumber: e.target.value,
                        },
                      });
                    }}
                    // onChange={(e: any) => {
                    //   setDriverDetails({
                    //     ...driverDetails,
                    //     employmentHistory: {
                    //       ...driverDetails.employmentHistory,
                    //       referenceContactNumber: e.target.value,
                    //     },
                    //   });
                    //   if (e.target.value.length > 0) {
                    //     setError({
                    //       ...error,
                    //       employmentHistoryError: {
                    //         ...error.employmentHistoryError,
                    //         referenceContactNumber: "",
                    //       },
                    //     });
                    //   }
                    // }}
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
                <Maindatefield
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

                <Maindatefield
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
                <FileUpload file="Choose License Document" />
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
                {documentCollectionData?.map((data, index) => {
                  return (
                    <>
                      <div className="mb-6 align-middle">
                        {data.documentType}
                      </div>
                      <div className="text-center mb-6">
                        <label className="cursor-pointer">
                          <React.Fragment>
                            {selectedFiles.find((file) => file.id === data?.id)
                              ?.file ? (
                              <div>
                                <p>
                                  {
                                    selectedFiles.find(
                                      (file) => file.id === data?.id
                                    )?.file.name
                                  }
                                </p>
                              </div>
                            ) : (
                              <span className="!w-fit m-auto bg-accent3 text-sm px-6 rounded-md mb-6 font-semibold rounded-md py-[4px] text-white">
                                Select
                              </span>
                            )}
                          </React.Fragment>
                          <input
                            type="file"
                            className="hidden"
                            accept=".doc,.docx,.pdf"
                            onChange={(e) => handleFileChanges(e, data?.id)}
                          />
                        </label>
                      </div>
                      <div>
                        {uploadStatus[data?.id] ? (
                          <p style={{ color: "green" }}>
                            {showUploadMessage ? (
                              <div className="mb-6 underline decoration-[#2B36D9] text-center">
                                <span
                                  className="cursor-pointer text-primary"
                                  onClick={() => handleViewDocuments(data?.id)}
                                >
                                  View
                                </span>
                              </div>
                            ) : (
                              <span className="!w-fit m-auto bg-accent3 cursor-pointer text-sm px-6 rounded-md mb-6 font-semibold rounded-md py-[4px] text-white">
                                Uploading...
                              </span>
                            )}
                          </p>
                        ) : (
                          <React.Fragment>
                            {selectedFiles.find((file) => file.id === data?.id)
                              ?.file ? (
                              <div>
                                <p className="!w-fit m-auto bg-accent3 cursor-pointer text-sm px-6 rounded-md mb-6 font-semibold rounded-md py-[4px] text-white">
                                  <span
                                    className="!w-fit m-auto bg-accent3 cursor-pointer text-sm px-6 rounded-md mb-6 font-semibold rounded-md py-[4px] text-white"
                                    onClick={() =>
                                      handleUploadFileWithId(
                                        data?.id,
                                        combinedObject
                                      )
                                    }
                                  >
                                    Upload
                                  </span>
                                </p>
                              </div>
                            ) : (
                              <p className="mb-6">No file Uploaded</p>
                            )}
                          </React.Fragment>
                          // <span
                          //   className="!w-fit m-auto bg-accent3 cursor-pointer text-sm px-6 rounded-md mb-6 font-semibold rounded-md py-[4px] text-white"
                          //   onClick={() =>
                          //     handleUploadFileWithId(data?.id, combinedObject)
                          //   }
                          // >
                          //   Upload
                          // </span>
                        )}
                      </div>
                      {/* <div className="mb-6 align-middle mt-3">
                        <React.Fragment>
                          {selectedFiles.find((file) => file.id === data?.id)
                            ?.file ? (
                            <div>
                              <p className="!w-fit m-auto bg-accent3 cursor-pointer text-sm px-6 rounded-md mb-6 font-semibold rounded-md py-[4px] text-white">
                                <span>Upload&nbsp;</span>
                                {
                                  selectedFiles.find(
                                    (file) => file.id === data?.id
                                  )?.file.name
                                }
                              </p>
                            </div>
                          ) : (
                            <p>No file Uploaded</p>
                          )}
                        </React.Fragment>
                      </div> */}
                      <div className="mb-6">
                        <div>
                          {selectedFiles.find(
                            (file) => file.id === data?.id
                          ) ? (
                            <div>
                              <p>
                                {selectedFiles.find(
                                  (file) => file.id === data?.id
                                )?.currentDate
                                  ? formatDate(
                                      selectedFiles.find(
                                        (file) => file.id === data?.id
                                      )?.currentDate
                                    )
                                  : "No date available"}
                              </p>
                            </div>
                          ) : (
                            <p>No date available</p>
                          )}
                        </div>
                      </div>
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
    id: 2,
    documentType: "Driver License (Front) ",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 3,
    documentType: "Driver License (Back) ",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 4,
    documentType: "License History",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 5,
    documentType: "Police Verification",
    uploadedDocument: "police-verification.pdf",
    uploadDate: "20/12/2023",
  },
  {
    id: 6,
    documentType: "Passport (Front)",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 7,
    documentType: "Passport (Back)",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 8,
    documentType: "Health Insurance",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 9,
    documentType: "Driver Certificate",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 10,
    documentType: "Fitness",
    uploadedDocument: "-",
    uploadDate: "-",
  },
  {
    id: 11,
    documentType: "Drug Test",
    uploadedDocument: "-",
    uploadDate: "-",
  },
];
