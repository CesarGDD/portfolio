import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Navbar />
          <>
          <Switch>
            <Route  path='/contact'>
              <Contact />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          </>
      </Router>
    </div>
  )
}

export default App;
