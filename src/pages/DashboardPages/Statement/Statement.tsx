import { motion } from "framer-motion";
import Nigeria from "../../../assets/NG.png";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";

const Statement = () => {
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

  const navigate = useNavigate();
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
        <div className="text-[20px] my-3 font-bold text-[#40196D] flex items-center">
          Statement{" "}
          <img
            src={Nigeria}
            alt="Nigeria"
            className="ml-2 w-[40px] h-[40px] text-[12px]"
          />
        </div>
        <div className="my-1" />
        <div className="w-[50%] max-md:w-[90%] py-[20px] h-[80%] flex flex-col items-center border rounded-md shadow-md">
          <div className="w-[95%] items-center  my-2">
            <div
              className="flex items-center hover:cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div>
                <MdChevronLeft className="text-2xl" />
              </div>
              <div className="ml-1">Back</div>
            </div>
          </div>
          <div className="text-[20px] font-black my-2">Get Statement</div>
          <div className="text-[15px]">
            Choose a timeframe for your statement.
          </div>
          {/* Input part */}
          <div className="flex flex-col w-[85%] my-3">
            <div className="text-[15px] my-1">Start Date</div>
            <div className="shadow-md outline-none flex items-center justify-center rounded-md h-[45px] border pl-5 relative">
              Select Date
            </div>
            <div className="w-[90%] flex items-center justify-center"></div>
          </div>
          <div className="flex flex-col w-[85%] my-3">
            <div className="text-[15px] my-1">Finish Date</div>
            <div className="shadow-md outline-none flex items-center justify-center rounded-md h-[45px] border pl-5 relative">
              Select Date
            </div>
            <div className="w-[90%] flex items-center justify-center"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Statement;
