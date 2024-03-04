import { FaCaretDown } from "react-icons/fa"
import { SiMastercomfig } from "react-icons/si"
const AuthHeader = () => {
    return (
        <header className="w-full h-[60px] flex items-center justify-center ">
            <header className="flex w-full h-[60px] items-center justify-center fixed  bg-white shadow-md shadow-[#cba8f3]">
                <header className="w-[90%] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-[#40196D] font-black flex items-center" > <div className="mr-2"><SiMastercomfig /></div>Chyme</div>
                        <div className="ml-24 flex items-center">
                            <div className="mx-7 ">
                                <div className="flex items-center text-[#40196D]" >Personal <div className="ml-2"><FaCaretDown /></div></div>
                            </div>
                            <div className="mx-7">
                                <div className="flex items-center text-[#40196D]">Business <div className="ml-2"><FaCaretDown /></div></div>
                            </div>
                            <div className="mx-7">
                                <div className="flex items-center text-[#40196D]">Company <div className="ml-2"><FaCaretDown /></div></div>
                            </div>
                            <div className="mx-7">
                                <div className="flex items-center text-[#40196D]">Help <div className="ml-2"><FaCaretDown /></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-[#40196D]">Signin</div>
                        <button className="ml-12 px-5 py-2 rounded-md bg-[#40196D] text-white" >Join Chyme</button>
                    </div>
                </header>
            </header>
        </header>
    )
}

export default AuthHeader