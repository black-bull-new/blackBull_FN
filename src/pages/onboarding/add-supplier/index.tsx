import Image from "next/image";
import Progressbar from "../../../../components/Progressbar";
import Maininputfield from "../../../../components/Maininputfield";
import DropDownMap from "../../../../components/DropDownMap";
import { useState } from "react";
import Button from "../../../../components/Button";
import DateWithoutDropdown from "../../../../components/DateWithoutDropdown";
import FileUpload from "../../../../components/FileUpload";
import Maindatefield from "../../../../components/Maindatefield";
import StatusChip from "../../../../components/StatusChip";
import Checkbox from "../../../../components/Checkbox";
import { NestedAddSupplier } from "../../../../components/supplier/NestedAddSupplier";
import { NestedAddVehicle } from "../../../../components/supplier/NestedAddVehicle";
import NestedAddDriver from "../../../../components/supplier/NestedAddDriver";
import { getCookie } from "cookies-next";
import { addSupplierIntoSupplier, uploadSupplierProfile } from "@/network-request/supplier/supplier";
import {
  addVehicleIntoSupplier,
  uploadSupplierVehicleRegoDocuments,
  uploadSuppliervehicleDocuments,
} from "@/network-request/supplier/vehicle";
// import {
//   // correctAddDriverStateName,
//   // correctAddSupplierStateName,
//   // correctAddVehicleStateName,
// } from "../utility/utilityMethod";
import {
  addSupplierDriver,
  uploadSupplierDriverProfile,
  uploadSupplierDriverlicenseDocuments,
} from "@/network-request/supplier/driver";
import { formattedDate } from "@/utils";
import toast, { Toaster } from "react-hot-toast";

const correctAddDriverStateName = (stateName: string): string => {
  const nameMapping: { [key: string]: string } = {
    firstName: "First Name",
    middleName: "Middle Name",
    lastName: "Last Name",
    dateOfBirth: "Date Of Birth",
    avatar: "Avatar",
    email: "Email",
    mobile: "Mobile",
    nationality: "Nationality",
    currentAddress: "Current Address",
    houseNumber: "House Number",
    street: "Street",
    suburb: "Suburb",
    state: "State",
    country: "Country",
    pincode: "Pincode",
    permanentAddress: "Permanent Address",
    emergencyContactInformation: "Emergency Contact Information",
    contactName: "Contact Name",
    contactNumber: "Contact Number",
    relationship: "Relationship",
    employmentHistory: "Employment History",
    previousEmployer: "Previous Employer",
    yearsOfExperience: "Years Of Experience",
    reasonOfLeaving: "Reason Of Leaving",
    companyName: "Company Name",
    referenceContactName: "Reference Contact Name",
    referenceEmailId: "Reference Email Id",
    referenceContactNumber: "Reference Contact Number",
    licenseDetails: "License Details",
    licenceNumber: "Licence Number",
    licenseCardNumber: "License Card Number",
    licenseType: "License Type",
    dateOfIssue: "Date Of Issue",
    expiryDate: "Expiry Date",
    daysLeftForRenewal: "DaysLeft For Renewal",
    documents: "Documents",
    specialDrivingLicense: "Special Driving License",
  };

  return nameMapping[stateName] || stateName;
};

const correctAddSupplierStateName = (stateName: string): string => {
  const nameMapping: { [key: string]: string } = {
    companyName: "Company Name",
    tradingName: "Trading Name",
    abn: "ABN",
    legalName: "Legal Name",
    website: "Website",
    profile: "Profile",
    opreations: "opreations",
    contactPerson: "Contact Person",
    desgination: "Desgination",
    number: "Number",
    opreationEmail: "Opreation Email",
    compliance: "compliance",
    complianceEmail: "",
    admin: "Admin",
    adminEmail: "Admin Email",
    dispatch: "Dispatch",
    dispatchEmail: "Dispatch Email",
    invoicePreferences: "Invoice Preferences",
    invoiceCommunicationPreferences: "Invoice Communication Preferences",
    bankDetails: "Bank Details",
    accountName: "Account Name",
    bankName: "Bank Name",
    bsb: "BSB",
    accountNumber: "Account Number",
    businessCoverage: "Business Coverage",
    areaCovered: "Area Covered",
    businessOpreations: "Business Opreations",
    certificateOfAccreditation: "Certificate Of Accreditation",
    accreditationNumber: "Accreditation Number",
    massManagementExpiryDate: "Mass Management Expiry Date",
    basicFatigueExpiryDate: "Basic Fatigue Expiry Date",
    dangerousGoodsExpiryDate: "Dangerous Goods Expiry Date",
    nhvassExpiryDate: "Nhvass Expiry Date",
    haccpExpiryDate: "Haccp Expiry Date",
    uploadAccreditationDocuments: "Upload Accreditation Documents",
    accreditationDocument: "Accreditation Document",
  };

  return nameMapping[stateName] || stateName;
};

const correctAddVehicleStateName = (stateName: string): string => {
  const nameMapping: { [key: string]: string } = {
    registrationNumber: "Registration Number",
    registrationExpiry: "Registration Expiry",
    vinNumber: "VIN Number",
    vehicleManufacturer: "Vehicle Manufacturer",
    vehicleModel: "Vehicle Model",
    vehicleType: "Vehicle Type",
    typeOfTrailer: "Type Of Trailer",
    stateOfRegistration: "State Of Registration",
    engineNumber: "Engine Number",
    compliancePlate: "Compliance Plate",
    registrationStatus: "Registration Status",
    document: "Document",
    insuranceCompanyName: "Insurance Company Name",
    policyNumber: "Policy Number",
    vehicleInsuranceStartDate: "Vehicle Insurance Start Date",
    renewalDate: "Renewal Date",
    dateValidUntil: "Date Valid Until",
    daysLeft: "Days Left",
    insuranceCoverage: "Insurance Coverage",
    insuranceStatus: "Insurance Status",
    situation: "Situation",
    truckOdometer: "Truck Odometer",
  };

  return nameMapping[stateName] || stateName;
};

const AddSupplier = () => {
  const token = getCookie("token");
  const [selectedData, setSelectedData] = useState();
  const step1Btn = "Proceed to Add Vehicle";
  const step2Btn = "Proceed to Add Driver";
  const step3Btn = "Submit";
  const [buttonState, seButtonState] = useState(step1Btn);
  /**
   * add supplier state and its error state
   */
  const [addSupplier, setAddSupplier] = useState<any>({
    companyName: "",
    tradingName: "",
    abn: "",
    legalName: "",
    website: "",
    profile: "",
    opreations: {
      contactPerson: "",
      desgination: "",
      number: "",
      opreationEmail: "",
    },
    compliance: {
      contactPerson: "",
      desgination: "",
      number: "",
      complianceEmail: "",
    },
    admin: {
      contactPerson: "",
      desgination: "",
      number: "",
      adminEmail: "",
    },
    dispatch: {
      contactPerson: "",
      desgination: "",
      number: "",
      dispatchEmail: "",
    },
    invoicePreferences: "",
    invoiceCommunicationPreferences: "",
    companySuiteDetails: [
      {
        directorName: "",
        directorEmailAddress: "",
        directorNumber: "",
      },
    ],
    bankDetails: {
      accountName: "",
      bankName: "",
      bsb: "",
      accountNumber: "",
    },
    businessCoverage: {
      areaCovered: "",
      businessOpreations: "",
    },
    warehouseDetails: [
      {
        state: "",
        street1: "",
        street2: "",
        suburb: "",
        postcode: "",
        typeOfCarrier: "",
      },
    ],
    certificateOfAccreditation: {
      accreditationNumber: "",
      massManagementExpiryDate: "",
      basicFatigueExpiryDate: "",
      dangerousGoodsExpiryDate: "",
      nhvassExpiryDate: "",
      haccpExpiryDate: "",
      uploadAccreditationDocuments: "",
    },
    accreditationDocument: "",
    insuranceDetails: {
      productLiability: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      publicLiability: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      workCover: {
        employerNumber: "",
        valid: "",
        validTill: "",
        duesDays: "",
        document: "",
      },
      marineGeneral: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      marineAlcohol: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
      coc: {
        policyNumber: "",
        insurer: "",
        expiryDate: "",
        sumAssured: "",
        document: "",
      },
    },
    drug: {
      type: "",
      uploadDate: "",
    },
    alcoholPolicy: {
      type: "",
      uploadDate: "",
    },
    procedure: {
      type: "",
      uploadDate: "",
    },
    riskManagementPolicy: {
      type: "",
      uploadDate: "",
    },
    speedPolicy: {
      type: "",
      uploadDate: "",
    },
    fatiquePolicyPresentationSystem: {
      type: "",
      uploadDate: "",
    },
    gpsSnapshot: {
      type: "",
      uploadDate: "",
    },
    workHealthSafetyPolicy: {
      type: "",
      uploadDate: "",
    },
    onboardingDocuments: []
  });
  const [addSupplierError, setAddSupplierError] = useState<any>({
    companyNameError: "",
    tradingNameError: "",
    abnError: "",
    legalNameError: "",
    websiteError: "",
    profileError: "",
    opreationsError: {
      contactPerson: "",
      desgination: "",
      number: "",
      opreationEmail: "",
    },
    complianceError: {
      contactPerson: "",
      desgination: "",
      number: "",
      complianceEmail: "",
    },
    adminError: {
      contactPerson: "",
      desgination: "",
      number: "",
      adminEmail: "",
    },
    dispatchError: {
      contactPerson: "",
      desgination: "",
      number: "",
      dispatchEmail: "",
    },
    invoicePreferencesError: "",
    invoiceCommunicationPreferencesError: "",
    bankDetailsError: {
      accountName: "",
      bankName: "",
      bsb: "",
      accountNumber: "",
    },
    businessCoverageError: {
      areaCovered: "",
      businessOpreations: "",
    },
    certificateOfAccreditationError: {
      accreditationNumber: "",
      massManagementExpiryDate: "",
      basicFatigueExpiryDate: "",
      dangerousGoodsExpiryDate: "",
      nhvassExpiryDate: "",
      haccpExpiryDate: "",
      uploadAccreditationDocuments: "",
    },
    // accreditationDocument: "",
  });
  const [selectedProfileForSupplier, setSelectedProfileForSupplier] = useState("");
  const [selectedUploadRegoDocumentForSupplier, setSelectedUploadRegoDocumentForSupplier] = useState("");
  const [urlsForSupplier, setUrlsForSupplier] = useState<string[]>([]);
  const modifiedUrlsForSupplier = urlsForSupplier.reduce(
    (acc: any, url, index) => {
      acc[index + 1] = url;
      return acc;
    },
    []
  );
  console.log({ selectedProfileForSupplier })

  /**
   * add vehicle state and its error state
   */
  const [addVehicle, setAddVehicle] = useState<any>({
    registrationNumber: "",
    registrationExpiry: "",
    vinNumber: "",
    vehicleManufacturer: "",
    vehicleModel: "",
    vehicleType: "",
    typeOfTrailer: "",
    stateOfRegistration: "",
    engineNumber: "",
    compliancePlate: "",
    registrationStatus: "",
    vehicleDocuments: "",
    document: "",
    insuranceCompanyName: "",
    policyNumber: "",
    vehicleInsuranceStartDate: "",
    renewalDate: "",
    dateValidUntil: "",
    daysLeft: "",
    insuranceCoverage: "",
    insuranceStatus: "",
    situation: "",
    truckOdometer: "",
  });
  const [addVehicleError, setAddVehicleError] = useState<any>({
    registrationNumberError: "",
    registrationExpiryError: "",
    vinNumberError: "",
    vehicleManufacturerError: "",
    vehicleModelError: "",
    vehicleTypeError: "",
    typeOfTrailerError: "",
    stateOfRegistrationError: "",
    engineNumberError: "",
    compliancePlateError: "",
    registrationStatusError: "",
    insuranceCompanyNameError: "",
    policyNumberError: "",
    vehicleInsuranceStartDateError: "",
    renewalDateError: "",
    dateValidUntilError: "",
    daysLeftError: "",
    insuranceCoverageError: "",
    insuranceStatusError: "",
    situationError: "",
    truckOdometerError: "",
  });
  const [selectedUploadRegoDocument, setSelectedUploadRegoDocument] =
    useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const modifiedUrls = urls.reduce((acc: any, url, index) => {
    acc[index] = url;
    return acc;
  }, []);
  const [selectedStatusValues, setSelectedStatusValues] = useState<any[]>([]);

  /**
   * add driver state and its error state
   */
  const [addDriver, setAddDriver] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    avatar: "",
    email: "",
    mobile: "",
    nationality: "",
    currentAddress: {
      houseNumber: "",
      street: "",
      suburb: "",
      state: "",
      country: "Australia",
      pincode: "",
    },
    permanentAddress: {
      houseNumber: "",
      street: "",
      suburb: "",
      state: "",
      country: "Australia",
      pincode: "",
    },
    emergencyContactInformation: {
      contactName: "",
      contactNumber: "",
      relationship: "",
    },
    employmentHistory: [
      {
        previousEmployer: "",
        yearsOfExperience: "",
        reasonOfLeaving: "",
        companyName: "",
        referenceContactName: "",
        referenceEmailId: "",
        referenceContactNumber: "",
      },
    ],
    licenseDetails: {
      licenseNumber: "",
      licenseCardNumber: "",
      licenseType: "",
      state: "",
      dateOfIssue: "",
      expiryDate: "",
      daysLeftForRenewal: "",
      documents: [],
    },
    specialDrivingLicense: "",

    // visaStatus: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // driverLicenseFront: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // driverLicenseBack: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // licenseHistory: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // policeVerification: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // passportFront: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // passportBack: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // healthInsurance: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // driverCertificate: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // fitness: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    // drugTest: {
    //   type: "visa-status",
    //   uploadDate: "20/02/2024",
    // },
    onboardingDocuments: [],
  });

  const [addDriverError, setAddDriverError] = useState<any>({
    firstNameError: "",
    middleNameError: "",
    lastNameError: "",
    dateOfBirthError: "",
    avatarError: "",
    emailError: "",
    mobileError: "",
    nationalityError: "",
    currentAddressError: {
      houseNumber: "",
      street: "",
      suburb: "",
      state: "",
      country: "",
      pincode: "",
    },
    permanentAddressError: {
      houseNumber: "",
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
    // licenseDetailsError: {
    //   licenseNumber: "",
    //   licenseCardNumber: "",
    //   licenseType: "",
    //   state: "",
    //   dateOfIssue: "",
    //   expiryDate: "",
    //   daysLeftForRenewal: "",
    //   documents: [],
    // },
    specialDrivingLicenseError: "",
  });
  const [selectedProfileForDriver, setSelectedProfileForDriver] = useState("");
  const [
    selectedUploadRegoDocumentForDriver, setSelectedUploadRegoDocumentForDriver] = useState("");
  const [urlsForDriver, setUrlsForDriver] = useState<string[]>([]);
  const modifiedUrlsForDriver = urlsForDriver.reduce((acc: any, url, index) => {
    acc[index + 1] = url;
    return acc;
  }, []);

  const handleSubmit = async () => {
    if (buttonState === step1Btn) {
      const hasErrors = checkValidationForAddSupplier();
      if (hasErrors) {
        toast("Please fix the validation errors before submitting.", {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }

      // Uploading driver profile ...
      const [profileUrl] = await Promise.all([
        Promise.all(
          Object.values(selectedProfileForSupplier)?.map((imageInfo) =>
            uploadSupplierProfile(imageInfo)
          )
        ),
      ]);

      // Uploading driver license documents ...
      // const [driverLicense] = await Promise.all([
      //   Promise.all(
      //     Object.values(selectedUploadRegoDocument)?.map((imageInfo) =>
      //       uploadDriverLicenseDocuments(imageInfo)
      //     )
      //   ),
      // ]);

      const newSupplierDetails = {
        ...addSupplier,
        profile: profileUrl[0]?.response,
        // licenseDetails: {
        //   ...driverDetails.licenseDetails,
        //   documents: driverLicense[0]?.response,
        // },
        onboardingDocuments: urlsForSupplier?.map(
          (url: any, index: number) => ({
            type: url,
            uploadDate: formattedDate,
          })
        ),
      };

      const response: any = await addSupplierIntoSupplier(
        newSupplierDetails,
        token || ""
      );
      if (response.data) {
        toast("Supplier has been successfully created..", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        // Uncomment the following line when whole code of add supplier is finished
        // seButtonState(step2Btn);
        // Auto scroll up for better user experience
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smooth scrolling
        });
        seButtonState(step2Btn) 
      } else {
        toast("Something went wrong", {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } else if (buttonState === step2Btn) {
      // Check validation and get error status
      const hasErrors = checkValidationForAddVehicle();
      if (hasErrors) {
        toast("Please fix the validation errors before submitting.", {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
      const uploadDocument = await Promise.all(
        Object.values(selectedUploadRegoDocument)?.map((file) =>
          uploadSuppliervehicleDocuments(file)
        )
      );
      console.log({ uploadDocument });
      const customVehiclePayload = {
        ...addVehicle,
        document: uploadDocument[0]?.response,
        vehicleDocuments: urls?.map((url: any, index: number) => ({
          type: url,
          uploadDate: formattedDate,
          status: selectedStatusValues[index % selectedStatusValues.length],
        })),
      };

      const response: any = await addVehicleIntoSupplier(
        customVehiclePayload,
        token || ""
      );
      if (response?.status === 200) {
        toast("Vehicle has been successfully added..", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        seButtonState(step3Btn) 
      } else {
        toast("Something went wrong", {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      // Uncomment the following line when whole code of add vehicle is finished
      // seButtonState(step3Btn);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
      });
    } else if (buttonState === step3Btn) {
      // Check validation and get error status
      const hasErrors = checkValidationForAddDriver();
      if (hasErrors) {
        toast("Please fix the validation errors before submitting.", {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }

      // Uploading driver profile ...
      const [profileUrl] = await Promise.all([
        Promise.all(
          Object.values(selectedProfileForDriver)?.map((imageInfo) =>
            uploadSupplierDriverProfile(imageInfo)
          )
        ),
      ]);
      // Uploading driver license documents ...
      const [driverLicense] = await Promise.all([
        Promise.all(
          Object.values(selectedUploadRegoDocumentForDriver)?.map((imageInfo) =>
            uploadSupplierDriverlicenseDocuments(imageInfo)
          )
        ),
      ]);

      const newDriverDetails = {
        ...addDriver,
        avatar: profileUrl[0]?.response,
        licenseDetails: {
          ...addDriver.licenseDetails,
          documents: driverLicense[0]?.response,
        },
        onboardingDocuments: urlsForDriver?.map((url: any, index: number) => ({
          type: url[0],
          uploadDate: formattedDate,
        })),
      };
      console.log("urlsForDriver", urlsForDriver);
      console.log("newDriverDetails", newDriverDetails);

      const response: any = await addSupplierDriver(
        newDriverDetails,
        token || ""
      );
      console.log({ response });
      if (response.data) {
        // seButtonState(step1Btn);
        toast("Driver has been successfully created..", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smooth scrolling
        });
      } else {
        toast("Something went wrong", {
          icon: "⚠️",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };

  /**
   *
   * @returns true if error occurred in add driver state otherwise false
   */
  const checkValidationForAddDriver = () => {
    const newErrors = { ...addDriverError };
    let hasErrors = false;

    Object.keys(addDriver).forEach((key) => {
      if (
        key !== "avatar" &&
        key !== "employmentHistory" &&
        key !== "visaStatus" &&
        key !== "driverLicenseFront" &&
        key !== "driverLicenseBack" &&
        key !== "licenseHistory" &&
        key !== "policeVerification" &&
        key !== "passportFront" &&
        key !== "passportBack" &&
        key !== "healthInsurance" &&
        key !== "driverCertificate" &&
        key !== "fitness" &&
        key !== "drugTest" &&
        key !== "specialDrivingLicense"
      ) {
        if (typeof addDriver[key] === "object" && addDriver[key] !== null) {
          // Ensure that nested error objects are initialized
          newErrors[key + "Error"] = newErrors[key + "Error"] || {};

          // Handle nested objects with a different logic
          Object.keys(addDriver[key]).forEach((nestedKey) => {
            const nestedKeyPath = `${key}Error.${nestedKey}`;

            if (
              !addDriver[key][nestedKey] ||
              addDriver[key][nestedKey] === undefined
            ) {
              newErrors[key + "Error"][
                nestedKey
              ] = `${correctAddDriverStateName(
                nestedKey
              )} is required in ${correctAddDriverStateName(key)}`;
              hasErrors = true;
            } else {
              newErrors[key + "Error"][nestedKey] = "";
            }
          });
        } else {
          // Handle non-nested fields
          // Auto scroll up for better user experience
          window.scrollTo({
            top: 0,
            behavior: "smooth", // for smooth scrolling
          });

          if (!addDriver[key]) {
            newErrors[key + "Error"] = `${correctAddDriverStateName(
              key
            )} is required`;
            hasErrors = true;
          } else {
            newErrors[key + "Error"] = "";
          }
        }
      }
    });

    setAddDriverError(newErrors);
    // Return the error status
    return hasErrors;
  };

  /**
   *
   * @returns true if error occurred in add supplier state otherwise false
   */
  const checkValidationForAddSupplier = () => {
    const newErrors = { ...addSupplierError };
    let hasErrors = false;

    Object.keys(addSupplier).forEach((key) => {
      if (
        key !== "companySuiteDetails" &&
        key !== "warehouseDetails" &&
        key !== "insuranceDetails" &&
        key !== "accreditationDocument" &&
        key !== "alcoholPolicy" &&
        key !== "drug" &&
        key !== "fatiquePolicyPresentationSystem" &&
        key !== "gpsSnapshot" &&
        key !== "procedure" &&
        key !== "riskManagementPolicy" &&
        key !== "speedPolicy" &&
        key !== "workHealthSafetyPolicy" &&
        key !== "certificateOfAccreditation"
      ) {
        if (typeof addSupplier[key] === "object" && addSupplier[key] !== null) {
          // Ensure that nested error objects are initialized
          newErrors[key + "Error"] = newErrors[key + "Error"] || {};

          // Handle nested objects with a different logic
          Object.keys(addSupplier[key]).forEach((nestedKey) => {
            const nestedKeyPath = `${key}Error.${nestedKey}`;

            if (
              !addSupplier[key][nestedKey] ||
              addSupplier[key][nestedKey] === undefined
            ) {
              newErrors[key + "Error"][
                nestedKey
              ] = `${correctAddSupplierStateName(
                nestedKey
              )} is required in ${correctAddSupplierStateName(key)}`;
              hasErrors = true;
            } else {
              newErrors[key + "Error"][nestedKey] = "";
            }
          });
        } else {
          // Handle non-nested fields
          // Auto scroll up for better user experience
          window.scrollTo({
            top: 0,
            behavior: "smooth", // for smooth scrolling
          });

          if (!addSupplier[key]) {
            newErrors[key + "Error"] = `${correctAddSupplierStateName(
              key
            )} is required`;
            hasErrors = true;
          } else {
            newErrors[key + "Error"] = "";
          }
        }
      }
    });

    setAddSupplierError(newErrors);
    // Return the error status
    return hasErrors;
  };
  /**
   *
   * @returns true if error occurred in add vehicle state otherwise false
   */
  const checkValidationForAddVehicle = () => {
    const newErrors = { ...addVehicleError };
    let hasErrors = false;
    Object.keys(addVehicle).forEach((key) => {
      // Handle non-nested fields
      // Auto scroll up for better user experience
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
      });

      if (key !== "document" && key !== "vehicleDocuments") {
        if (!addVehicle[key]) {
          newErrors[key + "Error"] = `${correctAddVehicleStateName(
            key
          )} is required`;
          hasErrors = true;
        } else {
          newErrors[key + "Error"] = "";
        }
      }
    });
    setAddVehicleError(newErrors);
    // Return the error status
    return hasErrors;
  };

  return (
    <>
      {/* <Header /> */}
      <div className="flex bg-[#E9EFFF]">
        <div>
          <Toaster />
        </div>
        {/* <div className="sticky top-0">
          <Sidebar />
        </div> */}
        <div className="ml-[316px] w-full mt-4">
          {buttonState === step1Btn ? (
            <NestedAddSupplier
              addSupplier={addSupplier}
              setAddSupplier={setAddSupplier}
              error={addSupplierError}
              setError={setAddSupplierError}
              urls={urlsForSupplier}
              selectedProfileSupplier={selectedProfileForSupplier}
              setSelectedProfileSupplier={setSelectedProfileForSupplier}
              setUrls={setUrlsForSupplier}
              modifiedUrls={modifiedUrlsForSupplier}
            />
          ) : buttonState === step2Btn ? (
            <NestedAddVehicle
              addVehicle={addVehicle}
              setAddVehicle={setAddVehicle}
              error={addVehicleError}
              setError={setAddVehicleError}
              selectedUploadRegoDocument={selectedUploadRegoDocument}
              setSelectedUploadRegoDocument={setSelectedUploadRegoDocument}
              urls={urls}
              setUrls={setUrls}
              modifiedUrls={modifiedUrls}
              selectedStatusValues={selectedStatusValues}
              setSelectedStatusValues={setSelectedStatusValues}
            />
          ) : buttonState === step3Btn ? (
            <NestedAddDriver
              addDriver={addDriver}
              setAddDriver={setAddDriver}
              error={addDriverError}
              setError={setAddDriverError}
              selectedProfile={selectedProfileForDriver}
              setSelectedProfile={setSelectedProfileForDriver}
              selectedUploadRegoDocument={selectedUploadRegoDocumentForDriver}
              setSelectedUploadRegoDocument={
                setSelectedUploadRegoDocumentForDriver
              }
              urls={urlsForDriver}
              setUrls={setUrlsForDriver}
              modifiedUrls={modifiedUrlsForDriver}
            />
          ) : null}

          {/* create and save button */}

          <div className="mr-4 px-4 rounded-md mb-20 p-4 flex justify-end gap-2">
            <Button
              text="Save"
              className="!bg-transparent !text-[#000] border px-8 !rounded-xl text-sm border-[#032272]"
            />
            <Button
              onClick={handleSubmit}
              text={buttonState}
              className="px-8 rounded-full text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddSupplier;

// const insuranceCoverageCollection = [
//   {
//     value: "$1 Million Coverage",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const situationCollection = [
//   {
//     value: "Anywhere",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
// ];
// const activeInactive = [
//   {
//     value: "Active",
//   },
//   {
//     value: "Inactive",
//   },
// ];
// const invoiceColletion = [
//   {
//     value: "Mail",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const invoiceComuColletion = [
//   {
//     value: "Accounts Payable Email, Operations Email",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const areaCollection = [
//   {
//     value:
//       "Australian Capital Territory, Northern Territory, Tasmania, Victoria",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const businessOperationCollection = [
//   {
//     value: "Queensland, Victoria",
//   },
//   {
//     value: "item1",
//   },

//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const stateCollection = [
//   {
//     value: "Victoria",
//   },
//   {
//     value: "items1",
//   },
//   {
//     value: "items2",
//   },
//   {
//     value: "items3",
//   },
//   {
//     value: "items4",
//   },
//   {
//     value: "items5",
//   },
// ];
// const carrierTypeCollection = [
//   {
//     value: "Trucking Carrier",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
// ];
// const documentCollectionData = [
//   {
//     documentType: "Drug",
//     uploadedDocument: "drug.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Alcohol Policy",
//     uploadedDocument: "alcohol.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Procedure",
//     uploadedDocument: "procedure.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Risk Management Policy",
//     uploadedDocument: "doc.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Speed Policy",
//     uploadedDocument: "doc.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Fatique Policy & Presentation system",
//     uploadedDocument: "doc.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "GPS Snapshot",
//     uploadedDocument: "GPS-Snapshot.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Work Health & Safety Policy",
//     uploadedDocument: "Work Health & Safety Policy.pdf",
//     uploadDate: "20/12/2023",
//   },
// ];
// const documentCollectionHeading = [
//   {
//     heading: "Document type",
//   },
//   {
//     heading: "Attach files",
//   },
//   {
//     heading: "Uploaded Documents",
//   },
//   {
//     heading: "Date of upload",
//   },
// ];
// const documentDataCollection = [
//   {
//     Vehicle: "Placeholder",
//     rego: "Placeholder",
//     uploadDate: "19/12/2023",
//     UploadedDoc: "doc.pdf",
//     status: "Approved",
//     viewDoc: "view",
//   },
//   {
//     Vehicle: "Placeholder",
//     rego: "Placeholder",
//     uploadDate: "18/12/2023",
//     UploadedDoc: "doc.pdf",
//     status: "Under Review",
//     viewDoc: "view",
//   },
//   {
//     Vehicle: "Placeholder",
//     rego: "Placeholder",
//     uploadDate: "17/12/2023",
//     UploadedDoc: "doc.pdf",
//     status: "Rejected",
//     viewDoc: "view",
//   },
// ];
// const vehicleDocumentCollection = [
//   {
//     heading: "VEHICLE",
//   },
//   {
//     heading: "REGO",
//   },
//   {
//     heading: "UPLOAD DATE",
//   },
//   {
//     heading: "UPLOADED DOC.",
//   },
//   {
//     heading: "STATUS",
//   },
//   {
//     heading: "VIEW DOC.",
//   },
// ];
// const countryCollection = [
//   {
//     value: "Australia",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
//   {
//     value: "item3",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item1",
//   },
// ];
// const licenceTypes = [
//   {
//     value: "HR (Heavy Rigid Licence)",
//   },
//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
// ];
// const drivingLicenceCollection = [
//   {
//     value: "Dangerous Goods",
//   },

//   {
//     value: "item1",
//   },
//   {
//     value: "item2",
//   },
// ];
// const documentCollectionHeadingDriver = [
//   {
//     heading: "Document type",
//   },
//   {
//     heading: "Attach files",
//   },
//   {
//     heading: "Uploaded Documents",
//   },
//   {
//     heading: "Date of upload",
//   },
// ];
// const documentCollectionDataDriver = [
//   {
//     documentType: "Visa Status",
//     uploadedDocument: "visa-status.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Driver License (Front) ",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Driver License (Back) ",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "License History",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Police Verification",
//     uploadedDocument: "police-verification.pdf",
//     uploadDate: "20/12/2023",
//   },
//   {
//     documentType: "Passport (Front)",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Passport (Back)",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Health Insurance",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Driver Certificate",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Fitness",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
//   {
//     documentType: "Drug Test",
//     uploadedDocument: "-",
//     uploadDate: "-",
//   },
// ];
