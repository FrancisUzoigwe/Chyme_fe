import { useState } from "react";
import { BsFillGridFill, BsBookmarkDashFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";
import { IoDocumentText, IoSearchSharp } from "react-icons/io5";
import { IoMdStar, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { SiMastercomfig } from "react-icons/si";
import img3 from "../../assets/profile.png";
import { FiMenu } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const MobileSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location?.pathname;

  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  return (
    <div className="w-[82%] absolute  right-0  rounded-tl-[30px] md:rounded-tl-none sm:rounded-tl-none rounded-bl-[30px] md:rounded-bl-none sm:rounded-bl-none p-[20px] md:p-0 sm:p-0 sm:w-[100%] md:w-[100%] ">
      <div className="w-[100%] p-[20px] hidden md:flex sm:flex fixed sm:fixed justify-between z-[80] sm:flex-col sm:h-[130px] h-[70px] border-b border-[#F1F1F1] bg-white">
        <div className="w-[100%] flex justify-between sm:items-center">
          <div className="flex items-center">
            <div
              onClick={Toggle}
              className="text-[25px] sm:text-[20px] text-[#54657E] mr-[12px] cursor-pointer"
            >
              <FiMenu />
            </div>
            <div className="flex items-center">
            <div className="text-[black] font-black flex items-center text-[23px]">
                {" "}
                <div className="mr-2">
                  <SiMastercomfig />
                </div>
                AJMoney
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden items-center w-[270px] h-[30px] bg-[#4f41bc1a] rounded-full overflow-hidden md:flex">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"
              />
              <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
                <IoSearchSharp />
              </div>
            </div>

            <div className="text-primary ml-[20px] text-[22px] relative cursor-pointer hidden sm:flex md:flex">
              <FaBell />
              <div className="w-[10px] h-[10px] rounded-full bg-[#EA8F95] absolute right-[0px] top-[3px]"></div>
            </div>

            <div className="flex items-center ml-[20px] cursor-pointer mb-[5px]">
              <div className="w-[35px] h-[35px] rounded-full sm:h-[28px] sm:w-[28px]">
                <img
                  src={img3}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <p className="ml-[7px] text-[14px] text-[#54657E] sm:hidden">
                Danielle Campbell
              </p>
              <div className="text-[#54657E] ml-[15px]">
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:w-[100%] items-center w-[270px] h-[30px] sm:h-[35px] bg-[#4f41bc1a] rounded-full overflow-hidden sm:flex md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-[100%] outline-none pl-[13px] pr-[10px] bg-transparent text-[13px] placeholder:text-primary"
          />
          <div className="w-[35px] h-[100%] flex justify-center items-center text-primary">
            <IoSearchSharp />
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-[70px] sm:top-[130px] bg-[rgba(0,0,0,0.5)] sm:z-[100] w-[100%] h-[100vh] ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`w-[30%] sm:w-[55%] flex flex-col p-[15px] h-full bg-[#fff] fixed  duration-500 ease-out left-0 transition-transform transform ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            onClick={() => {
              navigate("/");
            }}
            className={`w-[100%] mt-[30px] sm:mt-[5px] min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] rounded-lg cursor-pointer 
          ${active === "/" ? "bg-primary text-white" : "text-primary"}`}
          >
            <div className="text-[20px]  font-bold">
              <BsFillGridFill />
            </div>
            <div className="font-medium  text-[15px] ml-[20px] ">Home</div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[20px]  font-bold">
                <IoDocumentText />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Send</div>
            </div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[20px]  font-bold">
                <BsBookmarkDashFill />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">
               Pay
              </div>
            </div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/"
                  ? "bg-primary text-white"
                  : "text-primary"
              }`}
            >
              <div className="text-[22px]  font-bold">
                <IoMdStar />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">
                Budget
              </div>
            </div>
          </div>

          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[22px]  font-bold">
                <RiHeartPulseFill />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Card</div>
            </div>
          </div>
          <div className="w-[100%] flex-col">
            <div
              onClick={() => {
                navigate("/");
              }}
              className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
                active === "/" ? "bg-primary text-white" : "text-primary"
              }`}
            >
              <div className="text-[22px]  font-bold">
                <RiHeartPulseFill />
              </div>
              <div className="font-medium  text-[15px] ml-[20px] ">Account</div>
            </div>
          </div>

        
        </div>
      </div>

    
    </div>
  );
};

export default MobileSideBar;
