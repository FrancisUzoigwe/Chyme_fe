
import slide from "../../assets/hello.gif"
const Section = () => {
    return (
        <div className="w-full h-auto  mb-3  flex justify-center">
            <div className="w-[90%] h-auto flex justify-between items-center max-lg:flex-col">
                <div>
                    <div className="w-[300px] md:w-[450px] max-md:w-[300px] max-sm:w-auto h-[400px] mb-5 rounded-xl">
                        <img src={slide} alt="" className="w-full h-full cover" />
                    </div>
                </div>
                <div className="max-w-[500px] max-md:w-full mt-20">
                    <div className="text-[#40196D] font-black leading-[55px] text-5xl max-md:text-2xl max-lg:w-full max-lg:text-center max-md:text-left" >Accessible from any device 
                    </div>
                    <div className=" max-sm:text-left my-6 max-lg:text-center">Make free transfers, enjoy cashless payment options and earn interest on your savings with Chyme.</div>
                    <div className="flex w-full  items-center max-lg:justify-center">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section