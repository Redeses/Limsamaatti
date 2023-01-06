import './NewUser.css';
import React from 'react';
import CommonDataManager from '../DatakeeperS';


class NewUser extends React.Component {
 
    constructor(props){
        super();
        this.state={
            visibilityStatus:true,
            
        };
        
    }

    componentDidUpdate(){
    }

    prompt =()=>{
      CommonDataManager.getInstance().setPrompt("1");
      this.props.prompt();
    }
  
  
  
    
    render() {
        return (
            <div className="newUButton">
                <button onClick={this.prompt} id="" className="newUserButton">new user</button>
            </div>
        );
      }
  }

export default NewUser;