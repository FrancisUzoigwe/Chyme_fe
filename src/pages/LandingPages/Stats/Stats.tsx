import { Zoom } from "react-swift-reveal";

const Stats = () => {
  return (
    <div className=" bg-[#40196D] flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover h-[12rem] max-md:h-fit items-center flex-wrap max-md:mt-[30px] max-md:py-[40px]">
      <div className=" w-[90%] h-[80%] flex items-center justify-between flex-wrap max-md:h-fit  max-md:w-[65%] max-md:gap-[40px] max-md:justify-center">
        <Zoom>
          <div className="text-[white] flex items-center justify-center flex-col ">
            <h2 className="text-[3.5rem] font-[600]  max-md:text-[40px]">
              150+
            </h2>
            <text className="text-[1.2rem] max-md:text-[18px]">
              Expert Team Members
            </text>
          </div>
        </Zoom>

        <Zoom>
          <div className="text-[white] flex items-center justify-center flex-col">
            <h2 className="text-[3.5rem] font-[600]  max-md:text-[40px]">
              $ 3.5B+
            </h2>
            <text className="text-[1.2rem] max-md:text-[18px]">
              Total Assets under Manage
            </text>
          </div>
        </Zoom>

        <Zoom>
          <div className="text-[white] flex items-center justify-center flex-col">
            <h2 className="text-[3.5rem] font-[600]  max-md:text-[40px]">
              270+
            </h2>
            <text className="text-[1.2rem] max-md:text-[18px]">
              Project Completed
            </text>
          </div>
        </Zoom>

        <Zoom>
          <div className="text-[white] flex items-center justify-center flex-col">
            <h2 className="text-[3.5rem] font-[600]  max-md:text-[40px]">
              99%
            </h2>
            <text className="text-[1.2rem] max-md:text-[18px]">
              Customer Satisfaction
            </text>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Stats;
