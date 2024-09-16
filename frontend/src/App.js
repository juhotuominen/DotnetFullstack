import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://localhost:7154/api/Character";

function App() {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState({ class: "", strength: 0, intelligence: 0, wisdom: 0, constitution: 0, dexterity: 0, charisma: 0 });
  const [editCharacter, setEditCharacter] = useState(null);

  // Fetch characters from API
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const addCharacter = async () => {
    try {
      await axios.post(apiUrl, newCharacter);
      setNewCharacter({ class: "", strength: 0, intelligence: 0, wisdom: 0, constitution: 0, dexterity: 0, charisma: 0 });
      fetchCharacters();
    } catch (error) {
      console.error("Error adding character:", error);
    }
  };

  const deleteCharacter = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchCharacters();
    } catch (error) {
      console.error("Error deleting character:", error);
    }
  };

  const startEditCharacter = (character) => {
    setEditCharacter(character);
  };

  const updateCharacter = async () => {
    try {
      await axios.put(`${apiUrl}/${editCharacter.id}`, editCharacter);
      setEditCharacter(null);
      fetchCharacters();
    } catch (error) {
      console.error("Error updating character:", error);
    }
  };

  return (
    <div className="App">
      <h1>DnD Character Creator</h1>

      {/* List Characters */}
      <h2>Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.class} - STR: {character.strength} - INT: {character.intelligence} - WIS: {character.wisdom} - CON: {character.constitution} - DEX: {character.dexterity} - CHA: {character.charisma} <br></br>
            <button onClick={() => startEditCharacter(character)}>Edit</button>
            <button onClick={() => deleteCharacter(character.id)}>Delete</button>
            <br></br><br></br>
          </li>
        ))}
      </ul>

      {/* Add Character */}
      <h2>Add New Character</h2>
      <input
        type="text"
        placeholder="Class"
        value={newCharacter.class}
        onChange={(e) => setNewCharacter({ ...newCharacter, class: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="Strength"
        value={newCharacter.strength}
        onChange={(e) => setNewCharacter({ ...newCharacter, strength: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="Intelligence"
        value={newCharacter.intelligence}
        onChange={(e) => setNewCharacter({ ...newCharacter, intelligence: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="Wisdom"
        value={newCharacter.wisdom}
        onChange={(e) => setNewCharacter({ ...newCharacter, wisdom: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="Constitution"
        value={newCharacter.constitution}
        onChange={(e) => setNewCharacter({ ...newCharacter, constitution: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="Dexterity"
        value={newCharacter.dexterity}
        onChange={(e) => setNewCharacter({ ...newCharacter, dexterity: e.target.value })}
      />
      <br></br>
      <input
        type="number"
        placeholder="Charisma"
        value={newCharacter.charisma}
        onChange={(e) => setNewCharacter({ ...newCharacter, charisma: e.target.value })}
      />
      <br></br>
      <button onClick={addCharacter}>Create Character</button>
      <button onClick={addCharacter}>Add Character</button>

      {/* Edit character */}
      {editCharacter && (
        <div>
          <h2>Edit Character</h2>
          <input
            type="text"
            value={editCharacter.class}
            onChange={(e) =>
              setEditCharacter({ ...editCharacter, class: e.target.value })
            }
          />
          <br></br>
        <input
            type="number"
            value={editCharacter.strength}
            onChange={(e) =>
              setEditCharacter({
                ...editCharacter,
                strength: e.target.value,
              })
            }
          />
          <br></br>
        <input
            type="number"
            value={editCharacter.intelligence}
            onChange={(e) =>
              setEditCharacter({
                ...editCharacter,
                intelligence: e.target.value,
              })
            }
          />
          <br></br>
        <input
            type="number"
            value={editCharacter.wisdom}
            onChange={(e) =>
              setEditCharacter({
                ...editCharacter,
                wisdom: e.target.value,
              })
            }
          />
          <br></br>
        <input
            type="number"
            value={editCharacter.constitution}
            onChange={(e) =>
              setEditCharacter({
                ...editCharacter,
                constitution: e.target.value,
              })
            }
          />
          <br></br>
        <input
            type="number"
            value={editCharacter.dexterity}
            onChange={(e) =>
              setEditCharacter({
                ...editCharacter,
                dexterity: e.target.value,
              })
            }
          />
          <br></br>
        <input
            type="number"
            value={editCharacter.charisma}
            onChange={(e) =>
              setEditCharacter({
                ...editCharacter,
                charisma: e.target.value,
              })
            }
          />
          <br></br>
          <button onClick={updateCharacter}>Update Character</button>
          <button onClick={() => setEditCharacter(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;

