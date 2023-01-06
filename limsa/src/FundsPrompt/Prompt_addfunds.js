import React from 'react';
import "./Prompt.css"
import DatabaseConnector from '../Connector';
import CommonDataManager from '../DatakeeperS';

/** The prompt content component */
// prompted when clicking on the add funds button on the user list
class Prompt_addfunds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fundsValue:0,
            user:CommonDataManager.getInstance().getName(),
            id:this.props.id
            
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange=(event, param)=>{
        
        if(event.target.value>99){
            event.target.value=String(event.target.value).slice(-2);
        }
        
        this.setState({fundsValue: event.target.value});
    }

    handleButtons=(event, param)=>{
        var funds=this.state.fundsValue
        if(isNaN(this.state.fundsValue)){
            this.setState({fundsValue:0})
        }
        if((funds+param >99) ||(funds+param<0)){

        }else{
            this.setState({fundsValue:funds+param})
        }
    }
    

    ComponentDidMount=()=>{
        this.setState({id:CommonDataManager.myInstance().getID(), user:CommonDataManager.myInstance().getUser()})
    }

    addfunds=()=>{
        if(isNaN(this.state.fundsValue)){
            return
        }
        var response = Promise.resolve(DatabaseConnector
        .getInstance()
        .finalUpdateUser({userData:{name:this.props.user, funds:this.props.funds+this.state.fundsValue, id:this.props.id}}));
        console.log(response)
        
        response.then(res=>{
            console.log(res.msg)
            if(!res.msg){
                this.setState({fundsValue: 0})
                alert("Funds added to account")

            }
        }).then(()=>{this.props.refresh()});
            
        
    }



    render() {
        return<div className='screened' >
              <div id='Opening_text'>
                <h2 id="Add_funds_text">
                    Add funds to the account {this.props.user}
                </h2>
                <p>
                    
                    The added amount will be in €<br/>
                    Add up 99€ by clicking the 2 buttons,<br/> 
                    or by pressing then number and giving an amount<br/>
                </p>
              </div>
            <div >
                <div className='addingFunds'>
                    <button className='fundsButtons' onClick={event=> this.handleButtons(event,-1)}>-1</button>
                    <input maxLength={2} value={this.state.fundsValue} onChange={this.handleChange} className='number' type="number"></input>
                    <button className='fundsButtons'  onClick={event=> this.handleButtons(event,1)}>+1</button>
                </div>
                <button id='addFunds' onClick={this.addfunds} >Add funds</button>
            </div>
            
        </div>
    }
}
//onClick={event=> this.startMenu(event,0)}

export default Prompt_addfunds;

