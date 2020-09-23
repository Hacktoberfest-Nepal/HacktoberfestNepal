import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
