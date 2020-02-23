import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <nav>
        <Link className="links" to="/Home">Home</Link> 
        <Link className="links" to="/Skills" >Skills</Link> 
        <Link className="links" to="/projects">Projects</Link> 
        <Link className="links" to="/contact">Contact</Link> 
        </nav>
      </div>
      <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/Skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
