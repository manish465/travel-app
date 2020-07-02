import React from "react";

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";

const App = () => {
    return (
        <>
            <AppBar />
            <Hero />
            <main>
                <Info />
            </main>
        </>
    );
};

export default App;
