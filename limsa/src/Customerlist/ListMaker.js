import './listing.css';
import React from 'react';
import CustomerEle from './CustomerEle';
import DatabaseConnector from '../Connector';

//used to make the list of customers with the data 
class ListMaker extends React.Component {
    
    test;
    dataArray=new Array;
    constructor(props){
        super(props);
        this.test=1;
        this.state={
            custArray:new Array
        }
        //get data here
        this.makeList=this.makeList.bind(this);
    }

    //used to change the maindata visible on the website
    //has to get user data from the element clicked. 
    changeTheMainData(){

    }

    componentDidUpdate(){
      
      if(this.props.refresh){
        console.log("once?")
        this.makeList()
        this.props.refreshF()
      }
    }
    
    

    componentDidMount(){
      
       this.makeList();
            
      }


      //gets a list from database connector and add gotten data into a list
      makeList=()=>{
        this.dataArray=[]
        var i=0
        var test=Promise.resolve(DatabaseConnector.getInstance().finalGetUsers(null));
        if(!test){
          console.log("Failed")
          return
        }
        test.then((result)=>{ 
            
            for(const key in result){
              console.log(result[i].currentfunds)
              this.dataArray.push(<CustomerEle key={i} prompt={this.props.prompt} boxShow={this.props.boxShow} text= {result[i].name} id={result[i].id} funds={result[i].currentfunds }  />);
                i++;
            }
          this.setState({custArray:this.dataArray});
        }
        
        ).then(()=>console.log("Updated list"+this.state.custArray[0]));
      }
    
      

    

    render() {
        return (
            <div className="ActualList" onClick={this.listIsClicked}>
                {this.state.custArray}
            </div>
        );
      }
  }
  
export default ListMaker;