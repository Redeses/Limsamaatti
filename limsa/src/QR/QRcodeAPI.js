import './QRcodeAPI.css';
import React from 'react';


//used to make the list of customers with the data 
class QRcodeAPI extends React.Component {
    
    runScanner = () =>{
        console.log("test");
        //run QRcodeScanner.js here
    }

    render() {
        return (
            <div className="QRCode">
                <button className="qrButton settings" onClick={this.runScanner}><img className="buttonQRImage" src="QRLOGO.JPG"></img></button>
            </div>
        );
      }
  }

export default QRcodeAPI;