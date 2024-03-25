import Box from "../Boxes/Box";
import Landing from "../HeroPage/Landing";
import Join from "../Join/Join";
import General from "../Middle/General";
// import Slider from "../Slider/Slider";
import Stats from "../Stats/Stats";

const HomeScreen = () => {
  return (
    <div>
      <Landing />
      <Box />
      <Stats />
      <General />
      <Join />
      {/* <Slider /> */}
    </div>
  );
};

export default HomeScreen;
