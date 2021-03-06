
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';



import Home from './Home';
import About from './About';
import Post from './Post';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

const App =() => {



    return(
    <>
    
    <Navbar />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/post' component={Post} />
        <Route excat path='/contact' component={Contact} />
        <Redirect to='/' />
    <Home />
    </Switch>
    </>
    );
};
 
export default App;