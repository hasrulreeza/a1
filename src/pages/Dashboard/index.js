import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          articles: [
            { title: "React Redux Tutorial for Beginners", id: 1 },
            { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
          ]
        };
      }

    render() {
        return (
            <div>Dashboard</div>
        );
    }
}