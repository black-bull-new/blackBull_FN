import Image from "next/image";

import Progressbar from "../../../../components/Progressbar";
import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useState } from "react";
import Button from "../../../../components/Button";
import FileUpload from "../../../../components/FileUpload";
import { addCustomer } from "@/network-request/customer/customerApi";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { correctCustomerStateName } from "../utility/utilityMethod";
import { regexOfPhoneNumber } from "../utility/commonRegex";

const AddCustomer = () => {
  const [selectedData, setSelectedData] = useState("");
  const token = getCookie("token");
  const router = useRouter();

  const [customer, setCustomer] = useState<any>({
    companyName: "",
    tradingName: "",
    abnNumber: "",
    legalName: "",
    websiteAddress: "",
    firstName: "",
    lastName: "",
    designation: "",

    companyAddress: {
      street1: "",
      street2: "",
      suburb: "",
      state: "",
      country: "",
      postCode: "",
    },

    accountPayble: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      accountsPaybleEmail: "",
    },

    accountReceivable: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      accountsReceivableEmail: "",
    },
    opreations: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      opreationsEmail: "",
    },
    compliance: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      complianceEmail: "",
    },
    admin: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      adminEmail: "",
    },
    invoicePrefrences: "",
    invoiceCommunicationPrefrences: "",
    companySuiteDetails: {
      designation: "",
      directorEmailAddress: "",
      directorContactNumber: "",
    },
    payment: {
      accountName: "",
      bankName: "",
      bsb: "",
      accountNumber: "",
    },
    paymentTerm: "",
    warehouseLocation: {
      street1: "",
      street2: "",
      suburb: "",
      state: "",
      country: "",
      postCode: "",
    },
    document: "",
  });

  const [error, setError] = useState<any>({
    companyNameError: "",
    tradingNameError: "",
    abnNumberError: "",
    legalNameError: "",
    websiteAddressError: "",
    firstNameError: "",
    lastNameError: "",
    designationError: "",

    companyAddressError: {
      street1: "",
      street2: "",
      suburb: "",
      state: "",
      country: "",
      postCode: "",
    },

    accountPaybleError: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      accountsPaybleEmail: "",
    },

    accountReceivableError: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      accountsReceivableEmail: "",
    },
    opreationsError: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      opreationsEmail: "",
    },
    complianceError: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      complianceEmail: "",
    },
    adminError: {
      contactPerson: "",
      designation: "",
      contactNumber: "",
      adminEmail: "",
    },
    invoicePrefrencesError: "",
    invoiceCommunicationPrefrencesError: "",
    companySuiteDetailsError: {
      designation: "",
      directorEmailAddress: "",
      directorContactNumber: "",
    },
    paymentError: {
      accountName: "",
      bankName: "",
      bsb: "",
      accountNumber: "",
    },
    paymentTermError: "",
    warehouseLocationError: {
      street1: "",
      street2: "",
      suburb: "",
      state: "",
      country: "",
      postCode: "",
    },
    documentError: "",
  });

  const handleSubmit = async () => {
    checkValidation();
    // const response :any = await addCustomer(customer, token || "")

    // if(response?.status === 200){
    //     alert('Customer Added Successfully')
    // }else{
    //     alert('Something went Wrong! Please try again later.')
    // }
  };

  const checkValidation = () => {
    const newErrors = { ...error };
    let hasErrors = false;
    Object.keys(customer).forEach((key) => {
      if (typeof customer[key] === "object" && customer[key] !== null) {
        // Handle nested objects with a different logic
        Object.keys(customer[key]).forEach((nestedKey) => {
          const nestedKeyPath = `${key}Error.${nestedKey}`;
          if (
            !customer[key][nestedKey] ||
            customer[key][nestedKey] === undefined
          ) {
            newErrors[key + "Error"][nestedKey] = `${correctCustomerStateName(
              nestedKey
            )} is required in ${correctCustomerStateName(key)}`;
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

        if (!customer[key]) {
          newErrors[key + "Error"] = `${correctCustomerStateName(
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

  console.log("State", customer);
  console.log("Error", error);

  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        {/* <div className="sticky top-0">
          <Sidebar />
        </div> */}
        <div className="ml-[316px] w-full mt-4">
          <div className="bg-white mr-4 flex justify-between items-center rounded-md">
            <h2 className=" w-full p-4 rounded-md font-bold text-[#16161D] text-[24px]">
              Add Customer
            </h2>
            <div className="h-8 w-8 flex justify-center cursor-pointer text-2xl items-center bg-blueGrey-100 rounded-full mr-4">
              <span className="mt-[-2px] ml-[2px] text-[#292D32] rotate-45">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 px-4  mt-4 p-4 rounded-md">
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
              <span className="w-6 h-6 rounded-full bg-accent3  text-white flex justify-center items-end text-xl absolute right-2 bottom-2">
                +
              </span>
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4 text-[#151515] text-[18px]">
              Company Information
            </h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Company Name"
                value={customer.companyName}
                onChange={(e: any) => {
                  setCustomer({ ...customer, companyName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, companyNameError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.companyNameError}
              />
              <Maininputfield
                label="Trading Name"
                vsalue={customer.tradingName}
                onChange={(e: any) => {
                  setCustomer({ ...customer, tradingName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, tradingNameError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.tradingNameError}
              />
              <Maininputfield
                label="ABN"
                value={customer.abnNumber}
                onChange={(e: any) => {
                  // regex for only accept integer values
                  const regex = /^-?\d+$/;
                  if (!regex.test(e.target.value)) {
                    setError({
                      ...error,
                      abnNumberError: "Please enter only numbers",
                    });
                  } else {
                    setCustomer({
                      ...customer,
                      abnNumber:
                        e.target.value === ""
                          ? undefined
                          : Number(e.target.value),
                    });
                    if (e.target.value.length > 0) {
                      setError({ ...error, abnNumberError: "" });
                    }
                  }
                }}
                className="w-full"
                errorMessage={error.abnNumberError}
              />
              <Maininputfield
                label="Legal Name"
                value={customer.legalName}
                onChange={(e: any) => {
                  setCustomer({ ...customer, legalName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, legalNameError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.legalNameError}
              />
              <Maininputfield
                label="Website Address"
                value={customer.websiteAddress}
                onChange={(e: any) => {
                  setCustomer({ ...customer, websiteAddress: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, websiteAddressError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.websiteAddressError}
              />
              {/* <Maininputfield
                label="Customer ID"
                value={customer.customerId}
                className="w-full"
              /> */}
              <Maininputfield
                label="First Name"
                value={customer.firstName}
                onChange={(e: any) => {
                  setCustomer({ ...customer, firstName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, firstNameError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.firstNameError}
              />
              <Maininputfield
                label="Last Name"
                value={customer.lastName}
                onChange={(e: any) => {
                  setCustomer({ ...customer, lastName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, lastNameError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.lastNameError}
              />
              <Maininputfield
                label="Designation"
                value={customer.designation}
                onChange={(e: any) => {
                  setCustomer({ ...customer, designation: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, designationError: "" });
                  }
                }}
                className="w-full"
                errorMessage={error.designationError}
              />
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4 text-[#151515] text-[18px]">
              Company Address
            </h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Street 1"
                value={customer.companyAddress.street1}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companyAddress: {
                      ...customer.companyAddress,
                      street1: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companyAddressError: {
                        ...error.companyAddressError,
                        street1: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.companyAddressError?.street1}
              />
              <Maininputfield
                label="Street 2"
                value={customer.companyAddress.street2}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companyAddress: {
                      ...customer.companyAddress,
                      street2: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companyAddressError: {
                        ...error.companyAddressError,
                        street2: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.companyAddressError?.street2}
              />
              <Maininputfield
                label="Suburb"
                value={customer.companyAddress.suburb}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companyAddress: {
                      ...customer.companyAddress,
                      suburb: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companyAddressError: {
                        ...error.companyAddressError,
                        suburb: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.companyAddressError?.suburb}
              />
              <DropDownMap
                label="State"
                mapOption={stateCollection}
                value={customer.companyAddress.state}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companyAddress: {
                      ...customer.companyAddress,
                      state: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companyAddressError: {
                        ...error.companyAddressError,
                        state: "",
                      },
                    });
                  }
                }}
                errorMessage={error.companyAddressError?.state}
                // selectedData={selectedData}
                // setSelectedData={setSelectedData}
              />
              <DropDownMap
                label="Country"
                mapOption={countryCollection}
                value={customer.companyAddress.country}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companyAddress: {
                      ...customer.companyAddress,
                      country: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companyAddressError: {
                        ...error.companyAddressError,
                        country: "",
                      },
                    });
                  }
                }}
                errorMessage={error.companyAddressError?.country}
                // selectedData={selectedData}
                // setSelectedData={setSelectedData}
              />
              <Maininputfield
                label="Post Code"
                value={customer.companyAddress.postCode}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companyAddress: {
                      ...customer.companyAddress,
                      postCode: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companyAddressError: {
                        ...error.companyAddressError,
                        postCode: "",
                      },
                    });
                  }
                }}
                className="w-full"
                validationSchema={"test"}
                errorMessage={error.companyAddressError?.postCode}
              />
            </div>
          </div>
          <div className="bg-white mr-4 mt-4 rounded-md">
            <h2 className="font-semibold p-4 text-[#151515] text-[18px]">
              Contact Information
            </h2>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Accounts Payable
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.accountPayble.contactPerson}
                onChange={(e: any) => {
                  if (!regexOfPhoneNumber.test(e.target.value)) {
                    setError({
                      ...error,
                      accountPaybleError: {
                        ...error.accountPaybleError,
                        contactPerson:
                          "Please enter your 10 digit phone number",
                      },
                    });
                  }
                  setCustomer({
                    ...customer,
                    accountPayble: {
                      ...customer.accountPayble,
                      contactPerson: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      accountPaybleError: {
                        ...error.accountPaybleError,
                        contactPerson: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.accountPaybleError?.contactPerson}
              />
              <Maininputfield
                label="Designation"
                value={customer.accountPayble.designation}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    accountPayble: {
                      ...customer.accountPayble,
                      designation: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      accountPaybleError: {
                        ...error.accountPaybleError,
                        designation: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.accountPaybleError?.designation}
              />
              <Maininputfield
                label="Contact Number"
                value={customer.accountPayble.contactNumber}
                onChange={(e: any) => {
                  const phoneNumber = e.target.value;
                  // Check if the entered value is a valid 10-digit phone number
                  if (!regexOfPhoneNumber.test(phoneNumber)) {
                    setError((prevError: any) => ({
                      ...prevError,
                      accountPaybleError: {
                        ...prevError.accountPaybleError,
                        contactNumber:
                          "Please enter a valid 10-digit phone number",
                      },
                    }));
                  } else {
                    setError((prevError: any) => ({
                      ...prevError,
                      accountPaybleError: {
                        ...prevError.accountPaybleError,
                        contactNumber: "", // Clear the error if the input is valid
                      },
                    }));
                  }
                  setCustomer((prevCustomer: any) => ({
                    ...prevCustomer,
                    accountPayble: {
                      ...prevCustomer.accountPayble,
                      contactNumber: phoneNumber,
                    },
                  }));
                }}
                className="w-full"
                errorMessage={error.accountPaybleError?.contactNumber}
              />

              <Maininputfield
                label="Accounts Payable Email"
                value={customer.accountPayble.accountsPaybleEmail}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    accountPayble: {
                      ...customer.accountPayble,
                      accountsPaybleEmail: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      accountPaybleError: {
                        ...error.accountPaybleError,
                        accountsPaybleEmail: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.accountPaybleError?.accountsPaybleEmail}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Accounts Receivable
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.accountReceivable.contactPerson}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    accountReceivable: {
                      ...customer.accountReceivable,
                      contactPerson: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      accountReceivableError: {
                        ...error.accountReceivableError,
                        contactPerson: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.accountReceivableError?.contactPerson}
              />
              <Maininputfield
                label="Designation"
                value={customer.accountReceivable.designation}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    accountReceivable: {
                      ...customer.accountReceivable,
                      designation: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      accountReceivableError: {
                        ...error.accountReceivableError,
                        designation: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.accountReceivableError?.designation}
              />
              <Maininputfield
                label="Contact Number"
                value={customer.accountReceivable.contactNumber}
                onChange={(e: any) => {
                  const phoneNumber = e.target.value;
                  // Check if the entered value is a valid 10-digit phone number
                  if (!regexOfPhoneNumber.test(phoneNumber)) {
                    setError((prevError: any) => ({
                      ...prevError,
                      accountReceivableError: {
                        ...prevError.accountReceivableError,
                        contactNumber:
                          "Please enter a valid 10-digit phone number",
                      },
                    }));
                  } else {
                    setError((prevError: any) => ({
                      ...prevError,
                      accountReceivableError: {
                        ...prevError.accountReceivableError,
                        contactNumber: "", // Clear the error if the input is valid
                      },
                    }));
                  }
                  setCustomer((prevCustomer: any) => ({
                    ...prevCustomer,
                    accountReceivable: {
                      ...prevCustomer.accountReceivable,
                      contactNumber: phoneNumber,
                    },
                  }));
                }}
                className="w-full"
                errorMessage={error.accountReceivableError?.contactNumber}
              />

              <Maininputfield
                label="Accounts Receivable Email"
                value={customer.accountReceivable.accountsReceivableEmail}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    accountReceivable: {
                      ...customer.accountReceivable,
                      accountsReceivableEmail: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      accountReceivableError: {
                        ...error.accountReceivableError,
                        accountsReceivableEmail: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={
                  error.accountReceivableError?.accountsReceivableEmail
                }
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Operations
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.opreations.contactPerson}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    opreations: {
                      ...customer.opreations,
                      contactPerson: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      opreationsError: {
                        ...error.opreationsError,
                        contactPerson: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.opreationsError?.contactPerson}
              />
              <Maininputfield
                label="Designation"
                value={customer.opreations.designation}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    opreations: {
                      ...customer.opreations,
                      designation: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      opreationsError: {
                        ...error.opreationsError,
                        designation: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.opreationsError?.designation}
              />
              <Maininputfield
                label="Contact Number"
                value={customer.opreations.contactNumber}
                onChange={(e: any) => {
                  const phoneNumber = e.target.value;
                  // Check if the entered value is a valid 10-digit phone number
                  if (!regexOfPhoneNumber.test(phoneNumber)) {
                    setError((prevError: any) => ({
                      ...prevError,
                      opreationsError: {
                        ...prevError.opreationsError,
                        contactNumber:
                          "Please enter a valid 10-digit phone number",
                      },
                    }));
                  } else {
                    setError((prevError: any) => ({
                      ...prevError,
                      opreationsError: {
                        ...prevError.opreationsError,
                        contactNumber: "", // Clear the error if the input is valid
                      },
                    }));
                  }
                  setCustomer((prevCustomer: any) => ({
                    ...prevCustomer,
                    opreations: {
                      ...prevCustomer.opreations,
                      contactNumber: phoneNumber,
                    },
                  }));
                }}
                className="w-full"
                errorMessage={error.opreationsError?.contactNumber}
              />

              <Maininputfield
                label="Operations Email"
                value={customer.opreations.opreationsEmail}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    opreations: {
                      ...customer.opreations,
                      opreationsEmail: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      opreationsError: {
                        ...error.opreationsError,
                        opreationsEmail: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.opreationsError?.opreationsEmail}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Compliance
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.compliance.contactPerson}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    compliance: {
                      ...customer.compliance,
                      contactPerson: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      complianceError: {
                        ...error.complianceError,
                        contactPerson: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.complianceError?.contactPerson}
              />
              <Maininputfield
                label="Designation"
                value={customer.compliance.designation}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    compliance: {
                      ...customer.compliance,
                      designation: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      complianceError: {
                        ...error.complianceError,
                        designation: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.complianceError?.designation}
              />
              <Maininputfield
                label="Contact Number"
                value={customer.compliance.contactNumber}
                onChange={(e: any) => {
                  const phoneNumber = e.target.value;
                  // Check if the entered value is a valid 10-digit phone number
                  if (!regexOfPhoneNumber.test(phoneNumber)) {
                    setError((prevError: any) => ({
                      ...prevError,
                      complianceError: {
                        ...prevError.complianceError,
                        contactNumber:
                          "Please enter a valid 10-digit phone number",
                      },
                    }));
                  } else {
                    setError((prevError: any) => ({
                      ...prevError,
                      complianceError: {
                        ...prevError.complianceError,
                        contactNumber: "", // Clear the error if the input is valid
                      },
                    }));
                  }
                  setCustomer((prevCustomer: any) => ({
                    ...prevCustomer,
                    compliance: {
                      ...prevCustomer.compliance,
                      contactNumber: phoneNumber,
                    },
                  }));
                }}
                className="w-full"
                errorMessage={error.complianceError?.contactNumber}
              />

              <Maininputfield
                label="Compliance Email"
                value={customer.compliance.complianceEmail}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    compliance: {
                      ...customer.compliance,
                      complianceEmail: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      complianceError: {
                        ...error.complianceError,
                        complianceEmail: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.complianceError?.complianceEmail}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Admin
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Contact Person"
                value={customer.admin.contactPerson}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    admin: { ...customer.admin, contactPerson: e.target.value },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      adminError: {
                        ...error.adminError,
                        contactPerson: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.adminError?.contactPerson}
              />
              <Maininputfield
                label="Designation"
                value={customer.admin.designation}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    admin: { ...customer.admin, designation: e.target.value },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      adminError: {
                        ...error.adminError,
                        designation: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.adminError?.designation}
              />
              <Maininputfield
                label="Contact Number"
                value={customer.admin.contactNumber}
                onChange={(e: any) => {
                  const phoneNumber = e.target.value;
                  // Check if the entered value is a valid 10-digit phone number
                  if (!regexOfPhoneNumber.test(phoneNumber)) {
                    setError((prevError: any) => ({
                      ...prevError,
                      adminError: {
                        ...prevError.adminError,
                        contactNumber:
                          "Please enter a valid 10-digit phone number",
                      },
                    }));
                  } else {
                    setError((prevError: any) => ({
                      ...prevError,
                      adminError: {
                        ...prevError.adminError,
                        contactNumber: "", // Clear the error if the input is valid
                      },
                    }));
                  }
                  setCustomer((prevCustomer: any) => ({
                    ...prevCustomer,
                    admin: {
                      ...prevCustomer.admin,
                      contactNumber: phoneNumber,
                    },
                  }));
                }}
                className="w-full"
                errorMessage={error.adminError?.contactNumber}
              />

              <Maininputfield
                label="Admin Email"
                value={customer.admin.adminEmail}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    admin: { ...customer.admin, adminEmail: e.target.value },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      adminError: {
                        ...error.adminError,
                        adminEmail: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.adminError?.adminEmail}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Invoice Preferences
            </h3>

            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Invoice Preferences"
                mapOption={invoiceColletion}
                value={customer.invoicePrefrences}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    invoicePrefrences: e.target.value,
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      invoicePrefrencesError: "",
                    });
                  }
                }}
                errorMessage={error.invoicePrefrencesError}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Invoice Communication Preferences
            </h3>

            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Select Email"
                mapOption={invoiceComuColletion}
                value={customer.invoiceCommunicationPrefrences}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    invoiceCommunicationPrefrences: e.target.value,
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      invoiceCommunicationPrefrencesError: "",
                    });
                  }
                }}
                errorMessage={error.invoiceCommunicationPrefrencesError}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Company C-Suite Details
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Designation"
                value={customer.companySuiteDetails.designation}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companySuiteDetails: {
                      ...customer.companySuiteDetails,
                      designation: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companySuiteDetailsError: {
                        ...error.companySuiteDetailsError,
                        designation: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.companySuiteDetailsError?.designation}
              />
              <Maininputfield
                label="Director Email Address"
                value={customer.companySuiteDetails.directorEmailAddress}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    companySuiteDetails: {
                      ...customer.companySuiteDetails,
                      directorEmailAddress: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      companySuiteDetailsError: {
                        ...error.companySuiteDetailsError,
                        directorEmailAddress: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={
                  error.companySuiteDetailsError?.directorEmailAddress
                }
              />
              <Maininputfield
                label="Director Contact Number"
                value={customer.companySuiteDetails.directorContactNumber}
                onChange={(e: any) => {
                  // setCustomer({
                  //   ...customer,
                  //   companySuiteDetails: {
                  //     ...customer.companySuiteDetails,
                  //     directorContactNumber: e.target.value,
                  //   },
                  // });
                  // if (e.target.value.length > 0) {
                  //   setError({
                  //     ...error,
                  //     companySuiteDetailsError: {
                  //       ...error.companySuiteDetailsError,
                  //       directorContactNumber: "",
                  //     },
                  //   });
                  // }

                  const phoneNumber = e.target.value;
                  // Check if the entered value is a valid 10-digit phone number
                  if (!regexOfPhoneNumber.test(phoneNumber)) {
                    setError((prevError: any) => ({
                      ...prevError,
                      companySuiteDetailsError: {
                        ...prevError.companySuiteDetailsError,
                        directorContactNumber:
                          "Please enter a valid 10-digit phone number",
                      },
                    }));
                  } else {
                    setError((prevError: any) => ({
                      ...prevError,
                      companySuiteDetailsError: {
                        ...prevError.companySuiteDetailsError,
                        directorContactNumber: "", // Clear the error if the input is valid
                      },
                    }));
                  }
                  setCustomer((prevCustomer: any) => ({
                    ...prevCustomer,
                    companySuiteDetails: {
                      ...prevCustomer.companySuiteDetails,
                      directorContactNumber: phoneNumber,
                    },
                  }));
                }}
                className="w-full"
                errorMessage={
                  error.companySuiteDetailsError?.directorContactNumber
                }
              />
            </div>
            <div className="flex justify-end py-2 px-4">
              <Button
                text="Add More Director"
                className="!w-fit bg-accent3 !px-4"
              />
            </div>
            <h2 className="font-semibold p-4 text-[#151515] text-[18px]">
              {" "}
              Payment
            </h2>

            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Bank Details
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Account Name"
                value={customer.payment.accountName}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    payment: {
                      ...customer.payment,
                      accountName: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      paymentError: {
                        ...error.paymentError,
                        accountName: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.paymentError?.accountName}
              />
              <Maininputfield
                label="Bank Name"
                value={customer.payment.bankName}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    payment: { ...customer.payment, bankName: e.target.value },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      paymentError: {
                        ...error.paymentError,
                        bankName: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.paymentError?.bankName}
              />
              <Maininputfield
                label="BSB"
                value={customer.payment.bsb}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    payment: { ...customer.payment, bsb: e.target.value },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      paymentError: {
                        ...error.paymentError,
                        bsb: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.paymentError?.bsb}
              />
              <Maininputfield
                label="Account Number"
                value={customer.payment.accountNumber}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    payment: {
                      ...customer.payment,
                      accountNumber: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      paymentError: {
                        ...error.paymentError,
                        accountNumber: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.paymentError?.accountNumber}
              />
            </div>
            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Payment Terms
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <DropDownMap
                label="Term"
                mapOption={paymentTermsCollection}
                value={customer.paymentTerm}
                onChange={(e: any) => {
                  setCustomer({ ...customer, paymentTerm: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      paymentTermError: "",
                    });
                  }
                }}
                errorMessage={error.paymentTermError}
              />
            </div>
            <h2 className="font-semibold p-4 text-[#151515] text-[18px]">
              {" "}
              Warehouse Locations & Address
            </h2>

            <h3 className="font-semibold px-4 text-sm text-[#28353A] text-[16px]">
              Address 1
            </h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              <Maininputfield
                label="Street 1"
                value={customer.warehouseLocation.street1}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    warehouseLocation: {
                      ...customer.warehouseLocation,
                      street1: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      warehouseLocationError: {
                        ...error.warehouseLocationError,
                        street1: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.warehouseLocationError?.street1}
              />
              <Maininputfield
                label="Street 2"
                value={customer.warehouseLocation.street2}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    warehouseLocation: {
                      ...customer.warehouseLocation,
                      street2: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      warehouseLocationError: {
                        ...error.warehouseLocationError,
                        street2: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.warehouseLocationError?.street2}
              />
              <Maininputfield
                label="Suburb"
                value={customer.warehouseLocation.suburb}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    warehouseLocation: {
                      ...customer.warehouseLocation,
                      suburb: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      warehouseLocationError: {
                        ...error.warehouseLocationError,
                        suburb: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.warehouseLocationError?.suburb}
              />
              <DropDownMap
                label="State"
                mapOption={stateCollection}
                value={customer.warehouseLocation.state}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    warehouseLocation: {
                      ...customer.warehouseLocation,
                      state: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      warehouseLocationError: {
                        ...error.warehouseLocationError,
                        state: "",
                      },
                    });
                  }
                }}
                errorMessage={error.warehouseLocationError?.state}
              />
              <DropDownMap
                label="Country"
                mapOption={countryCollection}
                value={customer.warehouseLocation.country}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    warehouseLocation: {
                      ...customer.warehouseLocation,
                      country: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      warehouseLocationError: {
                        ...error.warehouseLocationError,
                        country: "",
                      },
                    });
                  }
                }}
                errorMessage={error.warehouseLocationError?.country}
              />
              <Maininputfield
                label="Post Code"
                value={customer.warehouseLocation.postCode}
                onChange={(e: any) => {
                  setCustomer({
                    ...customer,
                    warehouseLocation: {
                      ...customer.warehouseLocation,
                      postCode: e.target.value,
                    },
                  });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      warehouseLocationError: {
                        ...error.warehouseLocationError,
                        postCode: "",
                      },
                    });
                  }
                }}
                className="w-full"
                errorMessage={error.warehouseLocationError?.postCode}
              />
            </div>
            <div className="flex justify-end py-2 px-4">
              <Button
                text="Add More Addresses"
                className="!w-fit bg-accent3 !px-4"
              />
            </div>
            <h2 className="font-semibold p-4 text-[#151515] text-[18px]">
              {" "}
              Contract Document
            </h2>

            <div className="grid grid-cols-3 gap-4 p-4">
              <FileUpload
                file="Choose Contract Document"
                value={customer.document}
                onChange={(e: any) => {
                  setCustomer({ ...customer, document: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({
                      ...error,
                      documentError: "",
                    });
                  }
                }}
                errorMessage={error.documentError}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 my-4 px-4 mb-20">
            <Button
              text="Save"
              className="!bg-transparent !w-fit border border-[#e5e5e5] !text-black px-8"
            />
            <Button
              onClick={handleSubmit}
              text="Create"
              className="!w-fit px-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
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
const invoiceColletion = [
  {
    value: "Mail",
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
];
const invoiceComuColletion = [
  {
    value: "Accounts Payable Email, Operations Email",
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
];
const paymentTermsCollection = [
  {
    value: "Net 30",
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
    value: "item4",
  },
];
