import Card from "./Card"
import { FaLocationPinLock, FaMoneyBills } from "react-icons/fa6"
import { GrAnalytics } from "react-icons/gr"
import man from "../../assets/fun-3d-illustration-american-referee.jpg"
import { Fade } from "react-awesome-reveal"

const Section2 = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center">
            <div className="w-[90%] h-auto grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                <Card icon={<FaMoneyBills className="text-2xl text-[#40196D]" />} text="Pay your essential bills and buy gift cards easily." />
                <Card icon={<GrAnalytics className="text-2xl text-[#40196D]" />} text="Enjoy cashless payment options online and offline." />
                <Card icon={<FaLocationPinLock className="text-2xl text-[#40196D]" />} text="Order a Chyme Visa card on the app with pickup and delivery options." />
            </div>
            <div className="mt-32 w-full flex justify-center">
                <div className="w-[90%] min-h-[400px] flex items-center max-lg:flex-col justify-between">
                    <div>
                        <img className="w-[400px] rounded-xl h-[350px] object-cover" src={man} />
                    </div>
                    <Fade triggerOnce={true} direction="up" duration={1500}>
                        <div className="w-[600px] max-lg:w-full ml-5 max-lg:ml-0">
                            <div className="text-[#40196D] text-4xl max-lg:text-3xl max-lg:text-left font-black my-3  max-md:text-2xl" >It's your money, we just help you manage it.</div>
                            <div className="w-full max-lg:text-left leading-7">
                                Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    )
}

export default Section2