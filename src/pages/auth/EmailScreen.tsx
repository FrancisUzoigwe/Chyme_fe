
import React from "react";

const EmailScreen: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#40196D]">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-[90%] container">
                <h1 className="text-3xl font-bold text-center max-md:text-2xl mb-4">Account Created</h1>
                <p className="text-center mb-6">
                    Your account has been created successfully! However, you need to verify
                    your email address to access the app.
                </p>
                <div className="w-full h-[35px] flex justify-center items-center">
                    <a className=" hover:bg-blue-600 text-[#40196D] hover:text-white transition-all duration-300 font-bold py-2 px-4 rounded w-full flex items-center justify-center"
                        href="https://mail.google.com"
                    >

                        Check Mail
                    </a>
                </div>
            </div>
        </div >
    );
};

export default EmailScreen;
