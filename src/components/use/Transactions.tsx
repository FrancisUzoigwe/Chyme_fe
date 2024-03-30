import image from "../../assets/woman.png"
const Transactions = () => {

    interface iTransfer {
        name?: string;
        image?: any;
        amount?: string;
    }
    const transfer: iTransfer[] = [
        {
            image: image,
            name: "WhiteCeramics",
            amount: "+ ₦ 1,000,000"
        },
        {
            image: image,
            name: "WhiteCeramics",
            amount: "+ ₦ 1,000,000"
        },
        {
            image: image,
            name: "Udosinachi Ent",
            amount: "+ ₦ 50.000.00"
        },
        {
            image: image,
            name: "Bolu & Sons",
            amount: "- ₦ 300.000.00"
        },
        {
            image: image,
            name: "Bolu & Sons",
            amount: "- ₦ 300.000.00"
        },
        {
            image: image,
            name: "Bolu & Sons",
            amount: "- ₦ 300.000.00"
        },
        {
            image: image,
            name: "Bolu & Sons",
            amount: "- ₦ 300.000.00"
        },
    ]
    return (
        <>
            {transfer.map((props) => {
                return (
                    <div className="w-full flex justify-between items-center my-1">
                        <div className="flex items-center">
                            <img src={props.image} alt="Image" className="object-cover object-top w-[40px] h-[40px] rounded-full border  " />
                            <div className="ml-1 text-[13px] ">{props.name}</div>
                        </div>
                        <div className="text-[14px] font-bold">{props.amount}</div>
                    </div>
                )
            })}</>
    )
}

export default Transactions
