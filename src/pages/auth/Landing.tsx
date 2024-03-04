import { FaApple, FaGooglePlay } from "react-icons/fa"
import Download from "../../components/use/Download"

const Landing = () => {
    return (
        <div className="w-full min-h-[100vh]  flex justify-center">
            <div className="w-[90%] h-[550px] flex justify-between items-center">
                <div className="w-[450px] mt-20">
                    <div className="text-[#40196D] font-black text-5xl">The money app for  <br />
                        Ajegunle
                    </div>
                    <div className=" my-6 font-black">Make free transfers, enjoy cashless payment options and earn interest on your savings with Chyme.</div>
                    <div className="flex w-[80%] items-center justify-between">
                        <Download download="Download on the" store="App Store" icon={<FaApple  className="text-3xl"/>} />
                        <Download download="Download on the" store="Google play" icon={<FaGooglePlay  className="text-3xl"/>} />
                    </div>
                </div>
                <div>Right</div>
            </div>
        </div>
    )
}

export default Landing