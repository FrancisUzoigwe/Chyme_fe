import { Outlet } from "react-router-dom"
import MainHeader from "../components/common/MainHeader"
import SiderBar from "../components/use/SiderBar"
import { changeToggled, logOut } from "../global/globalState"
import { useDispatch } from "react-redux"

const MainLayout = () => {
  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(changeToggled())
  }, 5000)

  setTimeout(() => {
    dispatch(logOut())
  }, 100000)
  return (
    <div>
      <MainHeader />
      <div className="flex justify-between">
        <Outlet />
        <div className="flex justify-end">
          <SiderBar />
        </div>
      </div>
    </div>
  )
}

export default MainLayout