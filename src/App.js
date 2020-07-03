import React, { useState } from "react";

import "./App.scss";

import AppBar from "./components/AppBar/AppBar";

import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    const [nightMode, setNightMode] = useState(false);
    const [navBar, setNavBar] = useState(false);
    return (
        <>
            <AppBar
                nightMode={nightMode}
                setNightMode={setNightMode}
                navBar={navBar}
                setNavBar={setNavBar}
            />
            {navBar ? <NavBar /> : <Home />}
        </>
    );
};

export default App;
