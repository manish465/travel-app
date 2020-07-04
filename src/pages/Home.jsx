import React from "react";

import { motion } from "framer-motion";

import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ when: "beforeChildren", duration: 0.3 }}>
            <Hero />
            <main>
                <Info />
                <Services />
            </main>
            <Footer />
        </motion.div>
    );
};

export default Home;
