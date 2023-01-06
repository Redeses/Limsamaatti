import './MainUserData.css';
import React from 'react';
import CommonDataManager from '../DatakeeperS';

//User information and data of their purhcases that will be shown in the main window
class MainUserData extends React.Component {
    userName="Mika Kuittnen";
    funds="40";

    constructor(props){
        super();
        
        
    }

    componentDidUpdate(){
    }


    
    render() {
        return (
            <div className="userData">
                <div className="simpleData">
                    <h2 className="username">User:{this.props.name}</h2>
                    <h2 className="funds">Funds:{this.props.funds}</h2>
                </div>
                
            </div>
        );
      }
  }

export default MainUserData;