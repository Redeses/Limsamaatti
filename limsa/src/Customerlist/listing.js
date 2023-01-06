import './listing.css';
import Listingheader from './ListHeaderEle';
import ListMaker from './ListMaker';
import React from 'react';

class Listing extends React.Component {

    constructor(props){
        super(props);
        
    }
    
    
    render() {
        return (
            <div className="fullListEle">
                <Listingheader/>
                <ListMaker boxShow={this.props.boxShow} prompt={this.props.prompt} refresh={this.props.refresh} refreshF={this.props.refreshF}/>
            </div>
        );
      }
  }
  
export default Listing;

 