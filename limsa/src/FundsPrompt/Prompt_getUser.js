import React from 'react';
import "./Prompt.css";
import DatabaseConnector from '../Connector';
import SpinningLogo from '../img/SpinningLogo';

/** The prompt content component */
//used later on to get a user from database and login
//currently not really used for anything
class Prompt_getUser extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        value: 'testi', 
        logoDisplay:"none"
    };

    this.handleChange_Name = this.handleChange_Name.bind(this);
    this.handleChange_Pasword = this.handleChange_Pasword.bind(this);
    
    this.handleChange_Email = this.handleChange_Email.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange_Name(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  



  handleChange_Pasword(event){
    event.preventDefault();
    document.getElementById("ps1").style.backgroundColor="none"
    this.setState({pasword: event.target.value});
  }

  handleChange_Email(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }


  handleSubmit=(event)=> {
    event.preventDefault();
    
    DatabaseConnector.getInstance().finalGetAUser({data:{name:this.state.name, email:this.state.email, pasword:this.state.pasword}});
    this.clear()
    
    
  }

  clear=()=>{
    this.props.refresh()
    this.setState({name: ""});
    this.setState({pasword:""})
    this.setState({email:""})
    this.props.noPrompt();
  }

//a form that is used to make a new user
    render() {
        return <div className='screened' >
                <form className='loginForm'  id='form1' >
                  <label>Name</label> 
                    <input type="text"  key={"name"} value={this.state.name} onChange={this.handleChange_Name} />
                  <label>Email</label>
                    <input type="email"  key={"email"} value={this.state.email} maxLength={2}  onChange={this.handleChange_Email} />
                  <label>Password</label>
                    <input type="text" id="ps1" key={"password"} maxLength={15} value={this.state.pasword} onChange={this.handleChange_Pasword} />
                    <input type="submit" value="Login" id="submitButton" onClick={this.handleSubmit}/>
              </form>
            
        </div>
    }
}

export default Prompt_getUser;

