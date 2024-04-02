import { FC, InputHTMLAttributes } from "react";

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<iInput> = ({ label, ...props }) => {
  return (
    <div className="space-y-2 text-start">
      <label>{label}</label>

      <input
        {...props}
        className={
          "w-full flex justify-between outline-none cursor-text items-center bg-white text-gray-400 border shadow-md rounded-md px-4 py-2"
        }
      ></input>
    </div>
  );
};

export default Input;
