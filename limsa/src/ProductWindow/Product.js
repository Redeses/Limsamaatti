import './Product.css';
import React from 'react';
import CommonDataManager from '../DatakeeperS';
import DatabaseConnector from '../Connector';

//User information and data of their purhcases that will be shown in the main window
class Product extends React.Component {
    userName="Mika Kuittnen";
    funds="40";

    constructor(props){
        super(props);
        this.state={
            product_name:props.product_name,
            product_price:props.product_price,
            product_image:props.product_image,
            product_color:"red"
        }
        this.settingColor=this.settingColor.bind(this)
    }

    componentDidMount(){
        
        this.settingColor()
    }

    componentDidUpdate(){
    }

    

    startMenu=(event,param)=>{
        if(param[0]===0){
            CommonDataManager.getInstance().setPrompt("5")
            this.props.prompt(param);
            console.log("prompt")
        }else{
            this.props.qb(param)
        }

        
    }

    settingColor=()=>{
        if(this.props.storage>20){this.setState({product_color:"green"})}else if(this.props.storage>5){this.setState({product_color:"yellow"})}else if(this.props.storage<1){this.setState({product_color:"red"})}
    }


    
    render() {
        return (
            <div className="product">
                <div className='product_name'>{this.state.product_name} price: {this.state.product_price}</div>
                <div className='availability' style={{"backgroundColor":this.state.product_color}}></div>
                <div  className='productPicture'>
                    <img  onClick={event=> this.startMenu(event,[0,this.props.product_name,this.props.product_price])} style={{ height: 200 }} src={require(`../img/${this.props.product_image}`)}></img>
                </div>
                
                <button  className='quickBuy' name={this.state.product_name} price={this.state.product_price} onClick={event=> this.startMenu(event,[this.props.product_name,this.props.product_price])}>Quickbuy</button>
            </div>
        );
      }
  }

export default Product;