import axios from "axios";

const customerBaseUrl = "http://localhost:1800/api";

export const createUser = async (data: any, token: string) => {
  try {
    const response = await axios.post(
      `${customerBaseUrl}/onboarding-user`,
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
