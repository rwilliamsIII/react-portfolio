import React from 'react';
import Navbar from "./components/Navbar"
import Biocard from "./components/Biocard"
import Languages from "./components/Languages"
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Biocard/>
      <Languages/>
      <Projects/>
    </div>
  );
}

export default App;
