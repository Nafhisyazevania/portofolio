import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { PiInstagramLogoBold } from "react-icons/pi";

function Footer() {
    return (
        <div className='bg-gradient-to-r from-[#4b285f] to-[#70506c] p-5'>
            <div className='p-3 flex flex-col sm:flex-row gap-3 items-center justify-center'>
                <div className='flex items-center gap-1'>
                    <MdOutlineEmail className='text-white'/>
                    <p className='text-white font-semibold'>Email:</p>
                    <a href="mailto:nafhisyazevania@gmail.com?subject=Ingin%20Bekerja%20Sama&body=Halo,%20saya%20tertarik%20dengan%20portofolio%20Anda." target="_blank" rel="noopener noreferrer">
                        <p className='text-white'>nafhisyazevania@gmail.com</p>
                    </a>
                </div>
                <div className='flex items-center'>
                    <VscGithub className='text-white'/>
                    <p className='text-white ml-1 font-semibold'>Github:</p>
                    <a href="https://github.com/Nafhisyazevania" target="_blank" rel="noopener noreferrer">
                        <p className='text-white ml-1'>Nafhisyazevania</p>
                    </a>
                </div>
                <div className='flex items-center'>
                    <PiInstagramLogoBold className='text-white'/>
                    <p className='text-white ml-1 font-semibold'>Instagram:</p>
                    <a href="https://www.instagram.com/piechaanafhisya?igsh=OW9tamNwcTFwb3Yy" target="_blank" rel="noopener noreferrer">
                        <p className='text-white ml-1'>@piechaanafhisya</p>
                    </a>
                </div>
            </div>
            <div>
                <p className='text-white text-center'>Copyright &copy; 2025 Nafhisya Zevania</p>
            </div>
        </div>
    )
}

export default Footer;
