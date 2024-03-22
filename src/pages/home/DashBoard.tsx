import { useDispatch } from "react-redux"
import { logOut } from "../../global/globalState"

const DashBoard = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-full ">
      <div onClick={() => {
        dispatch(logOut())
      }}>HomeScreen</div>
    </div>
  )
}

export default DashBoard