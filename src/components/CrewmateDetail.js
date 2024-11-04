// src/components/CrewmateDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function CrewmateDetail({ crewmates }) {
    const { id } = useParams();
    const crewmate = crewmates.find((c) => c.id === parseInt(id));

    if (!crewmate) return <h2>Crewmate not found!</h2>;

    return (
        <div>
            <h2>{crewmate.name}</h2>
            <p>Strength: {crewmate.attributes.strength}</p>
            <p>Intelligence: {crewmate.attributes.intelligence}</p>
        </div>
    );
}

export default CrewmateDetail;
