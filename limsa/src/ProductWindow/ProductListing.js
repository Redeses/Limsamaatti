import './ProductListing.css';
import React from 'react';
import Product from './Product';
import DatabaseConnector from '../Connector';

//User information and data of their purhcases that will be shown in the main window
class ProductListing extends React.Component {
    
    dataArray=new Array;
    constructor(props){
        super(props);
        this.test=1;
        this.state={
            custArray:new Array
        }
        
    }

    componentDidMount(){
        this.makeTheList();
    }

    makeTheList(){
        var i=0
        var test=Promise.resolve(DatabaseConnector.getInstance().getProducts());
        test.then((result)=>{ 
            for(const key in result){
            
            this.dataArray.push(<Product key={i} qb={this.startQB} prompt={this.props.prompt}  product_name={result[i].name} product_price={result[i].price} product_image={result[i].picturename} storage={result[i].instore}/>);
            i++
        }
          this.setState({custArray:this.dataArray});
        }
        
        );
    }

    componentDidUpdate(){
        
    }

    //quickbuy funtion started by Product
    startQB=(e)=>{
        if(this.props.user.length===0){
            setTimeout(function() { alert("No user selected"); }, 3000);
        }else if(this.props.funds<parseFloat(e[1]) ){
            setTimeout(function() { alert("Not enough money"); }, 3000);
        }
        else {
            e.push(this.props.user)
            var test=Promise.resolve(DatabaseConnector.getInstance().finalUpdateProductAndUser(e));
            test.then((result)=>{ 
                if(result.msg===true){
                    setTimeout(function() { alert(e[0]+"was purchased for "+e[1]+" by account: "+e[2]); }, 5000);
                }
            })
        }
        
    }


    
    render() {
        return (
            <div className="productlistingBox">
                {this.state.custArray}
            </div>
        );
      }
  }

export default ProductListing;