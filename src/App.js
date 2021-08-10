import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import { Redirect, Route, Switch } from 'react-router';

const App = () => {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/services" component={Services} exact/>
          <Redirect to="/" />
        </Switch>
        
        <Footer/>
    </>
  )
}

export default App
