import { Outlet } from "react-router-dom"
import AuthHeader from "../components/common/AuthHeader"
import Footer from "../components/common/Footer"
import { useDispatch } from "react-redux"
import { changeToggled } from "../global/globalState"

const AuthLayout = () => {
    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(changeToggled())
    }, 10000)

    // setTimeout(() => {
    //     dispatch(logOut())
    // }, 100000)
    return (
        <div>
            <AuthHeader />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AuthLayout