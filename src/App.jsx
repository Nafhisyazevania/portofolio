import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing
import Nav from "./components/Navbar";
import Home from "./pages/homepage";
import About from "./pages/about";
import Pengalaman from "./pages/pengalaman";
import Projek from "./pages/projek";
import Sertif from "./pages/setifikat";
import Detail from "./pages/detail";
import Footer from "./components/Footer";

function App() {
    const projekRef = useRef(null);

    return (
        <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={
                        <>
                            <section id="home">
                                <Home projekRef={projekRef} />
                            </section>
                            <section id="about">
                                <About />
                            </section>
                            <section id="pengalaman">
                                <Pengalaman />
                            </section>
                            <Sertif />
                            <section id="projek" ref={projekRef}>
                                <Projek />
                            </section>
                        </>
                    } />
                    <Route path="/detail/:projectId" element={<Detail />} /> {/* Route untuk halaman detail */}
                </Routes>
                <Footer />
        </Router>
    );
}

export default App;