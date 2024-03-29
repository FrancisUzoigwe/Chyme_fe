
import axios from "axios"
import Swal from "sweetalert2"
const url: string = "https://techify-be.onrender.com"


export const spinUp = async () => {
    try {
        return await axios.get(`${url}`).then((res: any) => {
            console.log("Connection Established:", res?.data.message)
        })
    } catch (error: any) {
        console.log(error?.message)
    }
}


export const registerApi = async (data: any) => {
    try {
        return await axios.post(`${url}/api/register`, data).then((res: any) => {
            return res.data?.data

        })
    } catch (error: any) {
        console.log(error)
    }
}


export const signinApi = async (data: any) => {
    try {
        return await axios.post(`${url}/api/signin`, data).then((res: any) => {
            return res.data?.data
        })
    } catch (error: any) {
        Swal.fire({
            title: "Error occurred",
            text: `${error?.response.data?.message}`,
            icon: "error",
            timer: 3000,
            timerProgressBar: true
        })
    }
}

export const verifiedApi = async (userID: any) => {
    try {
        return await axios.patch(`${url}/api/${userID}/verify-account`).then((res: any) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error)
    }
}