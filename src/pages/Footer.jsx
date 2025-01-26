import React from "react";
import Container from "../layer/Container";
import myLogo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10">
      <Container>
        <div className="grid grid-cols-4 gap-[80px] ">
          <div className="col-span-1">
            <img src={myLogo} alt="" className="w-[120px]" />
            <p className="text-base mt-5">
              We are a team of passionate developers and designers committed to
              delivering high-quality projects and solutions.
            </p>
          </div>

          <div className="col-span-3 flex justify-around">
            <div>
              <h2 className="text-xl font-bold mb-4 text-[#242121]">Quick Links</h2>
              <ul>
                <li className="mb-2 hover:text-[blue]">
                  <a href="#home">Home</a>
                </li>
                <li className="mb-2 hover:text-[blue]">
                  <a href="#about">About</a>
                </li>
                <li className="mb-2 hover:text-[blue]">
                  <a href="#services">Services</a>
                </li>
                <li className="mb-2 hover:text-[blue]">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-[#242121]">Contact</h2>
              <p className="text-sm mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i> Shymoli, Dhaka,
                Bangladesh
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-phone mr-2"></i> 01982043666
              </p>
              <p className="text-sm">
                <i className="fas fa-envelope mr-2"></i> info@gamil.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-[#242121] ">Follow Us</h2>
              <div className="flex gap-4 text-3xl ">
                <span className="text-[#2846bc] ">
                    <FaFacebook />
                </span>
                <span className="text-[#ff4000]">
                    <FaInstagram />
                </span>
                <span className="text-[#2846bc]">
                    <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-[#c7c6c6] pt-5">
          <p className="text-sm text-gray-400">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
