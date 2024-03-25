import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ng from "../../../assets/NG.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeToggled } from "../../../global/globalState";
import ProfileInput, { iProfileInput } from "./reUse/ProfileInput";
import head from "../../../assets/head.png";
import { IoCopy } from "react-icons/io5";

const ViewProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state: any) => state.toggle);

  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };

  const data: iProfileInput[] = [
    {
      to: "username",
      type: "Your UserName",
      val: "Rufai-Ahmed",
    },
    {
      to: "house-address",
      type: "House Address",
      val: " Address ",
    },
    {
      to: "next-of-kin",
      type: "Next of Kin",
      val: "Add Next of Kin",
    },
    {
      to: "phone-number",
      type: "Phone Number",
      val: "0800 000 0000",
    },
    {
      to: "account-name",
      type: "Account Name",
      val: "Account Name",
    },
    {
      to: "email-address",
      type: "Email Address",
      val: "Email Address",
    },
    {
      to: "identification",
      type: "Identification",
      val: "Identification",
    },
    {
      to: "status",
      type: "Status",
      val: "Status",
    },
  ];

  return (
    <motion.div
      variants={motionVariant}
      initial="close"
      animate="open"
      className={`w-full min-h-[40vh] pb-28 pt-4 flex items-center flex-col ${
        toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"
      }`}
      onClick={() => {
        dispatch(changeToggled());
      }}
    >
      <div className="w-full flex justify-center text-purple-900">
        <div className="lg:w-[50%] w-[90%]">
          <div className="text-[25px] flex justify-center gap-4 items-center text-center font-bold mt-5">
            Account Details <img src={ng} width={30} />
          </div>

          <div className="w-full  rounded-md border shadow-md mt-5 min-h-[70vh] p-7 py-10 pb-14">
            <div
              onClick={() => navigate(-1)}
              className="flex cursor-pointer items-center  gap-1"
            >
              <FaAngleLeft />
              <div>Back</div>
            </div>

            <div className="flex gap-5 items-center justify-center my-16 mt-3">
              <img src={head} width={100} />

              <div className="space-y-2">
                <h3 className="text-black font-bold text-[20px]">
                  Rufai Ahmed
                </h3>

                <div className="text-[14px]">
                  <div className="font-semibold">Copy Username</div>
                  <div className="flex items-center gap-1">
                    <IoCopy size={20} />
                    <div>@aydee</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full grid lg:grid-cols-2 gap-7 mt-10 text-black">
              {data.map((el: iProfileInput) => (
                <ProfileInput
                  to={el.to}
                  key={el.to}
                  type={el.type}
                  val={el.val}
                />
              ))}

              <div className="text-red-400 w-full px-3 py-2 bg-white shadow-md font-bold text-[17px] flex justify-between items-center mt-8">
                <div>Delete Account</div>
                <div>
                  <FaAngleRight />
                </div>
              </div>
              <div className="text-red-400 w-full px-3 py-2 bg-white shadow-md font-bold text-[17px] flex justify-between items-center mt-8">
                <div>Restrict Account</div>
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewProfile;
