import React from 'react';
import Navbar from "./components/Navbar"
import Biocard from "./components/Biocard"
import Languages from "./components/Languages"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Biocard/>
      <Languages/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
