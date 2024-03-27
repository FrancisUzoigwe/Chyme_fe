import { useDispatch, useSelector } from "react-redux";
import Box from "../Boxes/Box";
import Landing from "../HeroPage/Landing";
import Join from "../Join/Join";
import General from "../Middle/General";
import Stats from "../Stats/Stats";
import { changeToggled } from "../../../global/globalState";
import AuthSider from "../../../components/use/AuthSider";

const HomeScreen = () => {
  const dispatch = useDispatch()
  const toggle = useSelector((state: any) => state.toggle)
  return (
    <>
      {toggle && <AuthSider />}
      <div className="" onClick={() => {
        dispatch(changeToggled())
      }}>
        <Landing />
        <Box />
        <Stats />
        <General />
        <Join />
        {/* <Slider /> */}
      </div>
    </>
  );
};

export default HomeScreen;
