import React from "react";
import ReactDOM from "react-dom";
import Download from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";
import saveAs from 'file-saver';

class DownloadPDF extends React.Component {
  download(reportName,pdfURL) {

var oReq = new XMLHttpRequest();
// The Endpoint of your server 
//var URLToPDF = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

// Configure XMLHttpRequest
oReq.open("GET", pdfURL, true);

// Important to use the blob response type
oReq.responseType = "blob";

// When the file request finishes
// Is up to you, the configuration for error events etc.
oReq.onload = function() {
    // Once the file is downloaded, open a new window with the PDF
    // Remember to allow the POP-UPS in your browser
    var file = new Blob([oReq.response], { 
        type: 'application/pdf' 
    });
    
    // Generate file download directly in the browser !
    saveAs(file, reportName+".pdf");
};

oReq.send();
    
  }
  render() {
    return (
   <div>
        <IconButton color="primary" onClick={this.download.bind(this,this.props.reportName,this.props.pdfURL)}>
        <Download/>
        </IconButton>
      </div>
    );
  }
}
/*

       
      <button onClick={this.download}>{this.props.pdfURL}</button>
*/

//onClick={this.download(this.props.pdfURL)}
export default DownloadPDF;
//ReactDOM.render(<SimpleDownloadFile />, document.getElementById("View"));
