import { useDispatch, useSelector } from "react-redux"
import { changeToggled, logOut } from "../../global/globalState"
import { IoClose, IoPieChartOutline } from "react-icons/io5"
import { motion } from "framer-motion"
import image from "../../../public/vite.svg"
import { FaHome } from "react-icons/fa"
import { CiCreditCard2, CiLogout, CiReceipt } from "react-icons/ci"
import { BsSend } from "react-icons/bs"
import { Link } from "react-router-dom"

const SiderBar = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)



    const motionVariant = {
        open: {
            width: "300px",
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
        close: {
            width: "0px",
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    }
    return (
        <motion.div variants={motionVariant} initial={false} animate={toggle ? "open" : "close"} className={`absolute ${toggle ? "w-[300px]" : "w-0"} top-0 h-screen max-md:flex hidden z-[300]`}>
            <div className="fixed w-[300px] bg-white h-full">
                <div className="top-4 right-4 absolute"><IoClose className="text-2xl hover:cursor-pointer" onClick={() => {
                    dispatch(changeToggled())
                }} />
                </div>
                <div className="mt-4 ml-4 flex items-center left-4">
                    <img src={image} alt="Image" className="w-[40px] h-[40px] rounded-full border mr-2 " />
                    <div className="text-[14px]">Account</div>
                </div>
                <div className="mt-5 ml-4 left-4 top-16 text-[#40196D]">
                    <Link to="/auth">         <div className="my-7 flex items-center " onClick={() => {
                        dispatch(changeToggled())
                    }}><FaHome className="mr-2 text-2xl" />Home</div></Link>
                    <Link to="/auth/send"> <div className="my-7 flex items-center " onClick={() => {
                        dispatch(changeToggled())
                    }} ><BsSend className="mr-2 text-2xl" />Send</div></Link>
                    <Link to="/auth/pay"> <div className="my-7 flex items-center " onClick={() => {
                        dispatch(changeToggled())
                    }} ><CiReceipt className="mr-2 text-2xl" />Pay</div></Link>
                    <Link to="/auth/budget">  <div className="my-7 flex items-center " onClick={() => {
                        dispatch(changeToggled())
                    }} ><IoPieChartOutline className="mr-2 text-2xl" />Budget</div></Link>
                    <Link to="/auth/card">  <div className="my-7 flex items-center " onClick={() => {
                        dispatch(changeToggled())
                    }} ><CiCreditCard2 className="mr-2 text-2xl" />Card</div></Link>
                </div>
                <div className="flex items-center absolute bottom-7 left-4 text-[red]">
                    <div className="relative flex items-center hover:cursor-pointer" onClick={() => {
                        dispatch(changeToggled())
                        dispatch(logOut())
                    }}><CiLogout className="text-2xl mr-2" />LogOut</div>
                </div>
            </div>
        </motion.div>
    )
}

export default SiderBar