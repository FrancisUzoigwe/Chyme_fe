import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../reUse/Input";
import { ClipLoader } from "react-spinners";

const UserNameEdit = () => {
  const { type }: any = useParams();

  const [load, setLoad] = useState(false);

  return (
    <div>
      {" "}
      <div className="text-black text-center ">
        <h2 className="font-bold text-[20px] mt-3">Username </h2>
        <p className="text-gray-600 mt-4">The user name on your account</p>

        <div className="w-full flex justify-center mt-12">
          <div className="w-[90%]">
            <Input placeholder={type.split("-").join(" ")} />

            <button
              onClick={() => setLoad(false)}
              className="p-3 w-full mt-12 rounded-lg text-white shadow-lg px-20 bg-purple-900"
            >
              Save{" "}
              {load && <ClipLoader size={20} color="white" className="ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNameEdit;
