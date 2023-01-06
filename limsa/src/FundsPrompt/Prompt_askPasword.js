import React from 'react';
import "./Prompt.css"
import DatabaseConnector from '../Connector';
import CommonDataManager from '../DatakeeperS';

/** The prompt content component */
// used to when trying to delete user. Will ask for passwword to confirm deleting from database
class Prompt_askPasword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fundsValue:0,
            currentUser:this.props.user,
            id:this.props.id,
            pasword:""
            
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(event)=>{
        event.preventDefault();
        console.log(event.target.value)
        this.setState({pasword: event.target.value});
    }
    ComponentDidMount=()=>{
        console.log("mounted")
        this.setState({id:CommonDataManager.myInstance().getID(), user:CommonDataManager.myInstance().getUser()})
    }


    tryPS=()=>{
        console.log("removing")
        var value=DatabaseConnector.getInstance().finalRemoveUser({data:{name:this.state.currentUser, id:this.state.id, pasword:this.state.pasword}})
        value.then(res=>{this.props.refresh()})
        this.test()

    }

    test=()=>{
        this.props.noPrompt()
    }



    render() {
        return<div className='screened' >
              <div id='Opening_text'>
                <h2 id="Give_password_text">
                    Give password for account {this.state.id}
                </h2>
                
              </div>
            <div >
                <div className='password_input'>
                    <input  type="text" id="ps1" key={"password"} maxLength={15} value={this.state.pasword} onChange={this.handleChange}></input>
                </div>
                <button id='tryPassword' onClick={this.tryPS} >Remove account</button>
            </div>
            
        </div>
    }
}

export default Prompt_askPasword;