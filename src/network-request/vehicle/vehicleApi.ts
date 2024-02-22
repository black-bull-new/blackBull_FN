import axios from "axios";

const customerBaseUrl = "http://localhost:1800/api/v1";

export const addVehicle = async (data: any, token: string) => {
  try {
    const response = await axios.post(`${customerBaseUrl}/add-vehicle`, data, {
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

export const getAllVehicle = async (token: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_API_URL_V1}/vehicle`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getVehicle = async (token: string, id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_API_URL_V1}/vehicle/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const editVehicle = async (token: string, id: string, data: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_APP_API_URL_V1}/vehicle/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteVehicle = async (token: string, id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_APP_API_URL_V1}/vehicle/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
// export const addVehicle = async (data: any, token: string) => {
//     try {
//         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/add-vehicle`, data, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Basic ${token}`
//             }
//         })
//         return response
//     } catch (error) {
//         console.log('error', error)
//         return error
//     }
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPLOAD REGO DOCUMENTS FOR VEHICLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

export const uploadVehicleRegoDocuemnts = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/v1/upload`,
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


export const uploadMulitpleVehicleDocuments = async (selectedFile: any) => {
  const formData = new FormData();
  formData.append("files", selectedFile)
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/v1/vehicle-documents`,
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