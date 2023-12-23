import { FaPhoneAlt, FaRedo } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
const Service = () =>{
    return (
        <div className="my-6 bg-base-200 p-4 flex-col md:flex-row flex justify-between">
            <div className="flex items-center gap-2">
                <div className="text-4xl bg-[#61C5B3] p-2 rounded-full text-white">
                    <TbTruckDelivery></TbTruckDelivery>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">FREE SHIPPING</h4>
                    <p>On all orders over $49.00</p>
                </div>
            </div>
            <div className="flex items-center gap-4 my-4 md:my-0">
                <div className="text-4xl bg-yellow-300 p-2 rounded-full text-white">
                    <FaRedo></FaRedo>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">MONEY BACK GUARANTEE !</h4>
                    <p>100% Money Back – 30 Days</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-4xl bg-[#61C5B3] p-2 rounded-full text-white">
                    <FaPhoneAlt></FaPhoneAlt>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">FREE SHIPPING</h4>
                    <p>On all orders over</p>
                </div>
            </div>
        </div>
    )
}

export default Service