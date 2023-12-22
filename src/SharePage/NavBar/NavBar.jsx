import { FaPhoneSquareAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return (
        // Navbar design section
        <div className="w-11/12 mx-auto py-5 flex flex-col md:flex-row items-center justify-between">
            <ul className="flex gap-6">
                <li className="hover:bg-[#61C5B3] py-2 md:px-4 hover:text-white duration-300 rounded"><Link>HOME</Link></li>
                <li className="hover:bg-[#61C5B3] py-2 md:px-4 hover:text-white duration-300 rounded"><Link>SHOP</Link></li>
                <li className="hover:bg-[#61C5B3] py-2 md:px-4 hover:text-white duration-300 rounded"><Link>DAILY DEALS</Link></li>
                <li className="hover:bg-[#61C5B3] py-2 md:px-4 hover:text-white duration-300 rounded"><Link>BLOG</Link></li>
                <li className="hover:bg-[#61C5B3] py-2 md:px-4 hover:text-white duration-300 rounded"><Link>PAGES</Link></li>
            </ul>
            <div className="flex items-center gap-2">
                <FaPhoneSquareAlt className="text-[#61C5B3]"></FaPhoneSquareAlt>
                <small>Hotmail: 01500000000</small>
            </div>
        </div>
    )
}

export default NavBar