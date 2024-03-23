import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom"

interface iOption {
    link?: any;
    text?: string;
    icon?: any;
}

const Options: React.FC<iOption> = ({ link, text, icon }) => {
    return (
        <Link to={link}>
            <div className="h-[50px] shadow-md flex items-center justify-between px-2 rounded-md ">
                <div className="flex items-center text-[20px] text-[#40196D]">{icon} <div className="ml-2 text-[#40196D] font-bold text-[15px]">{text}</div></div>
                <div><MdKeyboardArrowRight /></div>
            </div>
        </Link>
    )
}

export default Options