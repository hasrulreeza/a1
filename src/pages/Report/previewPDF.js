import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Iframe from "react-iframe";
import { withStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 150,
    height: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class PreviewPDF extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

   /* preview(pdfURL) {
    // fake server request, getting the file url as response
    // setTimeout(() => {
      const response = {
        file:pdfURL
      };
      // server sent the url to the file!
      // now, let's download:
      // window.location.href = response.file;
      // you could also do:
         window.open(response.file,'_blank');
    // }, 100);
    onClick={this.preview.bind(this,this.props.pdfURL)}
    
  }*/
  render() {
    const { classes } = this.props;
    return (
   <div>
        <Button color="primary" onClick={this.handleOpen} style={{textTransform:"none"}}>
        {this.props.reportName}
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Iframe
              url={this.props.pdfURL}
              width="100%"
              height="100%"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(PreviewPDF);
