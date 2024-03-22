import { SiMastercomfig } from "react-icons/si"
import { FaHome } from "react-icons/fa"
import { BsSend } from "react-icons/bs"
import { IoPieChartOutline } from "react-icons/io5"
import { CiCreditCard2, CiReceipt } from "react-icons/ci"
import { HiOutlineMenu } from "react-icons/hi"
import image from "../../../public/vite.svg"
const MainHeader = () => {
  return (

    <header className="w-full h-[50px] flex items-center justify-center ">
      <header className="w-full h-[50px] flex items-center justify-center fixed bg-white shadow-md">
        <header className="w-[90%] flex justify-between items-center">
          <div className="text-[#40196D] font-black flex items-center" > <div className="mr-2"><SiMastercomfig /></div>Chyme</div>
          <div className="flex items-center justify-center max-md:hidden text-[#40196D]">
            <div className="flex items-center  mx-4"><FaHome className="mx-1 text-[20px]" />Home </div>
            <div className="flex items-center mx-4"><BsSend className="mx-1 text-[20px]" />Send </div>
            <div className="flex items-center mx-4"><CiReceipt className="mx-1 text-[20px]" />Pay </div>
            <div className="flex items-center mx-4"><IoPieChartOutline className="mx-1 text-[20px]" />Budget </div>
            <div className="flex items-center mx-4"><CiCreditCard2 className="mx-1 text-[20px]" />Card </div>

          </div>
          <div className="flex  items-center justify-center">
            <img alt="Img" src={image} className="w-[35px] h-[35px] rounded-full mr-1 border " />
            <div className="max-md:text-[14px]">Account</div>
            <div className="hidden max-md:block ml-3 text-2xl hover:cursor-pointer"><HiOutlineMenu /></div>
          </div>
        </header>
      </header>
    </header>
  )
}

export default MainHeader