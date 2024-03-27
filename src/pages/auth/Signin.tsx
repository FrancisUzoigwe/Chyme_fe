import { useEffect, useState } from "react"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa6"
import { SiMastercomfig } from "react-icons/si"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate, useParams } from "react-router-dom"
import { signinApi, verifiedApi } from "../../api/authApis"
import { useDispatch } from "react-redux"
import { mainUser } from "../../global/globalState"
import LoadingPage from "./LoadingPage"
import { motion } from "framer-motion"
const Signin = () => {

  const AuthSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
  })

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(AuthSchema)
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onHandleSubmit = handleSubmit(async (data) => {
    setLoading(false)

    const { email, password } = data
    signinApi({ email, password }).then((res) => {
      navigate("/auth")
      dispatch(mainUser(res))
    })
    setLoading(true)
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [eye, setEye] = useState<boolean>(false)
  const onEye = () => {
    setEye(!eye)
  }

  const { token }: any = useParams()


  useEffect(() => {
    if (token) {
      verifiedApi(token!)
    }
  }, [])


  const motionVariant = {
    animate: {
      y: 0, opacity: 1, transition: {
        duration: 0.5
      }
    },
    initial: {
      y: "80px",
      opacity: 0
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-400"

    >
      {loading && <LoadingPage />}
      <div className="w-full flex justify-center items-center">
        <motion.form variants={motionVariant} initial="initial" animate="animate" onSubmit={onHandleSubmit} className="w-[400px] max-sm:w-[80%] h-[400px] flex flex-col items-center  bg-white rounded-lg">
          <div className="w-[90%] ">
            <div className="my-5 font-black text-2xl w-full flex items-center justify-center">Signin to <div><SiMastercomfig className="ml-3 mr-1 text-[#40196D]" /></div> AJMoney</div>
            <div className="my-1 text-[14px]">To sign, input the email address and a password linked to your account.</div>
          </div>
          <div className="w-full  flex flex-col items-center">
            <div className="h-[45px] w-[90%] my-5">
              <label htmlFor="UserEmail" className="block  text-[14px]  font-medium text-gray-700"> EmailAddress </label>
              <input
                type="email"
                {...register("email")}
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="mt-1 w-full border outline-none pl-3 h-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
            <div className="h-[45px] w-[90%] my-5 relative ">
              <label htmlFor="UserEmail" className="block  text-[14px]  font-medium text-gray-700 "> Password </label>
              <div className="absolute right-3 top-10 hover:cursor-pointer" onClick={() => {
                onEye()
              }}>{eye ? <FaEye className="text-xl" /> : <FaEyeSlash className="text-xl" />}</div>
              <input
                type={eye ? "password" : "text"}
                id="UserEmail"
                placeholder="....."
                {...register("password")}
                className="mt-1 w-full border outline-none pl-3 h-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
          </div>
          <div className="w-[90%] flex items-center justify-between my-3 text-[13px] hover:cursor-pointer">
            <div>Forgot password?</div>
            <Link to="/register">
              <div>Don't have an account ?
                <span className="text-[red] ml-[2px]">Signup</span>
              </div>
            </Link>

          </div>
          <button className="px-36 rounded-lg py-[10px] text-white bg-[purple]" type="submit">Signin</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Signin