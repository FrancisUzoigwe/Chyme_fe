import React from "react";

interface iDownload {
    store?: string;
    download?: string;
    icon?: any;
}

const Download: React.FC<iDownload> = ({ store, download, icon }) => {
    return (
        <div className="flex items-center bg-black text-white px-3 py-1 rounded-md hover:cursor-pointer hover:scale-[1.02] transition-all duration-300">
            <div className="mr-2">{icon}</div>
            <div className=" flex flex-col ">
                <div className="text-[12px]">{download}</div>
                <div className="-mt-1">{store}</div>
            </div>
        </div>
    )
}

export default Download