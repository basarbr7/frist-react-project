import React from "react";
import myLogo from "../assets/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Container from "../layer/Container";

const Navbar = () => {
  return (
    <nav className="main bg-[#ddc1bb]">
        <Container className="flex justify-between items-center  p-1">
          <div className="logo cursor-pointer">
            <img src={myLogo} alt="Logo" />
          </div>
          <div className="menu">
            <ul className="flex gap-10 font-poppins">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Login</li>
              <li className="cursor-pointer">Logout</li>
            </ul>
          </div>

          <div className="search flex items-center gap-x-6">
            <div className="relative">
              <input
                className="w-[200px] pl-5 pr-10 py-2 border-[1px] outline-none bg-[#ffffffdf] rounded-3xl placeholder:text-[#929090] text-white focus:text-black"
                type="text"
                placeholder="Search query.."
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 right-4 text-xl text-[#0f0e0e] cursor-pointer">
                <FaSearch />
              </span>
            </div>
            <span className="text-3xl cursor-pointer text-[#706f6f]">
              <FaShoppingCart />
            </span>
          </div>
        </Container>
    </nav>
  );
};

export default Navbar;
