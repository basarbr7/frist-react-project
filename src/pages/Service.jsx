import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import Container from "../layer/Container";

const services = [
  {
    icon: <FaCode/>,
    title: "Web Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis qui saepe unde ullam? Consectetur non voluptas veniam quaerat rem.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-green-500"/>,
    title: "App Development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis qui saepe unde ullam? Consectetur non voluptas veniam quaerat rem.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-pink-500" />,
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis qui saepe unde ullam? Consectetur non voluptas veniam quaerat rem.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
        <Container className="px-4 text-center">
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We provide a wide range of services to help you build, design, and
            grow your digital presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 py-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
                <div className="mb-4 text-4xl text-blue-500">{service.icon}</div>
                <div className="text-xl font-bold font-poppins mb-2">{service.title}</div>
                <div className="text-[#464444] text-base font-poppins">{service.description}</div>
              </div>
            ))}
          </div>
        </Container>
    </section>
  );
};

export default Services;
