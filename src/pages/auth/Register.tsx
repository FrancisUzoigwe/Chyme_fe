import map from "../../assets/world_map.jpg"
const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center" style={{ background: `url(${map})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right" }}>
      <div>
        <div className="w-[400px] h-[500px] bg-[#40196D] rounded-lg"></div>
      </div>
    </div>
  )
}

export default Register