// src/components/CrewmateList.js
import React from "react";
import { Link } from "react-router-dom";

function CrewmateList({ crewmates, setCrewmates }) {
    const handleDelete = (id) => {
        const updatedCrewmates = crewmates.filter((crewmate) => crewmate.id !== id);
        setCrewmates(updatedCrewmates);
    };

    return (
        <div>
            <h2>Crewmate List</h2>
            {crewmates.map((crewmate) => (
                <div key={crewmate.id}>
                    <Link to={`/crewmate/${crewmate.id}`}>{crewmate.name}</Link>
                    <Link to={`/edit/${crewmate.id}`}><button>Edit</button></Link>
                    <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default CrewmateList;
