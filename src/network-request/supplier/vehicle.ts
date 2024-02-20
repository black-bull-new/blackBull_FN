import axios from "axios";

const vehicleBaseUrl = "http://localhost:1800/api/s1/v1";

export const addVehicleIntoSupplier = async (data: any, token: string) => {
  try {
    const response = await axios.post(
      `${vehicleBaseUrl}/supplier-vehicle`,
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
    return error;
  }
};
