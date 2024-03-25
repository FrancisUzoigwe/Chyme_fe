interface BoxProps {
  title: string;
  icon: JSX.Element;
}

const Boxes: React.FC<BoxProps> = ({ title, icon }) => {
  return (
    <div className="bg-[#FFFFFF] h-[110px]  w-[400px] flex items-center justify-center  hover:cursor-pointer hover:shadow-2xl">
      <div className="w-[90%] h-[85%] flex justify-between flex-col">
        <div className="bg-[#DFE3FF] h-[40px] w-[40px] rounded-[50%] text-[18px] flex items-center justify-center">
          {icon}
        </div>
        <h3 className="leading-[1.3rem] font-[600]">{title}</h3>
      </div>
    </div>
  );
};

export default Boxes;
