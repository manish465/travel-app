import React, { useState } from "react";

import "./App.scss";

import AppBar from "./components/AppBar/AppBar";

import Home from "./pages/Home";

const App = () => {
    const [nightMode, setNightMode] = useState(false);
    return (
        <>
            <AppBar nightMode={nightMode} setNightMode={setNightMode} />
            <Home />
        </>
    );
};

export default App;
