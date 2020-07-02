import React from "react";

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Services from "./components/Services/Services";

const App = () => {
    return (
        <>
            <AppBar />
            <Hero />
            <main>
                <Info />
                <Services />
            </main>
        </>
    );
};

export default App;
