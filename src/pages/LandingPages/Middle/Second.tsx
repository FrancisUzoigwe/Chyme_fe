import { Zoom } from "react-swift-reveal";
const Second = () => {
  return (
    <div className=" flex flex-wrap max-md:w-[100%]  h-[600px] max-md:h-fit max-md:py-[10px] max-md:gap-[20px] items-center justify-evenly">
      <Zoom>
        <div className=" h-[90%] w-[40%] max-md:w-[90%]">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dbpcptmco/image/upload/v1711367081/undraw_online_banking_re_kwqh_fc1lyd.svg"
            alt="Second_image"
            className="h-[80%] w-[90%]"
          />
        </div>
        <div className="  h-[90%] w-[33%] max-md:w-[90%] flex  justify-center flex-col gap-[20px]">
          <h1 className="font-[900] text-[35px] max-md:text-[30px] leading-[44px] max-md:leading-[39px] text-[#40196D]">
            Your phone + our app + a debit card = a simpler life.
          </h1>
          <p className="font-[500] text-[18px] max-md:text-[16px] leading-[27px] max-md:leading-[25px] text-[black]">
            We designed a money app for your lifestyle, and you can get a debit
            card to go with it. That's all you need to make the right money
            moves.
          </p>
        </div>
      </Zoom>
    </div>
  );
};

export default Second;
