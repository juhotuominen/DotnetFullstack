import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = "https://www.dnd5eapi.co/api/monsters";  // Monster API endpoint

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = async () => {
    try {
      const response = await axios.get(apiUrl);
      setMonsters(response.data.results);  // Set the list of monsters
    } catch (error) {
      console.error("Error fetching monsters:", error);
    }
  };

  return (
    <div>
      <h2>DnD Monsters</h2>
      <Link to="/">Home</Link>
      <ul>
        {monsters.map((monster, index) => (
          <li key={index}>
            {/* Link to individual monster details */}
            <Link to={`/monsters/${monster.index}`}>{monster.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonsterList;
