import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const apiUrl = "https://www.dnd5eapi.co/api/monsters";  // Monster API endpoint

function MonsterDetail() {
  const [monster, setMonster] = useState(null);
  const { monsterName } = useParams();  // Get monster name from URL parameter

  useEffect(() => {
    fetchMonsterDetail();
  }, [monsterName]);

  const fetchMonsterDetail = async () => {
    try {
      const response = await axios.get(`${apiUrl}/${monsterName}`);
      setMonster(response.data);  // Set the selected monster's details
    } catch (error) {
      console.error("Error fetching monster details:", error);
    }
  };

  if (!monster) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <h2>{monster.name}</h2>
      <p><strong>Type:</strong> {monster.type}</p>
      <p><strong>Alignment:</strong> {monster.alignment}</p>
      <p><strong>Hit Points:</strong> {monster.hit_points}</p>
      <p><strong>Armor Class:</strong> {monster.armor_class[0].value}</p>
      <p><strong>Challenge Rating:</strong> {monster.challenge_rating}</p>
      <p>-------------------------------</p>
      <p><strong>Strength:</strong> {monster.strength}</p>
      <p><strong>Dexterity:</strong> {monster.dexterity}</p>
      <p><strong>Constitution:</strong> {monster.constitution}</p>
      <p><strong>Intelligence:</strong> {monster.intelligence}</p>
      <p><strong>Wisdom:</strong> {monster.wisdom}</p>
      <p><strong>Charisma:</strong> {monster.charisma}</p>
      {/* You can display more details as needed */}
      
    </div>
    
  );
}

export default MonsterDetail;
