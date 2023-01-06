import React from 'react';
import "./spinningLogo.css"



//add a spinning logo till something has loaded
class SpinningLogo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };

       
    }



    render() {
        return <div className="SpinningLogo" style={{display:this.props.ison}}></div>
        
    }
}

export default SpinningLogo;

