import { PacmanLoader } from "react-spinners"
const LoadingPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center backdrop-blur-sm absolute z-30">
            <div className="flex flex-col items-center">
                <PacmanLoader color="#36d7b7" />
                <div className="my-2 font-black">Establishing connection...</div>
            </div>
        </div>
    )
}

export default LoadingPage