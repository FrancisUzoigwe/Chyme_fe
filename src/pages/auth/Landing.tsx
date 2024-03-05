import { FaApple, FaGooglePlay } from "react-icons/fa"
import Download from "../../components/use/Download"
import Change from "../../components/common/Change"
import Section2 from "../../components/use/Section2"

const Landing = () => {
    const images: any = [
        "https://media.istockphoto.com/id/1449728543/photo/black-hands-holding-new-3d-rendered-nigerian-naira-notes-closeup-of-hands-holding-various.jpg?s=612x612&w=0&k=20&c=EKYRSH9KXmVgyneC4XFNd1uHuQqeHV79HSvA__ksjDA=",
        "https://media.istockphoto.com/id/1365883173/photo/black-hands-holding-3d-rendered-1000-nigerian-naira-notes-closeup-of-hands-holding-nigerian.jpg?s=612x612&w=0&k=20&c=aIFopJ-OodNI6TOCMpF4xgp7ACdhhPpbyN12PTDR7y4=",
        "https://media.istockphoto.com/id/1368843374/photo/black-hand-holding-3d-rendered-nigerian-naira-notes.jpg?s=612x612&w=0&k=20&c=6Ts1aHjEaqge5tJmCim1ghXDouLzinzc060YI8WjjkM="
    ]
    return (
        <>
            <div className="w-full min-h-[100vh]  flex justify-center">
                <div className="w-[90%] h-auto flex justify-between items-center max-lg:flex-col">
                    <div className="max-w-[450px] mt-20">
                        <div className="text-[#40196D] font-black leading-[55px] text-5xl text-[Big] max-lg:w-full max-lg:text-center" >The money app for
                            Ajegunle
                        </div>
                        <div className=" my-6 font-black max-lg:text-center">Make free transfers, enjoy cashless payment options and earn interest on your savings with Chyme.</div>
                        <div className="flex w-full  items-center max-lg:justify-center">
                            <div className="w-[80%] flex justify-between items-center ">
                                <Download download="Download on the" store="App Store" icon={<FaApple className="text-2xl" />} />
                                <Download download="Download on the" store="Google play" icon={<FaGooglePlay className="text-2xl" />} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[300px] md:w-[450px] max-md:w-[300px] max-sm:w-auto h-[500px] mb-5 rounded-xl">
                            <Change images={images} />
                        </div>
                    </div>
                </div>
            </div>
            <Section2 />
        </>
    )
}

export default Landing