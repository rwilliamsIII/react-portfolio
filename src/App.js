import React from 'react';
import { Container, Row, Col } from "react-grid-system"
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

      <Container>
        <Row>
          <Col md={6}>
            <Biocard/>
          </Col>
          <Col md={6}>
            <Languages/>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row>
          <Col md={12}>
            <Projects/>
          </Col>
          <Col md={12}>
            <Contact/>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
