
import { motion } from "framer-motion";
import { BsClockFill } from "react-icons/bs";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";

const Card = () => {
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
  return (
    <div className="w-[82%] bg-white absolute  right-0 h-[100%] rounded-tl-[30px] md:rounded-tl-none sm:rounded-tl-none rounded-bl-[30px] md:rounded-bl-none sm:rounded-bl-none p-[20px] md:p-0 sm:p-0 sm:w-[100%] md:w-[100%] ">
      <div>
        <MobileSideBar />
      </div>

      <motion.div
        variants={motionVariant}
        initial="close"
        animate="open"
        className="md:mt-[100px] sm:mt-[150px] md:p-[20px] sm:p-[20px] h-[90%] flex items-center  flex-col"
      >
         <div className="text-[20px] font-bold my-3 text-[#40196D]">Cards</div>
        <div className="w-[50%] max-md:w-[90%] border shadow-md rounded-md min-h-[50%] flex flex-col items-center">
          <div className="text-[20px] font-bold my-3 text-[#40196D]">Feature Coming soon</div>
          <div><BsClockFill className="text-[#ffd23f] text-9xl"/></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
