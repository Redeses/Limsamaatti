import './MainWindow.css';
import React from 'react';
import MainUserData from './MainUserData';
import CommonDataManager from '../DatakeeperS';
import ProductListing from '../ProductWindow/ProductListing';
import Prompt from '../FundsPrompt/Prompt';


//main window of of the site. house general information unless a certain user is picked, when it will show the user data 
//and give additional options to user
class MainWindow extends React.Component {
    constructor(props){
        super(props);
        this.state={
            mainFunds:0,
            mainName: "",
            mainId:""
        }
     
    }



    


    
    render() {
        return (
            <div className="MainWindowBox">
                <div className="hiddenBox" >
                    {this.props.visibility && < MainUserData name={this.props.mainName} funds={this.props.mainFunds} />}
                </div>
                <div className='Products'>
                   < ProductListing prompt={this.props.prompt} user={this.props.mainName} funds={this.props.mainFunds}/>
                </div>
                <div id="add_products">
                    
                    <button>+</button>
                </div>
            </div>
        );
      }
  }

export default MainWindow;