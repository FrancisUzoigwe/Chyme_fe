
import axios from "axios"

const url: string = "https://techify-be.onrender.com/api"

export const registerApi = async (data: any) => {
    try {
        return await axios.post(`${url}/register`, data).then((res: any) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error)
    }
}


export const signinApi = async (data: any) => {
    try {
        return await axios.post(`${url}/signin`, data).then((res: any) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error)
    }
}


export const verifiedApi = async (userID: any) => {
    try {
        return await axios.patch(`${url}/${userID}/verify-account`).then((res: any) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error)
    }
}