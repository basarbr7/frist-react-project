import React from "react";
import Container from "../layer/Container";
import myPic from '../assets/myPic2.png';
import "./../App.css"

const skills = [
  { name: "HTML", level: 85, color: "bg-red-500" },
  { name: "CSS", level: 70, color: "bg-blue-500" },
  { name: "JavaScript", level: 54, color: "bg-yellow-500" },
  { name: "React", level: 49, color: "bg-teal-500" },
  { name: "Tailwind CSS", level: 50, color: "bg-purple-500" },
];

const Skills = () => {
  return (
    <section className="pt-16 pb-10 bg-gray-50">
      <Container className=" px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-l from-red-500 to-yellow-400 inline-block px-2 py-1 rounded-md">
            My Skills
          </h2>
          <p className="text-gray-600 mt-4 text-lg font-poppins">
            These are the technologies I work with and my proficiency in each.
          </p>
        </div>

        <div className="flex justify-center items-center gap-[50px] ">
          <div className="w-[40%] mt-5">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">My Expertise</h2>
            <p className="text-gray-600 text-lg mb-4">
              I specialize in modern front-end development technologies with a
              strong focus on creating responsive and visually appealing user
              interfaces.
            </p>
            <div className="rounded-lg w-[200px] h-auto overflow-hidden ">
                <img src={myPic} alt="Skills" className="object-cover "/>
            </div>
          </div>

          <div className="w-[40%]">
            {skills.map((skill, index) => (
              <div key={index} className="mt-5">
                <div className="flex justify-between text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-4 bg-gray-200 rounded-full">
                  <div
                    className={`h-full ${skill.color} rounded-full skill-animation`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
