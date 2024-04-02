import { motion } from "framer-motion";
import { MdChevronLeft } from "react-icons/md";
import { RiInbox2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import image from "../../../assets/NG.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeToggled } from "../../../Components/global/globalState";
import MobileSideBar from "../../../Components/blocks/MobileSideBar";

const Sendtousername = () => {
  const dispatch = useDispatch();
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
  setTimeout(() => {
    dispatch(changeToggled());
  }, 10000);

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
        className="w-full min-h-[100vh] flex flex-col items-center"
        onClick={() => {
          dispatch(changeToggled());
        }}
      >
        <div className="flex items-center font-bold text-[20px] my-3 text-[#40196D]">
          Send to AjMoney{" "}
          <img src={image} alt="Nigeria" className="w-[40px] ml-1 h-[40px]" />
        </div>
        <div className="w-[50%] max-md:w-[90%] flex flex-col items-center border rounded-md min-h-[50%]">
          <div className="flex items-center w-[90%] my-3 ">
            <div
              className="flex items-center hover:cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div>
                <MdChevronLeft />
              </div>
              <div className="ml-1">Back</div>
            </div>
          </div>
          <div className="font-black text-[17px] my-4 flex items-center">
            Send to AJMoney{" "}
            <img src={image} className="w-[40px] ml-1 h-[40px]" alt="Nigeria" />
          </div>

          <div className="w-[90%] h-[45px] rounded-md shadow-md border relative overflow-hidden flex items-center">
            <div className="ml-2">
              <IoIosSearch className="text-2xl" />
            </div>
            <input
              type="text"
              className="h-full w-full outline-none pl-3 relative"
              placeholder="@username"
            />
          </div>
          <div className="my-5 w-full flex items-center flex-col">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-gray-400">
              <RiInbox2Fill className="text-white text-3xl" />
            </div>
            <div className="my-3 font-black">What's their @username?</div>
            <div className="text-center text-gray-400">
              Type in the @username of the recipient.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sendtousername;
