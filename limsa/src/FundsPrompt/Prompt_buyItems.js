import React from 'react';
import "./Prompt.css"
import DatabaseConnector from '../Connector';
import CommonDataManager from '../DatakeeperS';

/** The prompt content component */
//shows item clicked and gives a prompt to choose the amoun you want to buy
// will only allow you to buy as much as you have money and show the cost realtime
//next to the items picture
class Prompt_buyitems extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            fundsValue:0,
            user:CommonDataManager.getInstance().getName(),
            id:this.props.id,
            items_total:0,
            cost_total:0.0
            
        };
        this.handleChange = this.handleChange.bind(this);
        
        this.buyingItems = this.buyingItems.bind(this);
    }

    handleChange=(event)=>{
        if(event.target.value>99){
            event.target.value=String(event.target.value).slice(-2);
        }else if(event.target.value<0){
            event.target.value=0
        }
        this.setState({items_total: event.target.value,cost_total:Math.round(event.target.value*this.props.chosenItemCost*100)/100});  
    }

    componentDidMount(){
        
    }

    chaningTotal(){

    }

    buyingItems=(event)=>{
        event.preventDefault();
        const result=DatabaseConnector.getInstance().finalUpdateProductAndUser({data:{userId:this.props.id, productName:this.props.chosenItem, totalCost:this.state.cost_total, itemNro:this.state.items_total}})
        result.then((result)=>{
            if(!result.type){
                setTimeout(function() { alert(result.msg); }, 3000);
            }else{
                this.props.refresh()
            }
        });
    }


    render() {
        return<div className='screened' >
              <div className="showItem">
                <div className='buybox'>
                    <h2 id="title">Buying {this.props.chosenItem} for {this.props.chosenItemCost} € each</h2> 
                    <img>
                    </img>
                </div>
                <div className='buybox'>
                    <form>
                        <label id="title">Number of the product {this.props.chosenItem}</label>
                            <input maxLength={2} value={this.state.items_total} onChange={this.handleChange} className='number' type="number"></input>
                        <h2 input="no" id="totals" defaultValue={0}>Items: {this.state.items_total} </h2>
                        <h2 input="no" id="totals" defaultValue={0}>Cost total: {this.state.cost_total}</h2>
                        <input type="submit" value="Submit" onClick={this.buyingItems}/>
                    </form>
                </div>
              </div>
            
        </div>
    }
}

export default Prompt_buyitems;

