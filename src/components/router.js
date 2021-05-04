import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
class AppRouter extends Component {
    render() {
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Router>
        )
    }
}

export default AppRouter;