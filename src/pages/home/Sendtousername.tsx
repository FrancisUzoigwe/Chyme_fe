import { motion } from "framer-motion"
import { MdChevronLeft } from "react-icons/md"
import { RiInbox2Fill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { IoIosSearch } from "react-icons/io"
import image from "../../assets/NG.png"
import { useDispatch } from "react-redux"
import { changeToggled } from "../../global/globalState"

const Sendtousername = () => {

    const motionVariant = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
        close: {
            opacity: 0,
            y: "100px",
        },
    };
    const navigate = useNavigate()
    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(changeToggled())
    }, 10000)
    return (
        <>
            <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center" onClick={() => {
                dispatch(changeToggled())
            }}>
                <div className="flex items-center font-bold text-[20px] my-3 text-[#40196D]">Send to AjMoney  <img src={image} alt="Nigeria" className="w-[40px] ml-1 h-[40px]" /></div>
                <div className="w-[50%] max-md:w-[90%] flex flex-col items-center border rounded-md min-h-[50%]">
                    <div className="flex items-center w-[90%] my-3 ">
                        <div className="flex items-center hover:cursor-pointer" onClick={() => {
                            navigate(-1)
                        }}>
                            <div><MdChevronLeft /></div>
                            <div className="ml-1">Back</div>
                        </div>
                    </div>
                    <div className="font-black text-[17px] my-4 flex items-center">Send to AJMoney <img src={image} className="w-[40px] ml-1 h-[40px]" alt="Nigeria" /></div>

                    <div className="w-[90%] h-[45px] rounded-md shadow-md border relative overflow-hidden flex items-center">
                        <div className="ml-2"><IoIosSearch className="text-2xl" /></div>
                        <input type="text" className="h-full w-full outline-none pl-3 relative" placeholder="@username" />
                    </div>
                    <div className="my-5 w-full flex items-center flex-col">
                        <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-gray-400"><RiInbox2Fill className="text-white text-3xl" /></div>
                        <div className="my-3 font-black">What's their @username?</div>
                        <div className="text-center text-gray-400">Type in the @username of the recipient.</div>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default Sendtousername