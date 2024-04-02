import { motion } from "framer-motion";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";

const Budget = () => {
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
    <div className="w-[82%] bg-[white] absolute  right-0 h-[100%] rounded-tl-[30px] md:rounded-tl-none sm:rounded-tl-none rounded-bl-[30px] md:rounded-bl-none sm:rounded-bl-none p-[20px] md:p-0 sm:p-0 sm:w-[100%] md:w-[100%] ">
      <div>
        <MobileSideBar />
      </div>

      <motion.div
        variants={motionVariant}
        initial="close"
        animate="open"
        className="md:mt-[100px] sm:mt-[150px] md:p-[20px] sm:p-[20px]  h-[90%] flex items-center  flex-col"
      >
        <div className="my-3 text-[20px] font-bold text-[#40196D]">Budget</div>
        <div className="border max-md:w-[90%] md:w-[60%] xl:w-[40%] rounded-md shadow-md h-[70%] flex flex-col items-center">
          <div className="my-3 text-[18px] font-bold">
            Budgeting is coming soon
          </div>
          <div className="font-thin">We'll let you know when it's ready</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Budget;
