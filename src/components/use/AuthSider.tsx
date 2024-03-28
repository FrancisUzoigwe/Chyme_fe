import { useDispatch } from "react-redux"
import { changeToggled } from "../../global/globalState"
import { IoMdClose } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { FaCaretRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from 'react'

const AuthSider = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    interface iDrop {
        title?: string;
        dropdown?: string;
        dropdown1?: string;
        dropdown2?: string;
        dropdown3?: string;
    }

    const data: iDrop[] = [
        {
            title: "Personal",
            dropdown: "Save",
            dropdown1: "Transfer",
            dropdown2: "Invest",
        },
        {
            title: "Business",
            dropdown: "Discover Business",
            dropdown1: "Business Registration",
        },
        {
            title: "Company",
        },
        {
            title: "Developers",
            dropdown: "Blog",
            dropdown1: "Press",
            dropdown2: "Join our Team",
            dropdown3: "About Us",
        },
        {
            title: "Contact Us",
            dropdown: ""
        },
        {
            title: "Help",
            dropdown: "Get Help",
            dropdown1: "FAQs",
            dropdown2: "Security",
        },
    ]

    const [isOpen, setIsOpen] = useState<boolean[]>(new Array(data.length).fill(false));
    const parentRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        parentRefs.current = parentRefs.current.slice(0, data.length);
    }, [data.length]);

    const toggleDropdown = (index: number) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const childrenMotion: any = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            },
        },
        close: {
            opacity: 0,
            transition: {}
        },
        item: {
            open: { opacity: 1 },
            close: { opacity: 0 }
        }
    };

    const reveal = (index: number) => toggleDropdown(index);


    return (
        <>
            <motion.div variants={childrenMotion} initial="close" animate="open" className="w-full min-h-[100vh] top-0 bg-[white] items-center flex-col z-[900] max-lg:flex hidden sticky">
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
                <div className="w-[90%]  flex flex-col items-center my-3 ">
                    {data?.map((prop, index) => {
                        return (
                            <div className="flex flex-col items-center w-full" key={index} onClick={() => reveal(index)} ref={el => parentRefs.current[index] = el}>
                                <motion.div variants={childrenMotion} className=" w-full items-center justify-between py-5 text-[#40196D] hover:cursor-pointer flex border-b-2 "
                                >
                                    <div className=" font-bold">{prop?.title}</div>
                                    <div><FaCaretRight /></div>
                                </motion.div>
                                {isOpen[index] && <div className="my-1 w-full text-[#40196D]">{prop.dropdown}</div>}
                                {isOpen[index] && <div className="my-1 w-full text-[#40196D]">{prop.dropdown1}</div>}
                                {isOpen[index] && <div className="my-1 w-full text-[#40196D]">{prop.dropdown2}</div>}
                                {isOpen[index] && <div className="my-1 w-full text-[#40196D]">{prop.dropdown3}</div>}
                            </div>
                        )
                    })}
                </div>
                <div className="text-[13px] my-2">All Right Reserved AJMoney 2024</div>
            </motion.div>
        </>
    )
}

export default AuthSider;
