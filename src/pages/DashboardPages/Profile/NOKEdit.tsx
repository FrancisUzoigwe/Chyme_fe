import Input from "../reUse/Input";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const NOKEdit = () => {
  const [load, setLoad] = useState(false);

  const relationships: any[] = [
    { label: "Mother", value: "mother" },
    { label: "Brother", value: "brother" },
    { label: "Sister", value: "sister" },
    { label: "Uncle", value: "uncle" },
    { label: "Aunt", value: "aunt" },
  ];

  return (
    <div className="text-black text-center ">
      <h2 className="font-bold text-[20px] mt-3">Change Next of Kin</h2>
      <p className="text-gray-600 mt-4">
        Please, type in details of your next of kin.
      </p>

      <div className="w-full flex justify-center mt-12">
        <div className="w-[90%] space-y-6">
          <div className="grid grid-cols-2 gap-5">
            <Input placeholder={"First Name"} label="First Name" />
            <Input placeholder={"Last Name"} label="Last Name" />
          </div>
          <Input placeholder={"example@here.com"} label="Email Address" />
          <Input placeholder={"House Address"} label="House Address" />
          <Input placeholder={"0800 000 0000"} label="Phone Number" />

          <div className="text-start">
            <label
              htmlFor="relationship"
              className="block font-medium text-gray-700"
            >
              Relationship
            </label>
            <select
              id="relationship"
              name="relationship"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue=""
            >
              <option value="" disabled selected>
                Select relationship
              </option>
              {relationships.map((relationship: any) => (
                <option key={relationship.value} value={relationship.value}>
                  {relationship.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setLoad(false)}
            className="p-3 mt-12 rounded-lg text-white shadow-lg px-20 bg-purple-900"
          >
            Save{" "}
            {load && <ClipLoader size={20} color="white" className="ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NOKEdit;
