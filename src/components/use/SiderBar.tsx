import { useDispatch, useSelector } from "react-redux"
import { changeToggled } from "../../global/globalState"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

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
        <motion.div variants={motionVariant} initial={false} animate={toggle ? "open" : "close"} className={`absolute ${toggle ? "w-[300px]" : "w-0"} top-0 h-screen max-md:flex hidden`}>
            <div className="fixed w-[300px] bg-purple-700 h-full">
                <div className="top-4 right-4 absolute"><IoClose className="text-2xl hover:cursor-pointer" onClick={() => {
                    dispatch(changeToggled())
                }} /></div>
            </div>
        </motion.div>
    )
}

export default SiderBar