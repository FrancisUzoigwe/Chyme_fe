const Fourth = () => {
  return (
    <div className=" flex flex-wrap mobile:w-[100%]  h-[600px] mobile:h-fit mobile:py-[10px] mobile:gap-[20px] items-center justify-evenly">
      <div className=" h-[90%] w-[40%] mobile:w-[90%]">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1711367081/undraw_online_banking_re_kwqh_fc1lyd.svg"
          alt="Fourth_image"
          className="h-[80%] w-[90%]"
        />
      </div>
      <div className="  h-[90%] w-[33%] mobile:w-[90%] flex  justify-center flex-col gap-[20px]">
        <h1 className="font-[900] text-[35px] mobile:text-[30px] leading-[44px] mobile:leading-[39px] text-[#40196D]">
          We're always happy to help you.
        </h1>
        <p className="font-[500] text-[18px] mobile:text-[16px] leading-[27px] mobile:leading-[25px] text-[black]">
          You can chat with us on the app, slide into our DMs, tweet, leave an
          Instagram comment, send an email or call. However you choose to reach
          out, there'll always be a friendly person there to make your life
          easy.
        </p>
      </div>
    </div>
  );
};

export default Fourth;
