import './GetUser.css';
import React from 'react';
import OutsideAlerter from '../Alerter';
import Prompt from '../FundsPrompt/Prompt';
import DatabaseConnector from '../Connector';
import CommonDataManager from '../DatakeeperS';

//has props: boxshow
class GetUser extends React.Component {
 
    constructor(props){
        super();
        this.state={
          visibilityStatus:true,
            mainFunds:0,
            statusTest:"none",
            mainName:"",
            visibilityStatusPrompt:true,
            buywindow:null,
            buyMenuType:false,
            id:"",
            logo:null
        };
        
    }

    componentDidUpdate(){
    }

    runfull=(name, funds,id)=>{
      CommonDataManager.getInstance().setName(name);
      CommonDataManager.getInstance().setFunds(funds);
      CommonDataManager.getInstance().setID(id);
      
  }

    handleChange=(event)=>{
      this.setState({id:event.value})
    }


    prompt =()=>{
      CommonDataManager.getInstance().setPrompt("3");
      this.props.prompt();
    }

    
    render() {
        return (
            <div className="getUser">
                <button  className="getUB" onClick={this.prompt}>Log in</button>
               
            </div>
        );
      }
  }

export default GetUser;