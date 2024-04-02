import img6 from "../../../assets/bit.png";
import img7 from "../../../assets/bits.png";
import img8 from "../../../assets/bitss.png";
import img9 from "../../../assets/mar.png";
import img10 from "../../../assets/rec.png";
import img11 from "../../../assets/mask.png";
import { PiArrowUpRightFill } from "react-icons/pi";

const Card = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img11})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow:
          "0 10px 15px -3px rgba(69, 51, 201, 0.3), 0 4px 6px -2px rgba(69, 51, 201, 0.5)",
      }}
      className="w-[100%] md:w-[42%] rounded-lg overflow-hidden relative"
    >
      <div className="w-[100%] h-[100%] p-[16px] bg-[#4f41bcde] flex flex-col">
        <p className="text-white text-[13px]">Danielle Francis</p>
        <div className="w-[100%] flex items-center justify-between">
          <h3 className="text-[23px] text-[#fff] font-[700]">**** **** **** 1234</h3>
          <div className="flex items-center">
            <img src={img6} alt="" className="h-[50px] z-30" />
            <img src={img7} alt="" className="h-[50px] ml-[-22px] z-20" />
            <img src={img8} alt="" className="h-[50px] ml-[-22px] z-10" />
            <div className="w-[33px] h-[33px] bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-900 rounded-full mb-[10px] flex justify-center items-center text-[#fff] text-[13px] ml-[-18px]">
              +4
            </div>
            <img
              src={img9}
              alt=""
              className="h-[32px] mb-[9px] ml-[30px] cursor-pointer"
            />
          </div>
        </div>
        

        <div className="w-[100%] flex flex-col mt-[20px] relative">
          <p className="text-white text-[13px]">Cleared Qeue</p>
          <h3 className="text-[23px] text-[#fff] font-[700]">1.4k</h3>
          <div className="flex items-center">
            <div className="w-[19px] h-[19px] bg-[#FFD84D] rounded-full flex justify-center items-center text-[13px] text-primary ">
              <PiArrowUpRightFill />
            </div>
            <p className="text-[13px] text-white ml-[5px]">+15%</p>
          </div>
          <img src={img10} alt="" className="absolute right-[3px] h-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
