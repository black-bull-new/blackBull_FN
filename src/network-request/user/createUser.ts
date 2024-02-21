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

export const getAllUser = async (token: string) => {
  try {
    const response = await axios.get(`${customerBaseUrl}/onboarding-list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getUser = async (token: string, id: string) => {
  try {
    const response = await axios.get(
      `${customerBaseUrl}/onboarding-list/${id}`,
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

export const editUser = async (token: string, id: string, data: any) => {
  try {
    const response = await axios.put(
      `${customerBaseUrl}/onboarding-list/${id}`,
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

export const deleteUser = async (token: string, id: string) => {
  try {
    const response = await axios.delete(
      `${customerBaseUrl}/onboarding-list/${id}`,
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
