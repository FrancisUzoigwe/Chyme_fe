import Box1 from "./Box1";
import Box2 from "./Box2";

const Secure = () => {
  return (
    <div className="bg-[peru] mt-[50px] flex  justify-center h-[450px]">
      <div className="bg-[yellow] w-[90%] flex justify-between">
        <div className="bg-[lime] w-[40%]">
          <Box1 />
        </div>
        <div className="bg-[cyan] w-[55%]">
          <Box2 />
        </div>
      </div>
    </div>
  );
};

export default Secure;
