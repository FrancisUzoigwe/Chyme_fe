import { motion } from "framer-motion"
import { IoIosClose } from "react-icons/io"
import { IoSchoolSharp, IoSearchOutline } from "react-icons/io5"
import Options from "../../components/use/Options"
import { PiTelevisionSimpleFill } from "react-icons/pi"
import { FaHashtag, FaWifi } from "react-icons/fa"
import { BiMoneyWithdraw, BiSolidCreditCardAlt } from "react-icons/bi"
import { HiLightBulb } from "react-icons/hi"
import { GrSolaris } from "react-icons/gr"
import { CiBank } from "react-icons/ci"
import { MdOutlineEmojiTransportation, MdOutlinePointOfSale } from "react-icons/md"
import { TbBusinessplan } from "react-icons/tb"
import { ImSpades } from "react-icons/im"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeToggled } from "../../global/globalState"


const Pay = () => {

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

  const [scroll, setScroll] = useState<boolean>(false)
  const onScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener("scroll", onScroll)
  const toggle = useSelector((state: any) => state.toggle)
  const dispatch = useDispatch()
  return (
    <>
      <motion.div variants={motionVariant} initial="close" animate="open" className={`w-full min-h-[100vh] flex flex-col items-center ${toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"}`} onClick={() => {
        dispatch(changeToggled())
      }}>
        <div className="font-bold text-[20px] my-3 text-[#40196D]">Pay</div>
        <div className="w-[95%] border rounded-md h-[95%] pb-5 flex flex-col items-center">
          <div className="my-4" />
          <div className={`w-[90%] h-[50px] border overflow-hidden rounded-md ${scroll ? "sticky top-16 " : "relative"}`}>
            <div className="absolute left-2 top-[18px]">< IoSearchOutline className="text-gray-400" /></div>
            <div className="absolute right-2 top-3">< IoIosClose className="text-gray-400 hover:cursor-pointer text-2xl" /></div>
            <input type="text" placeholder="Search for bills" className="placeholder:text-[13px] w-full h-[50px] outline-none pl-10 " />
          </div>
          <div className="w-[90%] my-3">Essentials</div>
          <div className="w-[90%] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-4 gap-3">
            <Options text="Airtime" icon={<BiSolidCreditCardAlt />} />
            <Options text="Internet" icon={<FaWifi />} />
            <Options text="TV" icon={<PiTelevisionSimpleFill />} />
            <Options text="Electricity" icon={<HiLightBulb />} />
            <Options text="Solar" icon={<GrSolaris />} />
          </div>
          <div className="my-3" />
          <div className="w-[90%] my-3">Cardless Payments</div>
          <div className="w-[90%] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-4 gap-3">
            <Options text="Pay With Bank" icon={<CiBank />} />
            <Options text="Pay With USSD" icon={<FaHashtag />} />
            <Options text="POS Terminal" icon={<MdOutlinePointOfSale />} />
            <Options text="ATM Withdrawal" icon={<BiMoneyWithdraw />} />
            <Options text="Pay A Business " icon={<TbBusinessplan />} />
          </div>
          <div className="my-3" />
          <div className="w-[90%] my-3">Lifestyle</div>
          <div className="w-[90%] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-4 gap-3 ">
            <Options text="Betting" icon={<ImSpades />} />
            <Options text="Gift Cards" icon={<FaHashtag />} />
            <Options text="Transport" icon={<MdOutlineEmojiTransportation />} />
            <Options text="Education" icon={<IoSchoolSharp />} />
          </div>
        </div>
        <div className="my-5" />
      </motion.div>
    </>
  )
}

export default Pay