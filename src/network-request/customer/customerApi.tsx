import axios from "axios"

const customerBaseUrl = "http://localhost:1800/api/c1"


export const addCustomer = async (data:any, token:string)=>{
    try {
        const response = await axios.post(`${customerBaseUrl}/add-customer`, data, {
             headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
             }      
        })
        return response
    } catch (error) {
        console.log('error', error)
        return error
    }
}