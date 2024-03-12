import { useDispatch, useSelector } from "react-redux"
import { changeToggled } from "../../global/globalState"
import { IoClose } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

const SiderBar = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    const navigate = useNavigate()

    return (
        <div className={`${toggle ? "fixed z-[9999] top-0  left-0 w-full h-full backdrop-blur-sm bg-purple-900 opacity-90 text-white lg:hidden" : "hidden"} flex flex-col items-center`}>
            <div className="absolute right-6 top-4" onClick={() => {
                dispatch(changeToggled())
            }}><div className="opacity-100">
                    <IoClose className="text-3xl z-50   hover:cursor-pointer text-black opacity-100 " />
                </div>
            </div>
            <div className="flex flex-col items-center my-20">
                <Link to="home" duration={1000} smooth={true}>
                    <div className="my-3 hover:cursor-pointer" onClick={() => {
                        dispatch(changeToggled())
                    }}>Chyme</div>
                </Link>
                <div className="my-3 hover:cursor-pointer" onClick={() => {
                    navigate("/signin")
                }}>Signin</div>

                <div className="my-3 hover:cursor-pointer" onClick={() => {
                    navigate("/register")
                }}>Register</div>
                <div className="my-3 ">Send Cash</div>
                <div className="my-3 ">Recieve Cash</div>
            </div>
        </div>
    )
}

export default SiderBar