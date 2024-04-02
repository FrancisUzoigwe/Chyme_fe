
import { motion } from "framer-motion";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";

const Faq = () => {
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
        className="flex flex-col items-center w-full"
      >
        <div>FAQ</div>
      </motion.div>
    </div>
  );
};

export default Faq;
