import { FaCaretDown } from "react-icons/fa"
import { SiMastercomfig } from "react-icons/si"
import { RiMenu4Fill } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { toggled } from "../../global/globalState"
import { Link } from "react-router-dom"
import { useState } from "react"

const AuthHeader = () => {
    const dispatch = useDispatch()

    const [personal, setPersonal] = useState<boolean>(false)
    const onPersonal = () => {
        setPersonal(!personal)
    }

    const [business, setBusiness] = useState<boolean>(false)
    const onBusiness = () => {
        setBusiness(!business)
    }
    const [company, setCompany] = useState<boolean>(false)
    const onCompany = () => {
        setCompany(!company)
    }
    return (
        <header className="w-full h-[60px] flex items-center justify-center relative ">
            <header className="flex w-full h-[60px] items-center justify-center z-[900] fixed  bg-white shadow-md shadow-[#cba8f3]">
                <header className="w-[90%] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-[#40196D] font-black flex items-center" > <div className="mr-2"><SiMastercomfig /></div>Chyme</div>
                        <div className="ml-24 flex items-center max-lg:hidden">
                            <div className="mx-[14px] relative  hover:cursor-pointer" onMouseEnter={onPersonal} onMouseLeave={onPersonal}>
                                <div className="flex items-center text-[#40196D]" >Personal <div className="ml-2"><FaCaretDown /></div></div>
                                {personal ? <div className="absolute w-[200px] rounded-lg right-0 py-3 bg-purple-600 text-white shadow-md hover:cursor-pointer ">
                                    <div className="my-2 mx-2">Discover Personal</div>
                                    <div className="my-2 mx-2">Transfer && Spend</div>
                                    <div className="my-2 mx-2">Save</div>
                                    <div className="my-2 mx-2">Investments</div>
                                </div> : null}
                            </div>
                            <div className="mx-[14px] relative  hover:cursor-pointer" onMouseEnter={onBusiness} onMouseLeave={onBusiness}>
                                <div className="flex items-center text-[#40196D]" >Businesses <div className="ml-2"><FaCaretDown /></div></div>
                                {business ? <div className="absolute w-[200px] rounded-lg right-0 py-3 bg-purple-600 text-white shadow-md hover:cursor-pointer ">
                                    <div className="my-2 mx-2">Discover Business</div>
                                    <div className="my-2 mx-2">Business Registration</div>
                                    <div className="my-2 mx-2">Invoicing</div>
                                    <div className="my-2 mx-2">Business Api</div>
                                </div> : null}
                            </div>
                            <div className="mx-[14px] relative  hover:cursor-pointer" onMouseEnter={onCompany} onMouseLeave={onCompany}>
                                <div className="flex items-center text-[#40196D]" >Company <div className="ml-2"><FaCaretDown /></div></div>
                                {company ? <div className="absolute w-[200px] rounded-lg right-0 py-3 bg-purple-600 text-white shadow-md hover:cursor-pointer ">
                                    <div className="my-2 mx-2">Blog </div>
                                    <div className="my-2 mx-2">Press </div>
                                    <div className="my-2 mx-2">Join our team</div>
                                    <div className="my-2 mx-2">About us</div>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center max-lg:hidden">
                        <Link to="/signin">
                            <div className="text-[#40196D] mr-10">Signin</div>
                        </Link>
                        <Link to="/register">
                            <button className=" px-5 py-2 rounded-md bg-[#40196D] text-white">Join Chyme</button>
                        </Link>
                    </div>
                    <div className="text-[#40196D] max-lg:block hidden"><RiMenu4Fill className="text-3xl hover:scale-[1.1] transition-all duration-300 hover:cursor-pointer"
                        onClick={() => {
                            dispatch(toggled())
                        }}
                    /></div>
                </header>
            </header>
        </header>
    )
}

export default AuthHeader