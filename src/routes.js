import React,  { Component } from 'react';
import { Route } from 'react-router-dom'

import GlobalHeader from './components/GlobalHeader'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'

export default class Routes extends Component {
    constructor() {
        super();
        this.state = {          
        };
      }

    render() {        
        return (
            <div>                
                <GlobalHeader />                
                <Route exact path="/" />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/report" component={Report} />
            </div>   
        );
    }
}
