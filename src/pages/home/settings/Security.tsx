

import { motion } from "framer-motion"
import { MdChevronLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import OtpInput from "react-otp-input"
import { useState } from "react"


const CurrentOTP = () => {
  const [currentOTP, setCurrentOTP] = useState<string>("")
  return (
    <OtpInput
      inputStyle={{ width: "40px", height: "40px", borderRadius: "5px", backgroundColor: "#E7E7E7", outline: "none", margin: "5px", textTransform: "uppercase" }}
      value={currentOTP}
      onChange={setCurrentOTP}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  )
}
const NewOTP = () => {
  const [newOtp, setNewOtp] = useState<string>("")
  return (
    <OtpInput
      inputStyle={{ width: "40px", height: "40px", borderRadius: "5px", backgroundColor: "#E7E7E7", outline: "none", margin: "5px", textTransform: "uppercase" }}
      value={newOtp}
      onChange={setNewOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  )
}
const ComfirmOTP = () => {
  const [confirmOtp, setConfirmOtp] = useState<string>("")
  return (
    <OtpInput
      inputStyle={{ width: "40px", height: "40px", borderRadius: "5px", backgroundColor: "#E7E7E7", outline: "none", margin: "5px", textTransform: "uppercase" }}
      value={confirmOtp}
      onChange={setConfirmOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  )
}

const Security = () => {
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
  const navigate = useNavigate()

  return (
    <>
      <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[100vh] flex flex-col items-center">
        <div className="my-3 text-[20px] font-bold text-[#40196D] " >Security</div>
        <div className="w-[50%] border max-md:w-[90%] rounded-md h-[80%] shadow-md flex flex-col items-center">
          <div className="w-[90%] flex justify-between items-center">
            <div className="flex items-center my-2 hover:cursor-pointer" onClick={() => navigate(-1)}>
              <div><MdChevronLeft className="text-2xl" /></div>
              <div className="ml-1">Back</div>
            </div>
          </div>
          <div className="font-bold text-[18px]">Update Transaction Pin</div>
          <div className="my-2 " />
          <div className="text-[13px]">Current Pin</div>
          <CurrentOTP />
          <div className="my-3 " />
          <div className="text-[13px]">New Pin</div>
          <NewOTP />
          <div className="my-3 " />
          <div className="text-[13px]">Confirm Pin</div>
          <ComfirmOTP />
          <div className="my-3 text-[14px]">Forgot Transaction PIN? <span className="font-bold text-green-500">Reset Now</span></div>
          <div className="my-2 ">
            <button className="text-white bg-[#40196D] text-[14px] px-6 py-2 rounded-md">Update Pin </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Security