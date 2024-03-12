import { FaArrowRight } from "react-icons/fa"
import pos from "../../assets/pos.jpg"
import { Fade } from "react-awesome-reveal"
const Section3 = () => {
    return (
        <>
            <div className="w-full min-h-[70vh] flex justify-center">
                <div className="w-[90%] h-auto flex justify-center items-center">
                    <div className="w-full h-auto flex justify-between max-lg:flex-col items-center">
                        <Fade triggerOnce={true} direction="up" duration={1500}>
                            <div className="w-[550px] max-lg:w-full">
                                <div className="text-4xl max-md:text-3xl max-md:text-left max-xl:mt-20 text-[#40196D] font-black">POS machine built to serve.</div>
                                <div className="my-3 leading-7">Accept card and transfer payments seamlessly, with a reliable point-of-sale terminal. Enjoy instant settlement, easy dispute resolution, and instant payments every time.</div>
                                <button className="py-3 px-5 rounded-md absolute text-white bg-[#40196D] flex items-center">Get POS terminal <i className="ml-3"><FaArrowRight /></i></button>
                            </div>

                        </Fade>
                        <div className="xl:w-[450px] max-xl:w-full h-[400px] bg-blue-400" style={{ background: `url(${pos})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "top" }}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3