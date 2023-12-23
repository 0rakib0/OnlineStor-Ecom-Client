import { FaFlagCheckered, FaFlagUsa, FaRegHeart, FaRegUser, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            {/* top header section start */}
            <div className="px-6 bg-[#333] text-white flex justify-between py-2">
                <div className="flex gap-4 ">
                    <div>
                        <select className="border-0 bg-transparent outline-0 bg-red-300">
                            <option className="bg-[#333] text-white"><p>ENG</p></option>
                            <option className="bg-[#333] text-white">ARA</option>
                        </select>
                    </div>
                    <div>
                        <select className="border-0 bg-transparent outline-0">
                            <option className="bg-[#333] text-white"><p>USD</p></option>
                            <option className="bg-[#333] text-white">BDT</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FaRegUserCircle></FaRegUserCircle> <span><Link to='/login'>Login</Link></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegUser></FaRegUser> <span>My Accounts</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegHeart></FaRegHeart> <span>My Wishlist</span>
                    </div>
                </div>
            </div>
            {/* top header section end */}

            {/* middle header section start */}
            <div className="md:w-11/12 mx-auto md:p-4 flex flex-col md:flex-row items-center justify-between md:mt-0 mt-6">
                <div>
                    <img src="https://demo.smartaddons.com/templates/html/shoppystore/images/logo-green-cyan.png" alt="" />
                </div>
                <div className="my-6 md:my-0">
                    <select name="" id="" className="border-2 p-2 w-[6rem] outline-0 rounded-l-md">
                        <option value="">All Category</option>
                        <option value="">Phone & Tablet</option>
                        <option value="">Computer & laptop</option>
                        <option value="">Kids Dress</option>
                        <option value="">Electric</option>
                        <option value="">Woman</option>
                        <option value="">Headphones</option>
                        <option value="">Wearable Tech</option>
                        <option value="">Men's Clothing</option>
                        <option value="">Women's Clothing</option>
                        <option value="">Kid's Clothing</option>
                        <option value="">Accessories</option>
                        <option value="">Furniture</option>
                        <option value="">Kitchenware</option>
                        <option value="">Makeup</option>
                        <option value="">Fragrances</option>
                        <option value="">All Category</option>
                    </select>
                    <input type="text" placeholder="Search" className="border-2 p-2 outline-0 md:w-[20rem]" />
                    <button className="border-2 border-[#61C5B3] p-2 outline-0 bg-[#61C5B3] text-white rounded-r-md">Search</button>
                </div>
                <div className="bg-[#61C5B3] flex items-center gap-2 text-white p-2 rounded-md">
                    <FaShoppingCart></FaShoppingCart><p>0 ITEM - $0.00</p>
                </div>
            </div>
            <hr />
            {/* middle header section end */}
        </div>
    )
}

export default Header