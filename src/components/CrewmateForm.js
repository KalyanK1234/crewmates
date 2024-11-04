// src/components/CrewmateForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CrewmateForm({ crewmates, setCrewmates }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find existing crewmate if we are in edit mode
    const existingCrewmate = id ? crewmates.find((c) => c.id === parseInt(id)) : null;

    const [name, setName] = useState(existingCrewmate ? existingCrewmate.name : "");
    const [attributes, setAttributes] = useState(
        existingCrewmate ? existingCrewmate.attributes : { strength: 1, intelligence: 1 }
    );

    useEffect(() => {
        if (existingCrewmate) {
            setName(existingCrewmate.name);
            setAttributes(existingCrewmate.attributes);
        }
    }, [existingCrewmate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingCrewmate) {
            // Update existing crewmate
            const updatedCrewmates = crewmates.map((c) =>
                c.id === existingCrewmate.id ? { ...c, name, attributes } : c
            );
            setCrewmates(updatedCrewmates);
        } else {
            // Create new crewmate
            const newCrewmate = {
                id: Date.now(),
                name,
                attributes,
            };
            setCrewmates([...crewmates, newCrewmate]);
        }
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Strength:
                <input
                    type="number"
                    value={attributes.strength}
                    onChange={(e) => setAttributes({ ...attributes, strength: +e.target.value })}
                />
            </label>
            <label>
                Intelligence:
                <input
                    type="number"
                    value={attributes.intelligence}
                    onChange={(e) => setAttributes({ ...attributes, intelligence: +e.target.value })}
                />
            </label>
            <button type="submit">{existingCrewmate ? "Update Crewmate" : "Add Crewmate"}</button>
        </form>
    );
}

export default CrewmateForm;
