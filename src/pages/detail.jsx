import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineExport } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { FaCalendarWeek } from "react-icons/fa6";
import { TbTool } from "react-icons/tb";
import ShinyText from "../components/ShinyText";


import dgbasreng from "../assets/basrengenggdg.png";
import dggemilang from "../assets/dg-gemilang.png";
import fauzi from "../assets/porto-fauzi.png";
import dgskin from "../assets/design-ns&m.png";
import kubus from "../assets/Kalkulator Kubus.png";

// Frameworks & Tools
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import ReactJs from "../assets/reactjs.png";
import Flutter from "../assets/flutter.png";
import Figma from "../assets/figma.png";

const Detail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Data projek (contoh)
  const projects = [
    {
      id: 1,
      title: "Desain Basrengeng",
      category: "Design",
      tahun: "2025",
      image1: dgbasreng,
      desc: "Desain Basrengeng merupakan konsep tampilan website untuk toko Basrengengg yang dirancang untuk meningkatkan pengalaman berbelanja pelanggan. Desain ini berfokus pada kemudahan navigasi, tata letak yang intuitif, dan tampilan yang menarik agar pengguna dapat dengan mudah menemukan dan membeli produk. Dengan pendekatan user-friendly, desain ini diharapkan dapat meningkatkan keterlibatan pelanggan serta memperkuat identitas brand. Proyek ini dikembangkan menggunakan Figma untuk perancangan UI/UX, serta memanfaatkan aset dari Canva guna memperkaya elemen visual.",
      framework: [Figma],
      link: "https://www.figma.com/design/oYCG9EWi7SAAFzbyJ4hqpj/project?node-id=0-1&t=ZpkVpiUBTSsfo4jT-1",
    },
    {
      id: 2,
      title: "Gemilang",
      category: "Website",
      tahun: "2024",
      image1: dggemilang,
      desc: "Gemilang adalah platform digital yang bertujuan untuk melestarikan kebudayaan Indonesia, khususnya di Malang, dengan menyajikan informasi seputar sejarah dan seni. Website ini dikembangkan menggunakan HTML, CSS, dan JavaScript, serta didukung oleh Figma dalam perancangan UI/UX. Desainnya dibuat responsif dan edukatif agar pengguna dapat dengan mudah mengakses informasi budaya secara interaktif. Selain itu, sistem autentikasi diterapkan untuk menyediakan konten eksklusif bagi pengguna. Dalam proyek ini, saya berperan sebagai desainer dan pengembang website, bertanggung jawab dalam perancangan visual serta pengoptimalan pengalaman pengguna. Dengan adanya platform ini, diharapkan masyarakat lebih sadar akan pentingnya melestarikan warisan budaya Indonesia.",
      framework: [Html, Css, Javascript, Bootstrap, Figma],
      link: "https://www.figma.com/design/Ro5Ov754rwM7b39yWigixN/Lomba?node-id=0-1&t=nIvWnqPyJPySVs2v-1",
      link1: "https://nafhisyazevania.github.io/Gemilang-web/"
    },
    {
      id: 3,
      title: "NaS&m",
      category: "Mobile",
      tahun: "2025",
      image1: dgskin,
      desc: "NaS&m adalah aplikasi toko skincare dan makeup berbasis Flutter yang membantu pengguna menemukan produk sesuai dengan jenis kulit mereka. Aplikasi ini memiliki fitur analisis jenis kulit, di mana pengguna menjawab pertanyaan untuk mengetahui tipe kulit mereka, lalu mendapatkan rekomendasi produk skincare dan makeup yang cocok. Selain itu, NaS&m menyediakan fitur dengan tipe kulit yang cocok sebelum membeli. Friendly, pengguna dapat dengan mudah mencari produk berdasarkan kategori, merek, atau kebutuhan khusus.",
      framework: [Flutter, Figma],
      link: "https://www.figma.com/design/mOxQs6OkjR9YpfzXNWa4Op/Latihan_26?node-id=55-6&t=mscPf4IZG9SItyvQ-1",
      link1: "https://github.com/Nafhisyazevania/APKSkincareMakeup/blob/main/app-release.apk"
    },
    {
      id: 4,
      title: "Portofolio FawziUIUX",
      category: "Website",
      tahun: "2024",
      image1: fauzi,
      desc: "Website ini adalah portofolio pribadi Fauzi yang menampilkan berbagai proyek yang pernah dibuat dan menyediakan akses untuk mengunduh CV. Dibangun dengan React.js, JavaScript, dan Bootstrap, tampilan website ini sederhana namun tetap profesional. Pengguna dapat dengan mudah melihat daftar proyek yang telah dikerjakan, lengkap dengan deskripsi dan gambar. Selain itu, tersedia fitur untuk mengunduh CV, yang berguna bagi perekrut atau pihak lain yang ingin mengetahui lebih lanjut tentang pengalaman Fauzi. Dengan desain yang responsif website ini memastikan pengalaman pengguna yang nyaman di berbagai perangkat. Sebagai media profesional, portofolio ini membantu Fauzi menampilkan kemampuannya dan membangun jejak digital yang kuat",
      framework: [ReactJs, Javascript, Bootstrap],
      link: "",
      link1: "https://ujian3-nafhisya26.vercel.app/"
    },
    {
      id: 5,
      title: "Kalkulator Sederhana",
      category: "Website",
      tahun: "2023",
      image1: kubus,
      desc: "Website ini merupakan kalkulator sederhana yang dirancang untuk membantu pengguna dalam menghitung luas dan volume kubus serta balok secara otomatis. Dibangun menggunakan HTML, CSS, dan JavaScript, website ini memiliki tampilan yang sederhana namun tetap fungsional dan mudah digunakan. Dengan fitur perhitungan otomatis, pengguna cukup memasukkan panjang, lebar, dan tinggi balok atau panjang sisi kubus atau balok, lalu hasil perhitungan akan langsung ditampilkan tanpa perlu menghitung secara manual. Hal ini sangat memudahkan dalam melakukan perhitungan cepat, baik untuk keperluan akademik, pekerjaan, maupun kebutuhan lainnya. Selain itu, desain website ini dibuat responsif sehingga dapat diakses dengan nyaman melalui berbagai perangkat, baik di komputer maupun ponsel. Dengan proses perhitungan yang instan, website ini menjadi alat yang praktis bagi siapa saja yang membutuhkan kalkulasi luas dan volume kubus serta balok dengan cepat dan akurat.",
      framework: [Html, Css, Javascript],
      link: "",
      link1: "",
      link2: "https://nafhisyazevania.github.io/Kalkulator-Kubus/",
      link3: "https://nafhisyazevania.github.io/Kalkulator-Balok/",
    },
  ];

  // Cari projek berdasarkan ID
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <div className="text-white text-center py-25">Projek tidak ditemukan.</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-25 px-5 md:px-20 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Tombol Back */}
        <button
          className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white transition"
          onClick={() => navigate("/")}
          title="Kembali"
        >
          <IoMdArrowBack className="text-lg" />
          <span>Kembali ke halaman utama</span>
        </button>

        {/* Judul Projek */}
        <ShinyText text={project.title} disabled={false} speed={5} className="text-4xl font-bold mb-4 text-center" />

        {/* Gambar Projek */}
        <img src={project.image1} alt={project.title} className="w-3/4 h-auto rounded-lg mb-5 shadow-lg shadow-gray-800 mx-auto p-3" />

        {/* Link Proyek */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-2 rounded-full text-white bg-violet-500 hover:bg-violet-600 transition duration-300 shadow-md"
            >
              <AiOutlineExport className="text-white w-5 h-5" />
              Lihat Desain
            </a>
          )}
          {project.link1 && (
            <a
              href={project.link1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-2 rounded-full text-white bg-violet-500 hover:bg-violet-600 transition duration-300 shadow-md"
            >
              <AiOutlineExport className="text-white w-5 h-5" />
              Lihat Projek
            </a>
          )}
          {project.link2 && (
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-2 rounded-full text-white bg-violet-500 hover:bg-violet-600 transition duration-300 shadow-md"
            >
              <AiOutlineExport className="text-white w-5 h-5" />
              Lihat Projek Kubus
            </a>
          )}
          {project.link3 && (
            <a
              href={project.link3}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-2 rounded-full text-white bg-violet-500 hover:bg-violet-600 transition duration-300 shadow-md"
            >
              <AiOutlineExport className="text-white w-5 h-5" />
              Lihat Projek Balok
            </a>
          )}
        </div>



        {/* Deskripsi Projek */}
        <div className="mb-8 text-left p-5 md:mx-3 mx-9 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Deskripsi Projek</h2>
          <p className="text-gray-300 md:leading-relaxed md:text-justify">{project.desc}</p>
        </div>

        {/* Informasi Tambahan */}
        <div className="mb-8 text-left p-5 gap-10 md:mx-3 mx-9 bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-300 flex items-center gap-4 pb-2">
            <MdCategory className="text-white w-5 h-5"/> 
            <span className="font-semibold">
            Kategori:</span> {project.category}</p>
          <p className="text-gray-300 flex items-center gap-4 pb-2">
            <FaCalendarWeek className="text-white w-5 h-5"/>
            <span className="font-semibold">Tahun:</span> {project.tahun}</p>
          <a
            href="https://github.com/Nafhisyazevania"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            {/* Frameworks */}
        <div className="flex flex-wrap gap-2 items-center pb-3">
          <TbTool className="text-white w-5 h-5"/> 
        <p className="text-gray-300 flex items-center gap-4 font-semibold">Framework: </p>
          {project.framework.map((fw, index) => (
            <img key={index} src={fw} alt="Framework" className="w-5 h-5" />
          ))}
        </div>
            <p className="font-semibold text-end">Github: Nafhisyazevania</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
