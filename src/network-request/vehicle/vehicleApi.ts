import axios from "axios"

const customerBaseUrl = "http://localhost:1800/api/v1"


export const addVehicle = async (data:any, token:string)=>{
    try {
        const response = await axios.post(`${customerBaseUrl}/add-vehicle`, data, {
             headers:{
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