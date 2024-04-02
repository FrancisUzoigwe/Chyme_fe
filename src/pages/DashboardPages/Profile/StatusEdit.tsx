import { useState } from "react";
import { ClipLoader } from "react-spinners";

const StatusEdit = () => {
  const [load, setLoad] = useState(false);

  const status: any[] = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
    { label: "Divorced", value: "Divorced" },
    { label: "Widowed", value: "Widowed" },
    { label: "Separated", value: "Separated" },
  ];

  return (
    <div className="text-black text-center ">
      <h2 className="font-bold text-[20px] mt-3">Marital Status</h2>
      <p className="text-gray-600 mt-4">
        Please, select your marital status below.
      </p>

      <div className="w-full flex flex-col justify-start mt-12">
        <div className="text-start">
          <label htmlFor="status" className="block font-medium text-gray-700">
            Marital Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            defaultValue=""
          >
            <option value="" disabled selected>
              Select relationship
            </option>
            {status.map((el: any) => (
              <option key={el.value} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setLoad(false)}
          className="p-3 mt-12 rounded-lg text-white shadow-lg px-20 bg-purple-900"
        >
          Save {load && <ClipLoader size={20} color="white" className="ml-2" />}
        </button>
      </div>
    </div>
  );
};

export default StatusEdit;
