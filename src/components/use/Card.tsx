import React from 'react'
import { Fade } from "react-awesome-reveal"
interface iSec {
    icon?: any;
    text?: any;
    style?: any;
}

const Card: React.FC<iSec> = ({ icon, text, style }) => {
    return (

        <Fade triggerOnce={true} direction='up' duration={1500}>
            <div className={`min-h-[130px] rounded-lg shadow-md border ${style}`}>
                <div className="my-3 ml-3 w-[42px] h-[42px] flex items-center justify-center rounded-full bg-gray-300">{icon}</div>
                <div className="pl-3 text-[#40196D] font-black w-[90%] ">{text}</div>
            </div>
        </Fade>

    )
}

export default Card