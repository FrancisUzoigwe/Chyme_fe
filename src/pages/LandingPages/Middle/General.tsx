import First from "./First";
import Fourth from "./Fourth";
import Second from "./Second";
import Third from "./Third";

const General = () => {
  return (
    <div className="flex gap-[20px] flex-col mobile:gap-[50px]">
      <First />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
};

export default General;
