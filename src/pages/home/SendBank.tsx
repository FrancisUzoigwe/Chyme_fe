import Ng from '../../assets/NG.png'
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {changeToggled} from '../../global/globalState'

const SendBank = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state: any) => state.toggle);

  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };





  return (
    <motion.div 
    variants={motionVariant}
    initial="close"
    animate="open"
    className={`w-full h-[100vh]  flex-col flex justify-center gap-[2%] items-center ${
      toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"
    } `}
    onClick={() => {
      dispatch(changeToggled());
    }}
    >
      <header className='w-full h-[10%]  text-xl font-extrabold text-purple-900 flex justify-center items-center'>
        Send to a Bank Account <img src={Ng} alt="" width={30} />
      </header>
      <section className='w-[40%] h-[60%] bg-[#F8F8F8] border rounded-[10px] max-sm:w-[90%]'>
        <div className='w-full h-[12%] flex justify-start items-center p-5 cursor-pointer text-purple-600 '
           onClick={() => navigate(-1)}>
        <FaChevronLeft className='text-purple-600' /> Back
        </div>
        <header className='w-full h-[10%] flex justify-center items-center text-xl font-extrabold'>
          New NGN Recipient
        </header>
        <section className='w-[100%] h-[25%] flex flex-col justify-center items-center'>
          <div className='w-[90%] h-[80%]  flex justify-center items-start p-3 flex-col'>
            <label htmlFor="">Bank</label>
            <select name="" id="" className='w-[95%] h-[80%] rounded-[6px] outline-none p-2 font-extrabold max-sm:h-[90%]'>
              <option selected>Select Bank</option>
              <option selected>Access Bank</option>
              <option selected>GTB</option>
              <option selected>Kuda</option>
            </select> 
          </div>
        </section>
        <section className='w-[100%] h-[30%] flex flex-col justify-center items-center'>
          <div className='w-[90%] h-[80%]  flex justify-center items-start p-3 flex-col'>
            <label htmlFor="">Account Number</label>
            <input type="text" className='w-[95%] h-[80%] rounded-[6px] outline-none p-2' placeholder='1234567890' /> 
          </div>
        </section>
        <section className='w-[100%] h-[17%] flex justify-center items-center'>
          <button className='w-[90%] h-[80%] bg-purple-500 text-white font-semibold rounded-[10px]'>Next</button>
        </section>
      </section>
    </motion.div>
  )
}

export default SendBank