import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeToggled } from "../global/globalState";
import Header from "../blocks/Header";
import Footer from "../blocks/Footer";

const LandingPageLayout = () => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(changeToggled());
  }, 10000);

  // setTimeout(() => {
  //     dispatch(logOut())
  // }, 100000)
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
