import { BsFillSendFill } from "react-icons/bs"
import { motion } from "framer-motion"
import { MdOutlineChevronRight } from "react-icons/md";
import { VscAccount } from "react-icons/vsc"
import { RiInbox2Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { changeToggled } from "../../global/globalState";


const Send = () => {
  const dispatch = useDispatch()
  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    },
    close: {
      opacity: 0,
      y: "100px"
    }
  }
  setTimeout(() => {
    dispatch(changeToggled())
  }, 10000)


  const navigate = useNavigate()
  const toggle = useSelector((state: any) => state.toggle)
  return (
    <motion.div variants={motionVariant} initial="close" animate="open" className={`w-full min-h-[100vh] flex flex-col items-center  ${toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"}`}>
      <div className="my-3 text-[25px] font-black text-[#40196D]">Send</div>
      <div className="w-[50%] max-md:w-[90%] min-h-[40%] flex flex-col items-center border py-2 rounded-md">
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-[90%] flex items-center justify-between my-2 shadow-lg border py-2 rounded-md">
            <div className="ml-5">
              <div className="text-[#40196D] text-[15px] font-bold">Send to Beneficiaries</div>
              <div className="text-[12px] text-gray-400">Add to beneficiary to get started.</div>
            </div>
            <button className="text-[14px] text-[#40196D] py-1 px-4 rounded-md mr-4 bg-[#DFE3FF]">Add</button>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-[90%] flex items-center justify-between my-2 shadow-lg border py-2 rounded-md hover:cursor-pointer" onClick={() => {
            navigate("/auth/send/username")
          }}>
            <div className="flex  items-center">
              <div className="ml-4 w-[40px] h-[40px] rounded-md flex items-center justify-center"><VscAccount className="text-2xl" /></div>
              <div className="ml-4">
                <div className="text-[#40196D] text-[15px] font-bold">Send to @username</div>
                <div className="text-[12px] text-gray-400">Send to any AJMoney account for free.</div>
              </div>
            </div>
            <div className="mr-4"><MdOutlineChevronRight /></div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-[90%] flex items-center justify-between my-2 shadow-lg border py-2 rounded-md hover:cursor-pointer" onClick={() => {
            navigate("/auth/send/account")
          }}>
            <div className="flex  items-center">
              <div className="ml-5"><BsFillSendFill className="text-green-600" /></div>
              <div className="ml-4">
                <div className="text-[#40196D] text-[15px] font-bold">Send to Bank account</div>
                <div className="text-[12px] text-gray-400">Send to local account for free.</div>
              </div>
            </div>
            <div className="mr-4"><MdOutlineChevronRight /></div>
          </div>
        </div>
      </div>
      <div className="my-3 rounded-md w-[50%] max-md:w-[90%] min-h-[40%] border flex flex-col items-center">
        <div className="w-[90%] my-3 font-bold">Recents</div>
        <div className="my-5 w-full flex items-center flex-col">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-gray-400"><RiInbox2Fill className="text-white text-3xl" /></div>
          <div className="my-3 font-black">Nothing to see yet.</div>
          <div className="text-center text-gray-400">Send some money and we'll show you your recent transactions here.</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Send