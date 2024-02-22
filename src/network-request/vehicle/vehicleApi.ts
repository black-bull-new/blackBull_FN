import axios from "axios"

const customerBaseUrl = "http://localhost:1800/api/v1"


export const addVehicle = async (data: any, token: string) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/add-vehicle`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            }
        })
        return response
    } catch (error) {
        console.log('error', error)
        return error
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPLOAD REGO DOCUMENTS FOR VEHICLE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

export const uploadVehicleRegoDocuemnts = async (selectedFile: any) => {
    const formData = new FormData();
    formData.append("files", selectedFile)
    return await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/onboarding-profile`,
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