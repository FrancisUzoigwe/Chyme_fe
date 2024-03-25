import Boxes from "./Boxes";
import { SiPlanetscale } from "react-icons/si";
import { PiPiggyBankFill } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { GiBorderedShield } from "react-icons/gi";

interface BoxData {
  id: number;
  title: string;
  icon: JSX.Element;
}

const boxData: BoxData[] = [
  {
    id: 1,
    title:
      "Order a Kuda Visa card on the app with pickup and delivery options.",
    icon: <GiBorderedShield />,
  },
  {
    id: 2,
    title: "Enjoy cashless payment options online and offline",
    icon: <MdPayments />,
  },
  {
    id: 3,
    title: "Get 25 free transfers to Nigerian banks every month.",
    icon: <FaMoneyBillTransfer />,
  },
  {
    id: 4,
    title: "Save money automatically any time you spend",
    icon: <SiPlanetscale />,
  },
  {
    id: 5,
    title: "Save money automatically any time you spend.",
    icon: <PiPiggyBankFill />,
  },
];

const Box = () => {
  return (
    <div className="mt-[4rem] mb-[2rem] py-[20px]  flex items-center flex-wrap justify-center gap-[2rem]">
      {boxData.map((box) => (
        <Boxes key={box.id} title={box.title} icon={box.icon} />
      ))}
    </div>
  );
};

export default Box;
