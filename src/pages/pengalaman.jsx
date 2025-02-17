import React, { useState } from "react";
import experiences from "../data/index";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

const Pengalaman = () => {
    const [selected, setSelected] = useState(null);

    const toggleDetail = (index) => {
        setSelected(selected === index ? null : index);
    };

    return (
        <section id="pengalaman" className="py-16 px-10 md:px-12 lg:px-24 bg-[#1A1A2E] min-h-screen">
            <h1 className="text-2xl md:text-3xl text-center font-bold text-white mb-12">
                Pengalaman
            </h1>
            <div className="flex flex-col gap-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-[#22223B] p-6 md:p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer"
                        onClick={() => toggleDetail(index)}
                    >
                        {/* Bagian Judul */}
                        <div className="flex justify-between items-center">
                            <h1 className="text-lg md:text-xl font-bold text-white">{exp.title}</h1>
                            <span className="text-white text-xl">
                                {selected === index ? <FiChevronUp /> : <FiChevronDown />}
                            </span>
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <CiCalendar className="text-white" />
                            <h3 className="text-gray-400 text-sm md:text-base">{exp.year}</h3>
                        </div>

                        {/* Bagian Detail (Muncul saat diklik) */}
                        {selected === index && (
                            <div className="mt-4 space-y-4 transition-all duration-500 scrollbar-hide max-h-[400px] overflow-y-auto">
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{exp.description1}</p>
                                {exp.img1 && (
                                    <img
                                        src={exp.img1}
                                        alt="Poster"
                                        className="w-full h-auto rounded-lg shadow-md"
                                    />
                                )}
                                <p className="text-gray-300 text-sm  text-justify leading-relaxed">{exp.description2}</p>
                                {exp.img2 && (
                                    <img
                                        src={exp.img2}
                                        alt="Stiker"
                                        className="w-full h-auto rounded-lg shadow-md"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pengalaman;
