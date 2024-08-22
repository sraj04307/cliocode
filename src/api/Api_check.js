import axios from "axios";

export const blogApi = async (url) =>{
    try {
        const response = await axios.get(url)

        return response
        
    } catch (error) {
        return error
    }
}
export const headerApi = async (url) =>{
    try {
        const response = await axios.get(url)

        return response
        
    } catch (error) {
        return error
    }
}