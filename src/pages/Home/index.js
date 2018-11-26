import React, { Component } from 'react';
import { withStyles, Typography, Toolbar, Paper } from "@material-ui/core";
import './index.css';

const styles = theme => ({
    root: {
        width: "%",
        overflowX: "auto",
        height: "84vh",
        font: "arial"
    }
});

export default class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div>Welcome onboard</div>
            // <Paper className={classes.root}>
            //     <Toolbar>
            //         <Typography variant="h5">
            //            Welcome onboard
            //         </Typography>
            //     </Toolbar>
            // </Paper>
        );
    }
}
