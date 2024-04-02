import img4 from "../../assets/rocket.png";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";
import { SiMastercomfig } from "react-icons/si";
import { BsSend } from "react-icons/bs";
import { IoPieChartOutline } from "react-icons/io5";
import { CiCreditCard2, CiReceipt } from "react-icons/ci";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location?.pathname;
  return (
    <div className="w-[20%] h-[100vh] bg-[#40196D] flex flex-col pt-[40px] pl-[10px] pr-[20px] fixed md:hidden sm:hidden">
      <div className="flex items-center pl-[18px]">
        <div className="text-[white] font-black flex items-center text-[35px] animate-pulse">
          {" "}
          <div className="mr-2">
            <SiMastercomfig />
          </div>
          AJMoney
        </div>
      </div>

      <div className="w-[73%] h-[1px] bg-[#969696] ml-[13px] mt-[20px]"></div>

      <div
        onClick={() => {
          navigate("/dashboard");
        }}
        className={`w-[75%] mt-[30px] ml-[13px] min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] rounded-lg cursor-pointer 
          ${active === "/dashboard" ? "bg-white text-primary" : "text-[#fff]"}`}
      >
        <div className="text-[20px]  font-bold">
          <BsFillGridFill />
        </div>
        <div className="font-medium  text-[15px] ml-[20px] ">Home</div>
      </div>

      <div className="w-[79%] ml-[13px] flex-col">
        <div
          onClick={() => {
            navigate("/dashboard/send");
          }}
          className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/dashboard/send"
              ? "bg-white text-primary"
              : "text-white"
          }`}
        >
          <div className="text-[17px]  font-bold">
            <BsSend />
          </div>
          <div className="font-medium  text-[15px] ml-[20px] ">Send</div>
        </div>
      </div>

      <div className="w-[79%] ml-[13px] flex-col">
        <div
          onClick={() => {
            navigate("/dashboard/pay");
          }}
          className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/dashboard/pay" ? "bg-white text-primary" : "text-white"
          }`}
        >
          <div className="text-[17px]  font-bold">
            <CiReceipt />
          </div>
          <div className="font-medium  text-[15px] ml-[20px] ">Pay</div>
        </div>
      </div>

      <div className="w-[79%] ml-[13px] flex-col">
        <div
          onClick={() => {
            navigate("/dashboard/budget");
          }}
          className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/dashboard/budget"
              ? "bg-white text-primary"
              : "text-white"
          }`}
        >
          <div className="text-[17px]  font-bold">
            <IoPieChartOutline />
          </div>
          <div className="font-medium  text-[15px] ml-[20px] ">Budget</div>
        </div>
      </div>

      <div className="w-[79%] ml-[13px] flex-col">
        <div
          onClick={() => {
            navigate("/dashboard/card");
          }}
          className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/dashboard/card"
              ? "bg-white text-primary"
              : "text-white"
          }`}
        >
          <div className="text-[17px]  font-bold">
            <CiCreditCard2 />
          </div>
          <div className="font-medium  text-[15px] ml-[20px] ">Card</div>
        </div>
      </div>

      <div className="w-[79%] ml-[13px] flex-col">
        <div
          onClick={() => {
            navigate("/dashboard/my-account");
          }}
          className={`w-full min-h-[40px] flex justify-start rounded-lg items-center pl-[20px] mb-[5px] cursor-pointer ${
            active === "/dashboard/my-account"
              ? "bg-white text-primary"
              : "text-white"
          }`}
        >
          <div className="text-[17px]  font-bold">
            <RiHeartPulseFill />
          </div>
          <div className="font-medium  text-[15px] ml-[20px] ">Account</div>
        </div>
      </div>

      <div className="w-[160px] bg-white ml-[20px] pl-[25px] pr-[25px] pt-[20px] pb-[20px] mt-[45px] flex flex-col items-center justify-center rounded-lg">
        <div className="w-[100%]">
          <img src={img4} alt="" className="h-[70px]" />
        </div>
        <h3 className="text-[13px] font-[500] mt-[5px]">Want to upgrade</h3>
        <button className="w-[100%] bg-secondaryAscent rounded-full h-[35px] flex justify-center items-center text-[#fff] text-[13px] mt-[13px]">
          Coming Soon !!
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
