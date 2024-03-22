import { MdKeyboardArrowRight } from "react-icons/md"
import image from "../../../public/vite.svg"
const Transfers = () => {
    return (
        <div className="w-full h-[60px] flex flex-col  items-center  my-6">
            <div className="w-[95%] md:w-full flex justify-start ">
                <div className="w-full text-[13px] text-gray-500">March, 17 2024 </div>
            </div>
            <div className="w-full max-lg:w-full max-md:w-[95%] h-[60px] border flex items-center justify-between border-gray-300 rounded-md shadow-md ">
                <div className="w-full h-full  flex items-center justify-between">
                    <div className="flex items-center h-[60px] ">
                        <img alt="Img" src={image} className="w-[45px] object-cover h-[45px] rounded-full border border-gray-500 mx-2" />
                        <div className="h-">
                            <div className="font-black text-[14px] text-[#40196D]">MTN NG Data</div>
                            <div className="text-[12px] font-bold">10:24 am</div>
                        </div>
                    </div>
                    <div className="mr-3 my-2 mx-2 rounded-full "><MdKeyboardArrowRight className="text-2xl hover:cursor-pointer" /></div>
                </div>
            </div>
        </div>
    )
}

export default Transfers