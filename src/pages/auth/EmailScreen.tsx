
const EmailScreen = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-purple-500">
            <div className="w-[400px] h-[150px] bg-white rounded-lg flex flex-col items-center ">
                <p className="text-[purple] my-2">An email has been sent to your mail </p>
                <p className="text-sm text-gray-500 w-[90%] text-center">
                    Please check your email for a verification link and follow the instructions to verify your email address.
                </p>
            </div>
        </div>
    )
}

export default EmailScreen