import './CustomerEle.css';
import React from 'react';
import CommonDataManager from '../DatakeeperS';


//used to make the list of customers with the data 
class CustomerEle extends React.Component {
    customer_name="";
    customer_status="";
    customer_funds=0;
    customer_id="";
    

    constructor(props){
        super();
        this.state={
            customer_funds:props.funds,
            customer_id: props.id,
            customer_name: props.text,
            colorNow:"",
            comp_hasM:false
        };
        this.useOutsideAlerter();
        
    }

    componentDidMount(){
        this.setState({comp_hasM:true})
    }

   
/*

    
    //the following two will get their funds from back-end in the future
  


    addTestFunds =(funds)=>{
        this.setState({
            customer_funds: this.state.customer_funds+1
        }, () => {
            this.showdisplay();
        });
    }

    buy=(amount, product)=>{
        this.setState({
            customer_funds: this.state.customer_funds-1
        }, () => {
            this.showdisplay();
        });
    }*/
    addFunds =  (e) =>{
        this.runfull();

        this.props.prompt();
    }

    //sets data of the user to Common datakeeper
    runfull=()=>{
        CommonDataManager.getInstance().setName(this.state.customer_name);
        CommonDataManager.getInstance().setFunds(this.state.customer_funds);
        CommonDataManager.getInstance().setID(this.state.customer_id);
        CommonDataManager.getInstance().setPrompt("2");
        
    }

    highlightCustomer = () =>{
        if(this.state.comp_hasM){
            this.setState({colorNow:"blue"})    
        }
        
    }

    //TODOO THIS IS STILL AN ISSUE
    unHighlightCustomer = (event)=>{
        if(!this.state.comp_hasM){
            return
        }else if (event.target.txt!=="n") {
            this.setState({colorNow:""})    
          }
        
    }

    /*!!! this next*/
    //should show the display with the data
    showdisplay=()=>{
        this.runfull();
        this.highlightCustomer();
        this.handleClick();
    }

    
    handleClick=()=>{

        this.props.boxShow();
    }

    useOutsideAlerter=()=> {
        document.addEventListener("mousedown", this.unHighlightCustomer);
        
    }
   

    deleteThis=()=>{
        //this.unHighlightCustomer()
        CommonDataManager.getInstance().setPrompt("4");
        this.setState({comp_hasM:true})
        this.props.prompt()
    }

    

    
    render() {
        return (
            <div txt="n" onClick={this.showdisplay} style={{backgroundColor:this.state.colorNow}}  className="CustomerEle" id='customer'>
                <div className="customerEleText" >
                    {this.props.text} {this.state.customer_id}
                                         
                </div>
                <div className='userFunds' onClick={this.addFunds}>
                    funds:  {this.props.funds}
                </div>
                <div className='deleteThis' onClick={this.deleteThis}>
                    <button>remove user</button>
                </div>
               
            </div>
        );
      }
  }

export default CustomerEle;