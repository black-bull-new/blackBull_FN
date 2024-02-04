import axios from "axios"




const DRIVER_BASE_URL = 'http://localhost:1800/api/d1'
// export const getAlldriversList = async()=>{
//     const response = await axios.get('http://localhost:1800/api/d1/add-driver')
// }


export const addDriver = async (data:any, token:string)=>{
    try {     
        const response = await axios.post(`${DRIVER_BASE_URL}/add-driver`,data, {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`  
            }
        })
        return response
    } catch (error) {
        console.log('error', error) 
    }
}



export const getAllDrives = async(token:string)=>{
    try {
        const response = await axios.get(`${DRIVER_BASE_URL}/drivers`,{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log('error', error) 
    }
}