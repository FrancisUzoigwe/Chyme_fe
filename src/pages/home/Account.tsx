import { IoCopy } from "react-icons/io5"
import image from "../../../public/vite.svg"
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from "react";
import { GoSponsorTiers } from "react-icons/go"
import Options from "../../components/use/Options";
import { FaAddressCard } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { changeToggled, logOut } from "../../global/globalState";
const Account = () => {

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000); // Clear the success message after 2 seconds
  };

  const toggle = useSelector((state: any) => state.toggle)
  const dispatch = useDispatch()
  return (
    <>
      <div className={`w-full min-h-[100vh] flex flex-col items-center  ${toggle ? "bg-[#d8d8d8]" : "bg-[#FFFFFF]"}`} onClick={() => {
        dispatch(changeToggled())
      }}>
        <div className="my-1 text-[#40196D] font-bold text-[20px]">Account</div>
        <div className="my-3" />
        <div className="w-[75%] max-md:w-[95%] border border-gray-100 flex flex-col items-center min-h-[80vh] rounded-lg ">
          <div className="w-full min-h-[150px]  flex items-center justify-center">
            <div className="w-[95%] h-full flex items-center justify-between max-lg:flex-col">
              <div className="w-[40%] max-lg:w-full flex justify-between items-center  ">
                <div className="flex items-center">
                  <img src={image} alt="Profile" className="w-[80px] max-w-[65px] max-h-[65px] h-[80px] rounded-full border border-[gray]" />
                  <div className="ml-4 font-bold">
                    <div className="leading-[1.2] my-1">
                      <div>Kossyrisochukwu</div>
                      <div>Uzoigwe</div>
                    </div>
                    <div>
                      <div className="leading-[1.1] font-extralight">
                        <div className="text-[13px] text-[#40196D]">Copy username</div>
                        <CopyToClipboard text="@francisuzoigwe" onCopy={handleCopy}>
                          <button className="flex items-center text-[16px] text-[#40196D]"><IoCopy className="mr-1 text-[#40196D]" />@francisuzoigwe</button></CopyToClipboard>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="leading-[1.1] font-extralight">
                        <div className="text-[13px] text-[#40196D]">Copy account</div>
                        <CopyToClipboard text="@francisuzoigwe" onCopy={handleCopy}>
                          <button className="flex items-center text-[16px] text-[#40196D]"><IoCopy className="mr-1 text-[#40196D]" />2049681053</button></CopyToClipboard>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center"><GoSponsorTiers className="text-[#40196D]" />I</div>
              </div>
              <div className="w-[45%] h-[110px] justify-center max-lg:w-full flex flex-col items-center max-lg:mt-3 bg-[#40196D] rounded-md">
                <div className="text-white">Invite & Earn</div>
                <div className="my-[2px]" />
                <button className="bg-[green] px-4 py-2 rounded-[5px]  text-[12px] max-lg:w-[90%] text-white">View Code</button>
              </div>
            </div>
          </div>
          {copySuccess && <p className="absolute top-[50%]">Text Copied successfully!</p>}
          <div className="my-2" />
          <div className="w-[95%] grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-3">

            <Options text="View Profile" icon={<FaAddressCard />} link="/auth/view-profile" />
            <Options text="Security" link="/auth/security" />
            <Options text="Statement & Reports" link="/auth/statement" />
            <Options text="Legal" link="/auth/legal" />
            <Options text="Saved Cards" link="/auth/cards" />
            <Options text="FAQs" link="/auth/FAQs" />
          </div>
          <div className="my-4" />
          <div className="text-[red] hover:cursor-pointer " onClick={() => {
            dispatch(logOut())
          }}>Sign Out</div>
        </div>
      </div>
    </>
  )
}

export default Account