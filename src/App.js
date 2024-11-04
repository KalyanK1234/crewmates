// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrewmateForm from "./components/CrewmateForm";
import CrewmateList from "./components/CrewmateList";
import CrewmateDetail from "./components/CrewmateDetail";
import Navbar from "./components/Navbar";

function App() {
    const [crewmates, setCrewmates] = useState([]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CrewmateList crewmates={crewmates} setCrewmates={setCrewmates} />} />
                <Route
                    path="/add"
                    element={<CrewmateForm crewmates={crewmates} setCrewmates={setCrewmates} />}
                />
                <Route
                    path="/edit/:id"
                    element={<CrewmateForm crewmates={crewmates} setCrewmates={setCrewmates} />}
                />
                <Route
                    path="/crewmate/:id"
                    element={<CrewmateDetail crewmates={crewmates} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
