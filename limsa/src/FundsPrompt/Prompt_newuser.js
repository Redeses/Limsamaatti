import React from 'react';
import "./Prompt.css";
import DatabaseConnector from '../Connector';

/** The prompt content component */
class Prompt_newuser extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        value: 'testi', 
        value2:13,
        value3:"",
        name:"",
        pasword:"",
        email:"",
        funds:0
    };

    this.handleChange_Name = this.handleChange_Name.bind(this);
    this.handleChange_Funds = this.handleChange_Funds.bind(this);
    
    this.handleChange_Pasword = this.handleChange_Pasword.bind(this);
    
    this.handleChange_Email = this.handleChange_Email.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange_Name(event) {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({name: event.target.value});
  }

  
  handleChange_Funds(event) {
    event.preventDefault();
    this.setState({funds: event.target.value});
  }

  CheckPassword(inputtxt) { 
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(inputtxt.value.match(passw)) {  
  
      return true;
    }
    else{ 
      return false;
    }
  }

  handleChange_Pasword(event){
    event.preventDefault();
    console.log(event.target.value)
    document.getElementById("ps1").style.backgroundColor="none"
    this.setState({pasword: event.target.value});
  }

  handleChange_Email(event){
    event.preventDefault();
    console.log(event.target.value)
    this.setState({email: event.target.value});
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    
    if(!this.CheckPassword(this.state.ps)){
      document.getElementById("ps1").style.backgroundColor="red"
      console.log("Password has an issue")
    }else{
      DatabaseConnector.getInstance().finalSaveUser({data:{name:this.state.name, email:this.state.email,funds:this.state.funds, pasword:this.state.pasword,id:this.state.value+Math.trunc((Math.random()*1000))}});
      this.clear()
    }
    
  }

  clear=()=>{
    this.props.refresh()
    this.setState({name: ""});
    this.setState({funds: 0});
    this.setState({value3:""})
    this.setState({pasword:""})
    this.setState({email:""})
    this.props.noPrompt();
  }

//a form that is used to make a new user
    render() {
        return <div className='screened' >
                <form className='newUserForm'  id='form1' >
                  <label>Name</label> 
                    <input type="text"  key={"name"} value={this.state.name} onChange={this.handleChange_Name} />
                  <label>Email</label>
                    <input type="email"  key={"email"} value={this.state.email} maxLength={2}  onChange={this.handleChange_Email} />
                  <label>Money</label>
                    <input type="number"  key={"money_amount"} value={this.state.funds} maxLength={2}  onChange={this.handleChange_Funds} />
                  <label>Password</label>
                    <input type="text" id="ps1" key={"password"} maxLength={15} value={this.state.pasword} onChange={this.handleChange_Pasword} />
                    <input type="submit" value="Make a new user" id="submitButton" onClick={this.handleSubmit}/>
              </form>
            
        </div>
    }
}

export default Prompt_newuser;

