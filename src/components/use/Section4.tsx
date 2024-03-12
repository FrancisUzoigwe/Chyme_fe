import { Fade } from "react-awesome-reveal"
import { FaArrowRight } from "react-icons/fa"
import woman from "../../assets/woman.png"
const Section4 = () => {
    return (
        <>
            <div className="w-full min-h-[70vh] flex justify-center">
                <div className="w-[90%] h-auto flex justify-center items-center">
                    <div className="w-full h-auto flex justify-between max-lg:flex-col items-center">

                        <div className=" relative xl:w-[400px] max-xl:w-full h-[400px] bg-blue-400" style={{ background: `url(${woman})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "top", }}>
                            <div className=" absolute">Hello1</div>
                            <div className="absolute">Hello2</div>
                        </div>
                        <Fade triggerOnce={true} direction="up" duration={1500}>
                            <div className="w-[550px] max-lg:w-full">
                                <div className="text-4xl max-md:text-3xl max-md:text-left max-xl:mt-20 text-[#40196D] font-black">A free account to power your business.</div>
                                <div className="my-3 leading-7">Open a free bank account in your business name, in minutes. Access round the clock support, with no hidden fees and complete control over your account.</div>
                                <button className="py-3 px-5 rounded-md absolute text-white bg-[#40196D] flex items-center">Create an account<i className="ml-3"><FaArrowRight /></i></button>

                            </div>

                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4