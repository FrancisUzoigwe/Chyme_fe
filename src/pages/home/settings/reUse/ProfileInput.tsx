import { FC } from "react";
import { Link } from "react-router-dom";

export interface iProfileInput {
  type?: string;
  to?: string;
  val?: string;
}

const ProfileInput: FC<iProfileInput> = ({ to, type, val }) => {
  return (
    <div className="space-y-2">
      <label>{type}</label>

      <div className="w-full flex justify-between cursor-text items-center bg-white text-gray-400 border shadow-md rounded-md px-4 py-2">
        <p>{val}</p>
        <Link
          to={`edit/${to}`}
          className="rounded-md bg-purple-900 px-3 text-sm py-[3px] text-white"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ProfileInput;
