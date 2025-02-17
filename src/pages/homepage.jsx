import React from 'react';
import { PiInstagramLogoBold } from "react-icons/pi";
import { VscGithub } from "react-icons/vsc";
import SplitText from "../components/SplitText";

const Homepage = ({ projekRef }) => {
  const scrollToProjects = () => {
    if (projekRef && projekRef.current) {
      projekRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-20 md:px-16 lg:px-32 py-10 bg-[#1A1A2E]">
      {/* Text Section */}
      <div className="text-center max-w-2xl">
        <h1 className=" md:text-3xl text-white/70 font-medium mb-4 animate-fadeIn">
          Halo Semua!
        </h1>
        <SplitText
          text="Nafhisya Zevania"
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white"
        />
        <p className="py-5 text-white/50 animate-fadeIn font-bold text-lg md:text-xl">
          Junior Web Developer & UI UX Designer
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-5 justify-center">
          <a href="https://github.com/Nafhisyazevania" target="_blank" rel="noopener noreferrer">
            <VscGithub className="text-3xl md:text-4xl text-white hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/piechaanafhisya?igsh=OW9tamNwcTFwb3Yy" target="_blank" rel="noopener noreferrer">
            <PiInstagramLogoBold className="text-3xl md:text-4xl text-white hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-8">
          <button
            className="text-lg md:text-xl text-white bg-violet-500 px-6 md:px-8 py-3 rounded-full hover:bg-violet-600 transition duration-300 shadow-md"
            onClick={scrollToProjects}
          >
            Lihat Projek Saya
          </button>
        </div>
      </div>

    </section>
  );
}

export default Homepage;
