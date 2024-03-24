import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Params, useNavigate, useParams } from "react-router-dom";
import { changeToggled } from "../../../global/globalState";
import EmailEdit from "./edit/EmailEdit";
import NOKEdit from "./edit/NOKEdit";
import StatusEdit from "./edit/StatusEdit";
const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state: any) => state.toggle);

  const { type }: Readonly<Params<string>> | undefined | any = useParams();

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

  return (
    <motion.div
      variants={motionVariant}
      initial="close"
      animate="open"
      className={`w-full min-h-[40vh]  pt-4 flex items-center flex-col ${
        toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"
      }`}
      onClick={() => {
        dispatch(changeToggled());
      }}
    >
      <div className="w-full flex justify-center text-purple-900">
        <div className="lg:w-[30%] ">
          <div className="text-[25px] flex justify-center gap-4 items-center text-center font-bold mt-5 capitalize">
            {type?.split("-").length > 1 ? (
              <>
                <div className="capitalize">{type.split("-").join(" ")}</div>
              </>
            ) : (
              type
            )}
          </div>

          <div className="w-full  rounded-md border shadow-md mt-5 min-h-[60vh] p-7 py-10 pb-14">
            <div
              onClick={() => navigate(-1)}
              className="flex cursor-pointer items-center  gap-1"
            >
              <FaAngleLeft />
              <div>Back</div>
            </div>

            {type.includes("email") ? (
              <EmailEdit />
            ) : type.includes("next-of-kin") ? (
              <NOKEdit />
            ) : type.includes("status") ? (
              <StatusEdit />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
