import moment from "moment";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMastercomfig } from "react-icons/si";

const Footer = () => {
  const currentDate = moment().format("YYYY");
  const buttonData = [
    {
      icon: <SiFacebook />,
      url: "https://web.facebook.com/profile.php?id=61554003966869",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://web.facebook.com/profile.php?id=61554003966869",
    },
    { icon: <FaXTwitter />, url: "https://twitter.com/shopwithfamous" },

    { icon: <FaSquareInstagram />, url: "https://twitter.com/shopwithfamous" },
  ];

  const handleClickURL = (url: string) => () => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full mt-[40px] flex justify-center items-center flex-col bg-[#40196D] pt-[50px] pb-[20px] max-md:pb-[30px] max-md:pt-[20px] gap-[50px]">
      <div
        className=" flex w-[90%]  justify-between flex-wrap max-md:gap-[35px]"
      >
        <div className=" w-[300px] flex flex-col gap-[20px] ">
          {" "}
          <a className="block text-teal-600" href="/">
            <div className="text-[white] text-[30px] font-black flex items-center ">
              {" "}
              <div className="mr-2">
                <SiMastercomfig />
              </div>
              AJMoney
            </div>
          </a>
          <div className="flex items-center  gap-[8px]">
            {buttonData.map((button, index) => (
              <div
                key={index}
                className=" text-[black] cursor-pointer rounded-lg overflow-hidden relative flex items-center justify-center  p-[8px] transition duration-300 ease-in-out hover:bg-opacity-40 backdrop-blur-3xl animate-pulse bg-[white]"
                onClick={handleClickURL(button.url)}
              >
                <div className="bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 p-[1px] h-[20px] w-[20px] text-[20px]">
                  {button.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" text-[white]  w-[200px] flex flex-col gap-[15px]  justify-start ">
          <text className="text-[19px] leading-[18px] font-[700] hover:cursor-pointer hover:underline hover:underline-offset-2">
            Quick Link
          </text>
          <nav className="text-[16px] font-[400]  text-[white] leading-[16px] transition hover:text-gray-500/75 hover:cursor-pointer">
            Home
          </nav>
          <nav className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-gray-500/75 hover:cursor-pointer">
            About
          </nav>
          <nav className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-gray-500/75 hover:cursor-pointer">
            Speakers
          </nav>
          <nav className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-gray-500/75 hover:cursor-pointer">
            Register
          </nav>
          <nav className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-gray-500/75 hover:cursor-pointer">
            Contact
          </nav>
        </div>

        <div className=" text-[white]  w-[300px] flex flex-col gap-[20px]  justify-start">
          <text className="text-[19px] leading-[18px] font-[700] hover:cursor-pointer hover:underline hover:underline-offset-2">
            Contact
          </text>
          <nav className="text-[16px] font-[400] leading-[18px]  text-[white] flex items-center gap-[11px]">
            <div className="text-[16px] text-[#E41818]">
              <FaLocationDot />
            </div>
            Lagos, Nigeria.
          </nav>
          <nav className="text-[16px] font-[400] leading-[16px]  text-[white] flex items-center gap-[10px]">
            <div>
              <img
                src="https://res.cloudinary.com/dbpcptmco/image/upload/v1710753293/Vector_1_ys5ovq.png"
                alt="email_Image"
                draggable="false"
              />
            </div>
            chyme@gmail.com
          </nav>
          <nav className="text-[16px] font-[400] leading-[16px]  text-[white] flex items-center gap-[10px]">
            <div>
              <img
                src="https://res.cloudinary.com/dbpcptmco/image/upload/v1710753293/Vector_2_fuzgej.png"
                alt="phone_Image"
                draggable="false"
              />
            </div>
            (+234)-9135971419
          </nav>
        </div>

        <div className=" text-[white] w-[300px] max-lg:mt-3 flex flex-col gap-[10px]  justify-start">
          <text className="text-[19px] leading-[18px] font-[700] hover:cursor-pointer hover:underline hover:underline-offset-2">
            Our NewsLetter
          </text>
          <text className="text-[16px]  font-[400] leading-[20px] text-[white] ">
            Be among the first to receive news about Chyme directly to your
            inbox.
          </text>
          <div>
            <input
              className=" bg-[#F5F5F5] w-[95%]  mb-4  rounded-[20px] px-3 h-[40px] outline-none text-[16px] font-[500] text-[black] max-md:h-[40px]"
              required
              maxLength={50}
              type="text"
              placeholder="Your Name"
            />
            <input
              className=" bg-[#F5F5F5] w-[95%]  mb-4  rounded-[20px] px-3 h-[40px] outline-none text-[16px] font-[500] text-[black] max-md:h-[40px]"
              required
              maxLength={50}
              type="text"
              placeholder="Your Emails"
            />
          </div>
        </div>
      </div>
      <div className="text-[13px] font-[400] text-[white]">
        Copyright AJMoney {currentDate}. All right reserved
      </div>
    </div>
  );
};

export default Footer;
