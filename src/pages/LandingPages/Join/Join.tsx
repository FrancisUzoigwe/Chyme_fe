import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Zoom } from "react-swift-reveal";

const Join = () => {
  return (
    <div className=" min-h-[350px]  max-md:h-[500px] flex items-center justify-center mb-[70px]">
      <div className="bg-[#EFF1FF] w-[85%] h-[100%] rounded-[10px] flex items-center justify-evenly flex-wrap max-md:justify-center max-md:h-[95%]">
    <Zoom>

        <div className=" w-[40%] h-[90%] max-md:h-fit flex gap-[30px] justify-center flex-col max-md:w-[90%] ">
          <div className="flex gap-[8px] flex-col">
            <h2 className="font-[900] text-[35px] leading-[43px] text-[#40196D] w-[80%]">
              The money app for Africans.
            </h2>
            <h4 className="font-[400] text-[15px]">
              Save, spend, send and invest money across borders.
            </h4>
          </div>
          <div className="w-[80%] max-md:flex-col max-md:items-center flex justify-between  items-center ">
            <Link to="/register">
              <button className="py-3 px-5 rounded-md text-white flex items-center bg-[#40196D]">
                Create Account{" "}
                <i className="ml-2 ">
                  <FaArrowRight />
                </i>
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[40%] h-[90%] max-md:h-[250px] flex items-end justify-center max-md:w-[90%]">
          <img
            className="h-[90%]"
            src="https://res.cloudinary.com/dbpcptmco/image/upload/v1711373440/undraw_transfer_money_re_6o1h_b5i0t5.svg"
            alt=""
          />
        </div>
    </Zoom>
      </div>
    </div>
  );
};

export default Join;
