import "./navbar.css"
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState, useEffect } from "react";
import NabLinks from "../NabLinks";
import SearchIcon from '@mui/icons-material/Search';


function Navbar() {

    const [active , setActive] = useState(false)

    const isActive=()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive)
        };
    }, []);
  return (
    <div className="navbar  text-white">
        <div className={`${active ? 'nav-Container active' : 'custom flex justify-between items-center bg-transparent px-[14px] py-[10px]'} `}>
            <div className="logo w-fit flex items-end">
                <span className=" flex items-end gap-1 text-4xl logo">fiverr</span><span className=""><div className=" w-[9px] h-[9px] rounded-full bg-green-700 mt-[-15px]"></div></span>
            </div>
            {active &&(
                <div className="w-[400px] flex justify-between items-center">
                <input type="text" placeholder="What service are you looking for today?" className="w-[90%] py-2 outline-none border indent-3" />
                <div className="bg-black h-[42px] w-[45px] flex justify-center items-center">
                <SearchIcon  className=" text-white"/>
                </div>
                </div>
            )}
            <div className="link hidden sm:block md:block ">
                <ul className=" block sm:flex sm:gap-7 items-center">
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer sm:hidden md:block">Fiverr Business</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer sm:hidden md:block">Explore</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer flex items-center gap-2 sm:hidden md:flex"><LanguageIcon fontSize="25px"/> English</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer flex items-center gap-2 sm:hidden md:flex"><MonetizationOnIcon fontSize="25px"/>USD</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer sm:hidden md:block">Become a Seller</li>
                    <div className=" sm:flex sm:gap-5 sm:items-center">
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer">Sign in</li>
                    <li className=" mt-2 sm:mt-0 font-semibold cursor-pointer border h-[40px] px-6 flex justify-center items-center hover:bg-green-600 hover:text-black rounded-[5px] hover:border-green-600">Join</li>
                    </div>
                </ul>
            </div>

            <div className=" sm:hidden">
            <MenuOpenIcon  className=" cursor-pointer"/>
            </div>
        </div>

        {active && (
            <>
           <NabLinks />
            </>
        )}
    </div>
  )
}

export default Navbar