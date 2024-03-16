import { Fade } from "react-awesome-reveal"
const Section4 = () => {
    return (
        <>
            <div className="w-full min-h-[70vh] flex justify-center">
                <div className="w-[90%] h-auto flex justify-center items-center">
                    <div className="grid grid-cols-3 w-full gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                        <Fade triggerOnce={true} duration={1000} direction="up">
                            <div className="h-[230px] bg-[#40196D] rounded-xl">Hello World</div>
                        </Fade>
                        <Fade triggerOnce={true} duration={1500} direction="up">
                            <div className="h-[230px] bg-[#40196D] rounded-xl max">Hello World</div>
                        </Fade>
                        <div className="h-[230px] bg-[#40196D] rounded-xl max-sm:col-span-1 max-lg:col-span-3">Hello World3</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section4