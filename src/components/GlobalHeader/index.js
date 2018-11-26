import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

export default class GlobalHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <p>
                    Welcome to Vikings local development environment.
                </p>
                <nav className="navbar navbar=default">
                    <div className="container-fluid">
                    <ul className="nav -nav-tabs">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard' >Dashboard</Link></li>
                        <li><Link to='/report'>Report</Link></li>
                    </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
