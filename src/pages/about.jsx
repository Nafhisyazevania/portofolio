import React, { useEffect, useRef } from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import ReactJs from "../assets/reactjs.png";
import MongoDB from "../assets/mongodb.png";
import MySQL from "../assets/mysql.png";
import Flutter from "../assets/flutter.png";
import Figma from "../assets/figma.png";
import Canva from "../assets/canva.png";

const About = () => {
    const skills = [
        { name: "HTML", image: Html },
        { name: "CSS", image: Css },
        { name: "JavaScript", image: Javascript },
        { name: "Bootstrap", image: Bootstrap },
        { name: "Tailwind", image: Tailwind },
        { name: "ReactJs", image: ReactJs },
        { name: "MongoDB", image: MongoDB },
        { name: "MySQL", image: MySQL },
        { name: "Flutter", image: Flutter },
        { name: "Figma", image: Figma },
        { name: "Canva", image: Canva },
    ];

    const scrollRef = useRef(null);
    const scrollSpeed = 2;

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        
        const scrollInterval = setInterval(() => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        }, 30);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <section id="about" className="bg-gradient-to-r from-[#4b285f] to-[#70506c] text-white min-h-screen p-6 md:p-10">
            <div className="max-w-5xl mx-auto">
                {/* Bagian Tentang Saya */}
                <div className="text-center p-2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">Tentang Saya</h1>
                    <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-justify">
                        Saya memiliki keterampilan dalam HTML, CSS, JavaScript, dan framework
                        seperti Bootstrap, Tailwind, dan ReactJS. Saya juga memahami dasar-dasar backend menggunakan NoSQL
                        (MongoDB) dan MySQL serta menguasai Flutter untuk pengembangan aplikasi mobile. Saya juga senang mengeksplorasi dunia UI/UX design untuk menciptakan
                        tampilan aplikasi dan website yang menarik serta fungsional.
                    </p>
                </div>

                {/* Bagian Skill */}
                <div className="bg-white/80 p-5 md:p-6 rounded-3xl shadow-lg mt-10 max-w-4xl mx-auto">
                    <h1 className="text-2xl text-center font-bold text-gray-800 mb-5">Skill</h1>
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 p-2 scrollbar-hide"
                        style={{
                            scrollBehavior: "smooth",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2 px-3">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 object-contain"
                                />
                                <span className="text-gray-800 font-medium text-sm md:text-lg">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tombol Download CV */}
                <div className="flex justify-center mt-10">
                    <button className="text-lg bg-violet-500 px-6 md:px-8 py-3 rounded-full hover:bg-violet-600 transition duration-300 shadow-md">
                        <a
                            href="https://drive.google.com/file/d/1lU79KycwV5xrr4dsj-obzn3GL34Hq0Fs/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
