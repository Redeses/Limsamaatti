import './HelpButton.css';
import React from 'react';
import logo from '../img/QUESTIONMARK.png'

//will show an overlay about all the things in the website
class HelpButton extends React.Component {
    userName="Mika Kuittnen";
    funds="40";

    constructor(props){
        super();
        
        
    }

    componentDidUpdate(){
    }


    
    render() {
        return (
            <div className=".helpBox">
                <div classname="help_overlay"></div>
                <button  className="helpButton">
                    <img style={{ width: 100, height: 100 }} className='helpLogo' src={logo}>
                    </img>
                </button>
                
            </div>
        );
      }
  }

export default HelpButton;