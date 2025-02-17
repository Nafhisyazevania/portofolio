import React from "react";
import { LiaFileDownloadSolid } from "react-icons/lia";

const Sertifikat = () => {
    const certificates = [
        {
            name: "Dicoding Academy",
            link: "https://drive.google.com/file/d/1zNYncmB7O4jH-L6UCkGG_Zdk4-8GdIFJ/view?usp=sharing",
            desc: "Pemrograman dengan Java",
        },
        {
            name: "Liga SMK Coding",
            link: "https://drive.google.com/file/d/1wFZPbjU4_KMpMyErV30N55G5W1yLD59t/view?usp=sharing",
            desc: "Web Development",
        },
        {
            name: "Play IT JTI Polinema",
            link: "https://drive.google.com/file/d/1G7hd1EpHh9Jp-ozviCPsr8CrPyM5smOu/view?usp=sharing",
            desc: "Web Development",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#4b285f] to-[#70506c] flex items-center justify-center px-10 py-12">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                    Sertifikat
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link || "#"}
                            target={cert.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="bg-black/50 p-5 md:p-6 rounded-xl shadow-lg backdrop-blur-lg flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:bg-white/30 cursor-pointer"
                        >
                            <div>
                                <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
                                    {cert.name}
                                </h2>
                                <p className="text-white/80 text-sm md:text-base">
                                    {cert.desc}
                                </p>
                            </div>
                            {cert.link && (
                                <LiaFileDownloadSolid className="text-white text-2xl cursor-pointer hover:text-gray-300 self-end mt-4" />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sertifikat;
