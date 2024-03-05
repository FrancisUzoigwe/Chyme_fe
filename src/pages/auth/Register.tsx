import map from "../../assets/worldmap.png"
const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center" style={{ background: `url(${map})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "right" }}>
      <div className="w-full flex justify-center items-center">
        <div className="w-[400px] max-sm:w-[80%] h-[500px] flex flex-col items-center  bg-gray-200 rounded-lg">
          <div className="w-[90%] ">
            <div className="mt-5 font-black text-2xl">Signup to Chyme</div>
            <div className="my-1 text-[14px]">To signup, please add an email address and a password to get started.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register