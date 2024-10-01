import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MonsterList from "./pages/Monsters";  // Import MonsterList component
import MonsterDetail from "./components/MonsterDetail";  // Import MonsterDetail component

function Home() {
  return (
    <div>
      <h1>Welcome to the DnD App</h1>
      {/* Link to the Monsters list */}
      <Link to="/monsters">Go to Monsters</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the monster list */}
          <Route path="/monsters" element={<MonsterList />} />
          
          {/* Route for individual monster details */}
          <Route path="/monsters/:monsterName" element={<MonsterDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



