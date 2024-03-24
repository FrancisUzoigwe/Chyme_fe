import { FaChevronRight, FaInbox } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs"
import Logo from '../../assets/kuda.png'
import { motion } from "framer-motion"

const Send = () => {

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

  return (
    <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[50rem] flex justify-center gap-[2%] items-center flex-col">
      <header className="w-full h-[10%] flex justify-center items-center text-2xl font-bold text-purple-800">Send</header>
      <section className="w-[50%] h-[40%] bg-[#FDFDF7] flex-col justify-around items-center flex shadow-lg rounded-[10px] max-sm:w-[90%] max-lg:w-[80%]">
        <div className="w-[85%] h-[25%] bg-[#F8F8F8] flex rounded-[9px]">
          <div className=" w-[70%] h-[100%]  flex-col flex justify-center items-start p-6">
            <h3 className=" font-extrabold text-purple-900 text-lg max-sm:text-xs">Send to Beneficiaries</h3>
            <span className=" font-medium text-slate-400 text-xs">Add a beneficiary to get started.</span>
          </div>
          <div className=" w-[30%] h-[100%] flex justify-center items-center">
            <button className="w-[70%] h-[35%] bg-purple-300 text-sm text-purple-700 font-semibold rounded-[5px]">Add</button>
          </div>
        </div>
        <div className="w-[85%] h-[25%] bg-[#F8F8F8] flex rounded-[9px]">
          <div className="w-[80%] h-[100%] flex justify-start items-center max-sm:w-[80%] max-sm:gap-[10px]">
            <div className="w-[20%] h-[90%] flex justify-center items-center">
              <img src={Logo} alt="" className=" w-full h-full object-contain" />
            </div>
            <div className=" w-[50%] h-[100%] flex-col flex justify-center items-start ">
              <h3 className=" font-extrabold text-purple-900 text-lg max-sm:text-xs">Send to @username</h3>
              <span className=" font-medium text-slate-400 text-xs max-sm:text-[9px]">Send to any Chyme account for free.</span>
            </div>
          </div>
          <div className=" w-[20%] h-[100%] flex justify-center items-center ">
            <FaChevronRight className=" text-lg text-slate-400 cursor-pointer" />
          </div>
        </div>
        <div className="w-[85%] h-[25%]  bg-[#F8F8F8] flex rounded-[9px]  ">
          <div className="w-[80%] h-[100%] flex justify-start items-center gap-[5%] max-sm:w-[80%] max-sm:gap-[10px]">
            <div className="w-[10%] h-[90%] flex justify-center items-center bg-[#F9F9F9]">
              <BsFillSendFill className=" text-green-400" />
            </div>
            <div className=" w-[50%] h-[100%] flex-col flex justify-center items-start ">
              <h3 className=" font-extrabold text-purple-900 text-lg max-sm:text-xs">Send to Bank Account</h3>
              <span className=" font-medium text-slate-400 text-xs">Send to local bank account.</span>
            </div>
          </div>
          <div className=" w-[20%] h-[100%] flex justify-center items-center ">
            <FaChevronRight className=" text-lg text-slate-400 cursor-pointer" />
          </div>
        </div>
      </section>
      <section className="w-[50%] h-[40%] bg-[#FDFDF8] rounded-[10px] shadow-lg max-sm:w-[90%] max-lg:w-[80%]">
        <header className=" w-full h-[15%] flex justify-start items-center p-5 font-extrabold text-xl ">Recents</header>
        <section className=" w-full h-[60%] flex justify-center gap-[7%] items-center flex-col">
          <section className="w-[80px] h-[80px] rounded-[50%] bg-slate-400 flex items-center justify-center">
            <FaInbox className="text-3xl text-white " />
          </section>
          <h3 className=" font-extrabold text-black text-lg">Nothing to see Yet</h3>
          <span className=" font-medium text-slate-400 text-sm max-sm:text-center">Send some money and we'll
            show you your recents transactions here</span>
        </section>
      </section>
    </motion.div>
  )
}

export default Send