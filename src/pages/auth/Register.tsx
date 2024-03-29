import { useState } from "react"
import LoadingPage from "./LoadingPage"
import student from "../../assets/mainWoman.jpg"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerApi } from "../../api/authApis"
import { useNavigate } from "react-router-dom"


const Register = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const AuthSchema = yup.object({
    email: yup.string().required(),
    name: yup.string().required(),
    password: yup.string().required()
  })

  
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(AuthSchema)
  })

  const onHandleSubmit = handleSubmit(async (data) => {
    setLoading(false)
    const { email, password, name } = data

    registerApi({ email, password, name }).then((res) => {
      navigate("/email")
      return res.data.data
    })
    setLoading(true)
  })

  const [show, setShow] = useState<boolean>(false)
  const onShow = () => {
    setShow(!show)
  }

  const [checked, setChecked] = useState<boolean>(false)

  const onChecked = () => {
    setChecked(!checked)
  }



  return (
    <>
      {loading && <LoadingPage />}
      <div className='w-full min-h-[100vh] flex justify-center items-center bg-[#40196D]'>
        <div className='w-[90%] items-center flex justify-center h-[520px] rounded-xl bg-white text-black'>
          <div className='w-[90%] flex items-center justify-between h-full'>
            <form onSubmit={onHandleSubmit} className='w-[45%]  max-md:w-full h-full flex flex-col items-center rounded-md'>
              <div className='flex justify-between items-center w-full my-2'>
                <div className="font-bold">AJMoney</div>
                <div className='flex items-center text-[13px] font-bold '>Have an account?  <button className="ml-2 border border-[#40196D] outline-none py-2 px-4 rounded-3xl hover:text-white hover:bg-[#40196D] transition duration-300 " onClick={() => {
                  navigate("/signin")
                }}>Sign In</button></div>
              </div>
              <div className="mt-16 text-[40px] font-black text-center">Create An Account</div>
              <div className=" text-gray-400 text-[13px]">Create your AJMoney account.</div>
              <div className="w-[70%] mt-4">
                <div className="w-full h-[45px] ">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      {...register("email")}
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                      className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                    >
                      Email
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-[70%] mt-4">
                <div className="w-full h-[45px] ">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Name"
                      {...register("name")}
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                      className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                    >
                      Name
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-[70%] mt-4">
                <div className="w-full h-[45px] ">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <div className="absolute right-2 hover:cursor-pointer text-[13px]" onClick={() => {
                      onShow()
                    }}>{!show ? "Show" : "Hide"}</div>
                    <input
                      type={`${!show ? "password" : "text"}`}
                      id="UserEmail"
                      {...register("password")}
                      placeholder="Password"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                      className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                    >
                      Password
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-[70%] my-3 flex items-center">
                <input type="checkbox" onClick={() => {
                  onChecked()
                }} />
                <div className="text-[13px] ml-2">Remember Me</div>
              </div>
              <button className={`w-[70%] rounded-3xl h-[45px] transition duration-300  ${checked ? "bg-[#40196D] text-white" : "text-gray-500 bg-gray-300"}`} type="submit" disabled={!checked}>Sign In</button>
              <div className="w-full flex items-center justify-center h-[20px] text-[14px] my-2 hover:cursor-pointer">
                Forgot Passcode? <div className="ml-2 ">Reset</div>
              </div>
            </form>
            <div className="max-md:hidden w-[50%] border h-[85%] rounded-2xl overflow-hidden">
              <img src={student} alt="" loading="lazy" className="object-cover w-full h-full " />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Register
