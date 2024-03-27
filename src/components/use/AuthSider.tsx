import { useDispatch } from "react-redux"
import { changeToggled } from "../../global/globalState"
import { IoMdClose } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { FaCaretRight } from "react-icons/fa"

const AuthSider = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const data = [
        {
            title: "Personal",
            link: "/personal"
        },
        {
            title: "Business",
            link: "/business"
        },
        {
            title: "Company",
            link: "/company"
        },
        {
            title: "Developers",
            link: "/developers"
        },
        {
            title: "Contact Us",
            link: "/contactus"
        },
        {
            title: "Help",
            link: "/help"
        },
    ]
    return (
        <>
            <div className="w-full h-[100vh] top-0 bg-[white] items-center flex-col z-[900] max-lg:flex hidden fixed">
                <div className="w-[90%] items-center my-4 h-auto flex justify-between ">
                    <div className="text-[#40196D] font-bold">AJMoney</div>
                    <IoMdClose className="text-2xl hover:scale-[1.2] hover:cursor-pointer transition duration-300 text-[#40196D]" onClick={() => {
                        dispatch(changeToggled())
                    }} />
                </div>
                <div className="w-[90%]">
                    <button className="px-4 py-3 text-[13px] rounded-md text-white bg-[#40196D]" onClick={() => {
                        navigate("/register")
                    }}>Join AjMoney</button>
                    <button className="px-5 py-3 text-[13px]  ml-3 rounded-md text-white bg-[#b4bbf3]" onClick={() => {
                        navigate("/signin")
                    }}>Signin</button>
                </div>
                <div className="w-[90%] flex flex-col items-center my-3 ">
                    {data?.map((prop) => {
                        return (
                            <div className="w-full items-center justify-between py-5 text-[#40196D] hover:cursor-pointer flex border-b-2 " onClick={() => {
                                navigate(`${prop?.link}`)
                            }}>
                                <div className=" font-bold">{prop?.title}</div>
                                <div><FaCaretRight /></div>
                            </div>
                        )
                    })}
                </div>
                <div className="text-[13px] my-2">All Right Reserved AJMoney 2024</div>

            </div>
        </>
    )
}

export default AuthSider