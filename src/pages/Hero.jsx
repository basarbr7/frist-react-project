import React from "react";
import bgImg from "../assets/banner.jpeg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../layer/Container";

const Hero = () => {
  return (
    <section className="bg-[#eeeded]">
        <Container className="h-[100vh] flex gap-[130px] items-center">
          <div className="img w-[400px] h-[520px] rounded-[50%] overflow-hidden outline-dashed outline-[4px] outline-blue-500 hover:outline-[#b74f4f] p-4 bg-[#fd8d1e] hover:bg-[red] transition-all ease-linear duration-300">
            <img className="h-full w-full object-cover" src={bgImg} alt="" />
          </div>

          <div className="w-1/2">
            <span className="text-3xl font-medium mb-2">Hi</span>
            <h3 className="text-5xl font-semibold mb-1">
              I'm <span className="text-[#F14A00] font-poppins">Basar</span>
            </h3>
            <h4 className="text-3xl font-medium mb-4 font-roboto">
              Frontend React Developer
            </h4>
            <p className="text-base font-medium text-[#312f2f] mb-10 font-poppins">
              I'm Frontend Developer specializing in building interactive and
              responsive user interfaces with React. I can provide clean code
              and pixel perfect design. I also make the website more & more
              interactive with web animations.I can provide clean code and pixel
              perfect design. I also make the website more & more interactive
              with web animations.A responsive design makes your website
              accessible to all users, regardless of their device.
            </p>
            <button class="px-6 py-3 bg-[#0d0d0e] text-white font-medium rounded-lg shadow-md hover:bg-[#5750d6] transition-all ease-linear duration-400">
              Learn More
            </button>
            <div className="mt-10 flex gap-10 text-3xl">
              <span>
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
        </Container>
    </section>
  );
};

export default Hero;
