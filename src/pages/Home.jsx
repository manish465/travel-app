import React from "react";

import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <main>
                <Info />
                <Services />
            </main>
            <Footer />
        </>
    );
};

export default Home;
