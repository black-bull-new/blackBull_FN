import axios from "axios";

const supplierBaseUrl = "http://localhost:1800/api/s1";

export const addSupplierIntoSupplier = async (data: any, token: string) => {
  try {
    const response = await axios.post(`${supplierBaseUrl}/add-supplier`, data, {
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
