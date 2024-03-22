import { Outlet } from "react-router-dom"
import MainHeader from "../components/common/MainHeader"
import SiderBar from "../components/use/SiderBar"

const MainLayout = () => {
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