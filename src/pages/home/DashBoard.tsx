import { RxDotsHorizontal } from "react-icons/rx"
import { GiNigeria } from "react-icons/gi"
import { MdChangeCircle } from "react-icons/md"
import { IoIosClose, IoMdAddCircle } from "react-icons/io"
import { useState } from "react"
import { TbTransfer } from "react-icons/tb"
import { PiDotsNineLight, PiDotsSixVerticalLight, PiDotsSixThin } from "react-icons/pi"
import image from "../../../public/vite.svg"
const DashBoard = () => {

  const [state, setState] = useState<boolean>(false)
  const onState = () => {
    setState(!state)
  }
  return (
    <>
      <div className="w-full min-h-[100vh] flex items-center flex-col bg-[#FFFFFF]">
        <div className="w-[50%] max-lg:w-[80%] max-md:w-[95%] flex flex-col items-center h-full my-5">
          <div className="w-full max-md:flex-col-reverse flex flex-col">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center">
                  <div><RxDotsHorizontal className="text-[40px] max-md:text-[30px] my-2 mx-3 px-2 rounded-full bg-gray-400 hover:bg-gray-800 transition duration-300 hover:cursor-pointer hover:text-white max-md:hidden" /></div>
                  <div><GiNigeria className="text-green-600 text-5xl max-md:text-3xl" /></div>
                  <div className="mx-3 text-3xl max-md:text-xl font-black hover:cursor-pointer" onClick={() => {
                    onState()
                  }}><span className="mx-1">₦</span>{state ? "300,000.00" : "*****"}</div>
                </div>
                <div className="flex flex-col items-end ">
                  <div className="px-3 flex items-center py-2 hover:cursor-pointer border border-gray my-2  rounded-md shadow-md max-md:hidden">< MdChangeCircle className="mr-2 text-[#40196D] text-[14px] " />Convert Money</div>
                  <div className="px-3 py-2 hover:cursor-pointer  rounded-md shadow-md  flex items-center max-md:hidden border"><IoMdAddCircle className="mr-2 text-[#40196D] text-[14px]" />Add Money</div>

                  <div><RxDotsHorizontal className="hidden text-[40px] max-md:text-[30px] my-2 mx-3 px-2 rounded-full bg-gray-400 hover:bg-gray-800 transition duration-300 hover:cursor-pointer hover:text-white max-md:block" /></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[14px] border flex items-center text-[#40196D] px-3 py-2 rounded-lg shadow-md hover:cursor-pointer mx-2"><TbTransfer className="mr-1" />Spend</div>
              <div className="text-[14px] border flex items-center text-[#40196D] px-3 py-2 rounded-lg shadow-md hover:cursor-pointer mx-2"><PiDotsNineLight className="mr-1" />Save</div>
              <div className="text-[14px] border flex items-center text-[#40196D] px-3 py-2 rounded-lg shadow-md hover:cursor-pointer mx-2"><PiDotsSixVerticalLight className="mr-1" />Borrow</div>
              <div className="text-[14px] border flex items-center text-[#40196D] px-3 py-2 rounded-lg shadow-md hover:cursor-pointer mx-2"><PiDotsSixThin className="mr-1" />Invest</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[60px] flex items-center justify-center">
          <div className="w-[50%] max-lg:w-[80%] max-md:w-[95%] h-full border flex items-center justify-between border-gray-300 rounded-md shadow-md ">
            <div className="w-full  flex items-center justify-between">
              <div className="flex items-center ">
                <img alt="Img" src={image} className="w-[45px] object-cover h-[45px] rounded-full border border-gray-500 mx-2" />
                <div className="h-">
                  <div className="font-black text-[14px] text-[#40196D]">Beneficiaries</div>
                  <div className="text-[12px] font-bold">Add People</div>
                </div>
              </div>
              <div className="mr-3 my-2 mx-2 rounded-full bg-gray-200 transition duration-300 hover:bg-gray-400"><IoIosClose className="text-2xl hover:cursor-pointer" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard