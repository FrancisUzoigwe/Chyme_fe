import Change from "../../../components/common/Change";
import money from "../../../assets/money.png";
import money1 from "../../../assets/money1.png";
import hand from "../../../assets/hand.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Zoom } from "react-swift-reveal";

const Landing = () => {
  const images = [money, money1, hand];

  return (
    <>
      <div className="w-full min-h-[100vh]  flex justify-center" id="home">
        <div className="w-[90%] h-auto flex justify-between items-center max-lg:flex-col">
          <div className="max-w-[450px] mt-20 flex  flex-col">
            <div className="uppercase bg-[#F5F0FF] h-[30px] mb-[30px] w-[110px] flex items-center justify-center rounded-[50px] text-[#E270C5] ">
              Finance
            </div>
            <Zoom>

              <div className="text-[#40196D] font-black leading-[55px] text-5xl  max-lg:w-full max-lg:text-center max-md:text-4xl uppercase">
                The money app for Ajegunle
              </div>
            </Zoom>
            <div className=" my-6 font-black max-lg:text-center">
              Make free transfers, collet payments, enjoy cashless payment
              options and earn interest on your savings with Chyme.
            </div>
            <div className="flex w-full  items-center max-lg:justify-center">
              <div className="w-[80%] max-md:flex-col max-md:items-center flex justify-between items-center ">
                <Link to="/register">
                  <button className="py-3 px-5 rounded-md hover:cursor-pointer text-white flex items-center bg-[#40196D]">
                    Create Account{" "}
                    <i className="ml-2 ">
                      <FaArrowRight />
                    </i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[300px] md:w-[450px] max-md:w-[300px] max-sm:w-auto h-[500px] mb-5 rounded-xl">
              <Change images={images} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
