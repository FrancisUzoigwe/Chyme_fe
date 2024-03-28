import { motion } from "framer-motion"
import { BsClockFill } from "react-icons/bs"
const Card = () => {

  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    },
    close: {
      opacity: 0,
      y: "100px"
    }
  }
  return (
    <>
      <motion.div variants={motionVariant} initial="close" animate="open" className="w-full flex flex-col items-center min-h-[100vh]">
        <div className="text-[20px] font-bold my-3 text-[#40196D]">Cards</div>
        <div className="w-[50%] max-md:w-[90%] border shadow-md rounded-md min-h-[50%] flex flex-col items-center">
          <div className="text-[20px] font-bold my-3 text-[#40196D]">Feature Coming soon</div>
          <div><BsClockFill className="text-[#ffd23f] text-9xl"/></div>
        </div>
      </motion.div>
    </>
  )
}

export default Card