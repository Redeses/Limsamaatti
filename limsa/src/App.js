import Listing from './Customerlist/listing';
import QRcodeAPI from './QR/QRcodeAPI';
import MainWindow from './MainsiteData/MainWindow';
import './App.css';
import React from 'react';
import CommonDataManager from './DatakeeperS';
import DatabaseConnector from './Connector';
import HelpButton from './Buttons/HelpButton';
import NewUser from './Buttons/NewUser';
import Prompt from './FundsPrompt/Prompt';
import GetUser from './Buttons/GetUser';

//TODO Important things to consider when updateing the project later: 
/*ReacRouter: for the use of hisrtoy objecct that is used to give higher level components to use to the lower
level ones without passing on them as props  https://v5.reactrouter.com/web/api/history*/

//TODO add the logger to front and the back and make it work. Remember to make the document somewhat secret
//todo add logger
//todo error handling to promises
//todo admin side

class App extends React.Component {
  visibilityStatus;
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
          currentUSer:"",
          prompt_type:"2",
          current_id:"",

          current_item_name:"",
          current_item_cost:0
      };
      //DatabaseConnector.getInstance().callAPI();
      
     //this.IntervalExample();
  }
  
  /*IntervalExample = () => {
  
      const interval = setInterval(() => {
        this.test();
      }, 1000);
      return () => clearInterval(interval);

  }*/

  

  //triggers when anything in the Ele updates
  componentDidMount=()=>{
    this.setState({mainFunds: CommonDataManager.getInstance().getFunds()});
    this.setState({mainName:CommonDataManager.getInstance().getName()});
    this.setState({current_id:CommonDataManager.getInstance().getID()});  

}

  
  showbox=(e)=>{
    if(e==null){
      this.setState({mainFunds: CommonDataManager.getInstance().getFunds()});
      this.setState({mainName:CommonDataManager.getInstance().getName()});
      this.setState({current_id:CommonDataManager.getInstance().getID()});   
    }else{
      this.setState({mainFunds: CommonDataManager.getInstance().getFunds()});
      this.setState({mainName:CommonDataManager.getInstance().getName()});
      this.setState({current_id:CommonDataManager.getInstance().getID()}); 
    }
    
  }

  prompt =(e)=>{
      this.setState({visibilityStatusPrompt:(!this.state.visibilityStatusPrompt==true)})
      
      if(this.state.statusTest=="none"){
        if(CommonDataManager.getInstance().getPrompt()==="5"){
          this.setState({current_item_name:e[1],current_item_cost:e[2]})
        }
        
        this.setState({prompt_type:CommonDataManager.getInstance().getPrompt()})
        this.setState({statusTest:"block"})
        
      }else{
        this.setState({statusTest:"none"})
      }   
  }

  noPrompt=()=>{
    this.setState({statusTest:"none"})
  }


  clearBuymenu=()=>{
    this.setState({buywindow:null});
  }

  refresh=()=>{
    console.log("refresh test")
    if(!this.state.refresh){
      this.setState({refresh:true})
      console.log("fresh")
  
    }
 }

 refresh2=()=>{
  console.log("refresh2 test")
  if(this.state.refresh){
    this.setState({refresh:false})
    console.log("not Fresh")

  }
}

//TODO might want to consider mapping props as they are becoming quite long list

  render() {
    
    return (
      <div >
        <NewUser prompt={this.prompt}/>
        <GetUser boxShow={this.showbox} prompt={this.prompt}/> 
        <div className="listing">
          <Listing boxShow={this.showbox} prompt={this.prompt} refresh={this.state.refresh} refreshF={this.refresh2}/>
          
        </div>
        {this.state.buywindow}

        <Prompt status={this.state.statusTest} change={this.noPrompt} type={this.state.prompt_type} refresh={this.refresh} current_id={this.state.current_id} user={this.state.mainName} funds={this.state.mainFunds} chosenItem={this.state.current_item_name} chosenItemCost={this.state.current_item_cost}/>
        <MainWindow prompt={this.prompt} visibility={this.state.visibilityStatus} mainName={this.state.mainName} mainFunds={this.state.mainFunds}/>
        <HelpButton/>
      </div>
    );
  }
}

export default App;
