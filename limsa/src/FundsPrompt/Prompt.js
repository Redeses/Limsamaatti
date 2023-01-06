import React from 'react';
import Popup from 'reactjs-popup';
import "./Prompt.css"
import CommonDataManager from '../DatakeeperS';
import OutsideAlerter from '../Alerter';
import Prompt_addfunds from './Prompt_addfunds';
import Prompt_newuser from './Prompt_newuser';
import Prompt_getUser from './Prompt_getUser';
import Prompt_askPasword from './Prompt_askPasword';
import Prompt_buyitems from './Prompt_buyItems';


/** The prompt content component */
class Prompt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue,
            user:this.props.user,
            funds:this.props.funds,
            id:this.props.id,
            typeofprompt:null
        };

        this.onChange = (e) => this._onChange(e);
    }

    componentDidMount(){
       
    }

    componentDidUpdate(){
        //console.log(this.props.status);
        
    }




    //do a clearing user data function
    clear=()=>{
        this.setState({user:"", funds:0})
    }

    getPromptLayout(){
        return ;
    }


    render() {
        if(this.props.type=="1"){
            return <OutsideAlerter change={this.props.change} noLert={this.props.status}>
                    <Prompt_newuser  noPrompt={this.props.change} refresh={this.props.refresh}/>
                    </OutsideAlerter>;
        }else if(this.props.type=="2"){
            return <OutsideAlerter change={this.props.change} noLert={this.props.status}>
                    <Prompt_addfunds id={this.props.current_id} refresh={this.props.refresh} user={this.props.user} funds={this.props.funds} noPrompt={this.props.change}/>
                 </OutsideAlerter>;
        }else if(this.props.type=="3"){
            return <OutsideAlerter change={this.props.change} noLert={this.props.status} >
                <Prompt_getUser  waiting={this.props.isWaiting} noPrompt={this.props.change} handlec={this.props.handleC} user={this.props.user}/>
            </OutsideAlerter>;
        }else if(this.props.type=="4"){
            return <OutsideAlerter change={this.props.change} noLert={this.props.status} >
                <Prompt_askPasword noPrompt={this.props.change} refresh={this.props.refresh}  id={this.props.current_id} user={this.props.user}/>
            </OutsideAlerter>;
        }else if(this.props.type=="5")
        {

            return <OutsideAlerter change={this.props.change} noLert={this.props.status} >
                <Prompt_buyitems noPrompt={this.props.change} refresh={this.props.refresh} id={this.props.id} user={this.props.user} funds={this.props.funds} chosenItem={this.props.chosenItem} chosenItemCost={this.props.chosenItemCost}/>
            </OutsideAlerter>;
        }else{
            return <OutsideAlerter change={this.props.change} noLert={this.props.status}>
                    <Prompt_addfunds user={this.props.getuser} id={null} noPrompt={this.props.change}/>
                 </OutsideAlerter>;
        }
        
    }
}

export default Prompt;

