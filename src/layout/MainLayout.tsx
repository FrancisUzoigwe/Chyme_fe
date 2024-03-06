import { Outlet } from "react-router-dom"
import MainHeader from "../components/common/MainHeader"

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  )
}

export default MainLayout