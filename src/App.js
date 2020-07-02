import React, { useState } from "react";

import "./App.scss";

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [nightMode, setNightMode] = useState(false);
    return (
        <>
            <AppBar nightMode={nightMode} setNightMode={setNightMode} />
            <Hero nightMode={nightMode} />
            <main>
                <Info />
                <Services />
            </main>
            <Footer />
        </>
    );
};

export default App;
