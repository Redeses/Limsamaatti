import './ListHeaderEle.css';
import React from 'react';

class Listingheader extends React.Component {
    
    constructor(props){
        super();
        this.state = {
            buttonText:"Reset list"   
        }
    }

    clicked=()=>{
        this.setState({buttonText:"List is Resetting"})
    }

    render() {
        return (
            <div className="ListHeader">
                <h1 >Users</h1>
                <button id="reset_list_button" onClick={this.clicked}>{this.state.buttonText}</button>
            </div>
        );
      }
  }
  
export default Listingheader;