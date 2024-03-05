import { useDispatch, useSelector } from "react-redux"
import { changeToggled } from "../../global/globalState"
import { IoClose } from "react-icons/io5"

const SiderBar = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    return (
        <div className={`${toggle ? "fixed z-[9999] top-0  left-0 w-full h-full backdrop-blur-sm bg-purple-900 opacity-70 text-white lg:hidden" : "bg-[red]"}`}>
            <div className="absolute right-6 top-4" onClick={() => {
                dispatch(changeToggled())
            }}><IoClose className="text-3xl hover:cursor-pointer text-[#40196D] opacity-100 "/></div>
        </div>
    )
}

export default SiderBar