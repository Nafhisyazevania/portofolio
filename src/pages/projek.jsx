import React, { useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import basrengeng from "../assets/basrengenggdg.png";
import gemilang from "../assets/web-gemilang.png";
import Naskin from "../assets/naskincare.png";
import Fawzi from "../assets/porto-fauzi.png";
import balok from "../assets/Kalkulator Kubus.png";

function Projek() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();

    const projects = [
        { id: 1, title: "Basrengeng", category: "Design", tahun: "2025", image: basrengeng, desc: "Desain Basrengeng merupakan konsep tampilan website untuk toko Basrengengg" },
        { id: 2, title: "Gemilang", category: "Web", tahun: "2024", image: gemilang, desc: "Gemilang adalah platform digital yang bertujuan untuk melestarikan kebudayaan Indonesia" },
        { id: 3, title: "NaS&m", tahun: "2025", category: "Mobile", image: Naskin, desc: "Aplikasi android toko skincare dan makeup bernama NaSkincare" },
        { id: 4, title: "FawziUIUX", tahun: "2024", category: "Web", image: Fawzi, desc: "Desain Aplikasi untuk toko skincare dan makeup yang menarik" },
        { id: 5, title: "Kalkulator Sederhana", category: "Web", tahun: "2023", image: balok, desc: "Website yang bertujuan untuk membantu menghitung luas dan volume balok" },
    ];

    const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

    const handleProjectClick = (projectId) => {
        navigate(`/detail/${projectId}`);
    };

    return (
        <section id="projek" className="py-16 px-10 md:px-12 bg-[#161622] min-h-screen">
            <h1 className="text-2xl md:text-3xl text-center font-bold text-white mb-10 animate-fadeIn">
                Projek Saya
            </h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {["All", "Design", "Web", "Mobile"].map((category) => (
                    <button
                        key={category}
                        className={`px-4 md:px-6 py-2 text-sm md:text-lg rounded-full transition duration-300 border-2 text-white ${selectedCategory === category
                                ? "bg-violet-500 border-violet-500 shadow-lg"
                                : "border-gray-500 hover:bg-violet-600 hover:border-violet-600"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projek Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col items-center bg-[#1E1E2E] p-6 md:p-8 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <div className="flex gap-2 items-center mb-2">
                            <CiCalendar className="text-white text-lg" />
                            <h3 className="text-gray-400 text-sm">{project.tahun}</h3>
                        </div>
                        <img className="w-full h-40 md:h-48 object-cover rounded-2xl mb-4" src={project.image} alt={project.title} />
                        <p className="text-lg md:text-xl text-white font-semibold text-center">{project.title}</p>
                        <p className="text-gray-400 text-sm md:text-base text-center py-2">{project.desc}</p>
                        <AiOutlineExport className="text-2xl text-white self-end mt-2" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projek;
