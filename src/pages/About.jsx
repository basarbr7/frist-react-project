import React from "react";
import "./../App.css";
import myimg from "../assets/myPic.png";

const About = () => {
  return (
    <section className="about bg-slate-200">
      <div className="aboutMain mb-20">
        <header class="header-design bg-slate-200">
          <div className='container mx-auto h-[100vh] flex gap-[130px] items-center'>
                      <div className='img w-[400px] h-[520px] rounded-[50%] overflow-hidden'>
                          <img className='h-full w-full object-cover' src={myimg} alt="" />
                      </div>
                      <div className="w-1/2">
                          <span className='text-3xl font-medium mb-2'>Hi</span>
                          <h3 className='text-5xl font-semibold mb-1'>I'm <span className='text-[#F14A00]'>Basar</span></h3>
                          <h4 className='text-3xl font-medium mb-4'>Frontend React Developer</h4>
                          <p className='text-base font-medium text-[#312f2f] mb-10'>I'm Frontend Developer specializing in building interactive and responsive user interfaces with React. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
                          <button class="px-6 py-3 bg-[#0d0d0e] text-white font-medium rounded-lg shadow-md hover:bg-[#5750d6] transition-all ease-linear duration-400">
                            Learn More
                          </button>
                      </div>
                  </div>
          <div class="footer-wave"></div>
        </header>
      </div>
    </section>
    
  );
};

export default About;
