

import { motion } from "framer-motion"
const Budget = () => {
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
    <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center">
      <div className="my-3 text-[20px] font-bold text-[#40196D]">Budget</div>
      <div className="border max-md:w-[90%] md:w-[60%] xl:w-[40%] rounded-md shadow-md h-[70%] flex flex-col items-center">
        <div className="my-3 text-[18px] font-bold">Budgeting is coming soon</div>
        <div className="font-thin">We'll let you know when it's ready</div>
      </div>
    </motion.div>
  )
}

export default Budget