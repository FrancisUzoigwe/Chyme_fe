import { FaCaretDown } from "react-icons/fa"
import { SiMastercomfig } from "react-icons/si"
import { RiMenu4Fill } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { toggled } from "../../global/globalState"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
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
    const data1 = [
        {
            name: "Discover Personal",
        },
        {
            name: "Transfer && Spend",
        },
        {
            name: "Save ",
        },
        {
            name: "Investments ",
        },

    ]
    const data2 = [
        {
            name: "Discover Business",
        },
        {
            name: "Business Registration",
        },
        {
            name: "Invoiving ",
        },
        {
            name: "Business API ",
        },

    ]
    const data3 = [
        {
            name: "Blog",
        },
        {
            name: "Press",
        },
        {
            name: "Join Our Team ",
        },
        {
            name: "About Us ",
        },

    ]


    const motionVariant = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                dalay: 1.3
            }
        },
        close: {
            opacity: 0,
            y: "50px",

        }
    }

    return (
        <header className="w-full h-[60px] flex items-center justify-center relative ">
            <header className="flex w-full h-[60px] items-center justify-center z-[900] fixed  bg-white shadow-md shadow-[#cba8f3]">
                <header className="w-[90%] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-[#40196D] font-black flex items-center" > <div className="mr-2"><SiMastercomfig /></div>AJMoney</div>
                        <div className="ml-24 flex items-center max-lg:hidden">
                            <div className="mx-[14px] relative  hover:cursor-pointer" onMouseEnter={onPersonal} onMouseLeave={onPersonal}>
                                <div className="flex items-center text-[#40196D]" >Personal <div className="ml-2"><FaCaretDown /></div></div>
                                {personal ? <motion.div variants={motionVariant} initial="close" animate="open" className="absolute w-[200px] rounded-lg right-0 py-3 bg-purple-600 text-white shadow-md hover:cursor-pointer ">
                                    {
                                        data1.map((props) => {
                                            return (
                                                <div className="my-2 mx-2">{props.name}</div>
                                            )
                                        })
                                    }

                                </motion.div> : null}
                            </div>
                            <div className="mx-[14px] relative  hover:cursor-pointer" onMouseEnter={onBusiness} onMouseLeave={onBusiness}>
                                <div className="flex items-center text-[#40196D]" >Businesses <div className="ml-2"><FaCaretDown /></div></div>
                                {business ? <motion.div variants={motionVariant} initial="close" animate="open" className="absolute w-[200px] rounded-lg right-0 py-3 bg-purple-600 text-white shadow-md hover:cursor-pointer ">
                                    {
                                        data2.map((props) => {
                                            return (
                                                <div className="my-2 mx-2">{props.name}</div>
                                            )
                                        })
                                    }


                                </motion.div> : null}
                            </div>
                            <div className="mx-[14px] relative  hover:cursor-pointer" onMouseEnter={onCompany} onMouseLeave={onCompany}>
                                <div className="flex items-center text-[#40196D]" >Company <div className="ml-2"><FaCaretDown /></div></div>
                                {company ? <motion.div variants={motionVariant} animate="open" initial="close" className="absolute w-[200px] rounded-lg right-0 py-3 bg-purple-600 text-white shadow-md hover:cursor-pointer ">
                                    {
                                        data3.map((props) => {
                                            return (
                                                <div className="my-2 mx-2">{props.name} </div>
                                            )
                                        })
                                    }

                                </motion.div> : null}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center max-lg:hidden">
                        <Link to="/signin">
                            <div className="text-[#40196D] mr-10">Signin</div>
                        </Link>
                        <Link to="/register">
                            <button className=" px-5 py-2 rounded-md bg-[#40196D] text-white">Join AJMoney</button>
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