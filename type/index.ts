// interfaces/VehicleDetails.ts
export interface VehicleDetails {
    registrationNumber: string;
    registrationExpiry: string;
    vinNumber: string;
    vehicleManufacturer: string;
    vehcileModel: string;
    vehicleType: string;
    typeOfTrailer: string;
    stateOfRegistration: string;
    engineNumber: string;
    compliancePlate: string;
    ownershipStatus: string;
    registrationStatus: string;
    insuranceCompanyName: string;
    policyNumber: string;
    vehicleInsuranceStartDate: string;
    renewalDate: string;
    dateValidUntil: string;
    daysLeft: string;
    insuranceCoverage: string;
    insuranceStatus: string;
    situation: string;
    truckOdometer: string;
    images: [];
    rentedCompanyName: string;
    dateOfHire: string;
    contractValidTill: string;
    term: string;
    weeklyRent: string;
    tax: string;
    paymentMethod: string;
    bankName: string;
    accountNumber: string;
    accountName: string
}

export interface DriverDetails {
    firstName: string,
    middleName: string,
    lastName: string,
    dateOfBirth: string,
    avatar: string;
    email: string,
    mobile: string,
    currentAddress: {
        houseNumber: number,
        street: string,
        suburb: string,
        state: string,
        country: string,
        pincode: string,
    }
    permanentAddress: {
        houseNumber: number,
        street: string,
        suburb: string,
        state: string,
        country: string,
        pincode: string,
    }
    emergencyContactInformation: {
        contactName: string,
        contactNumber: string,
        relationship: string
    }
    employmentHistory: [{
        previousEmployer: string,
        yearsOfExperience: string,
        reasonOfLeaving: string,
        companyName: string,
        referenceContactName: string,
        referenceEmailId: string,
        referenceContactNumber: string
    }]
    licenseDetails: {
        licenseNumber: string,
        licenseCardNumber: string,
        licenseType: string,
        state: string,
        dateOfIssue: string,
        expiryDate: string,
        daysLeftForRenewal: string,
        documents: []
    }
    specialDrivingLicense: string,

    visaStatus: {
        type: string,
        uploadDate: Date
    },
    driverLicenseFront: {
        type: string,
        uploadDate: Date
    },
    driverLicenseBack: {
        type: string,
        uploadDate: Date
    },
    licenseHistory: {
        type: string,
        uploadDate: Date
    },
    policeVerification: {
        type: string,
        uploadDate: Date
    },
    passportFront: {
        type: string,
        uploadDate: Date
    },
    passportBack: {
        type: string,
        uploadDate: Date
    },
    healthInsurance: {
        type: string,
        uploadDate: Date
    },
    driverCertificate: {
        type: string,
        uploadDate: Date
    },
    fitness: {
        type: string,
        uploadDate: Date
    },
    drugTest: {
        type: string,
        uploadDate: Date
    },
}