import axios from "axios";

const supplierBaseUrl = "http://localhost:1800/api/s1";

export const addSupplierIntoSupplier = async (data: any, token: string) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/s1/add-supplier`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

// Uploading profile ..
export const uploadSupplierProfile = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-profile`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}

// ==================================================== Insurance Documents =====================================================
export const uploadSupplierProductLiabilityDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-product-liability`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}

export const uploadSupplierPublicLiabilityDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-public-liability`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}

export const uploadSupplierWorkCoverDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-work-cover`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}

export const uploadSupplierMarineDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-marine`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}

export const uploadSupplierMarineAlcoholDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-marine-alcohol`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}

export const uploadSupplierCocDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-coc`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}


// ==================================================== Compliance Documents =====================================================
export const uploadSupplierComplianceDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/s1/supplier-compliance-documents`,
      formData,
      {
        withCredentials: false
      }
    ).
    then((response) => {
      console.log({ response })
      return response?.data
    }).catch((error) => {
      console.log({ error })
      return error
    })
}