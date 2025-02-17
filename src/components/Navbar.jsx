import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../assets/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Cek apakah pengguna berada di halaman detail
    const isDetailPage = location.pathname.startsWith("/detail");

    return (
        <nav className="fixed w-full bg-black/50 backdrop-blur shadow-md z-50">
            <div className="flex justify-between items-center px-10 py-3 md:py-5">
                {/* Logo */}
                <img src={logo} alt="logo" className="hover:cursor-pointer w-10" />
                
                {/* Jika bukan di halaman detail, tampilkan menu */}
                {!isDetailPage && (
                    <>
                        {/* Menu untuk layar besar */}
                        <ul className="hidden md:flex gap-6 items-center rounded-full bg-white/90 text-violet-900 px-6 py-2 shadow">
                            <li className="hover:cursor-pointer hover:text-[#832E49]">
                                <Link to="home" smooth={true} duration={500}>Beranda</Link>
                            </li>
                            <li className="hover:cursor-pointer hover:text-[#832E49]">
                                <Link to="about" smooth={true} duration={500}>Tentang</Link>
                            </li>
                            <li className="hover:cursor-pointer hover:text-[#832E49]">
                                <Link to="pengalaman" smooth={true} duration={500}>Pengalaman</Link>
                            </li>
                            <li className="hover:cursor-pointer hover:text-[#832E49]">
                                <Link to="projek" smooth={true} duration={500}>Projek</Link>
                            </li>
                        </ul>

                        {/* Menu Hamburger (Mobile) */}
                        <button 
                            className="md:hidden text-white text-2xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </>
                )}
            </div>

            {/* Dropdown Menu (Mobile) */}
            {!isDetailPage && isOpen && (
                <ul className="md:hidden flex flex-col items-center gap-3 bg-white text-violet-900 py-4 shadow-md">
                    <li className="hover:cursor-pointer hover:text-[#832E49]">
                        <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Beranda</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:text-[#832E49]">
                        <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Tentang</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:text-[#832E49]">
                        <Link to="projek" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projek</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
