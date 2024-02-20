import axios from "axios";

const supplierDriverBaseUrl = "http://localhost:1800/api/s1/d1";

export const addSupplierDriver = async (data: any, token: string) => {
    try {
        const response = await axios.post(`${supplierDriverBaseUrl}/supplier-driver`, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${token}`
            }
        })
        return response
    } catch (error: any) {
        console.log({ error })
        return error;
    }
}