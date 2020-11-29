import React, {Component} from 'react'
import './Boxes.css'
import Box from './Box'

class Boxes extends Component{

    
    
    constructor(props){
        super(props);
       this.state = {
           boxNums: Array.from({length: this.props.num})
       }
    }

    render(){
        const boxes = this.state.boxNums.map(() =>  <Box />)
        return(
            <div className="Boxes">
                { boxes }
            </div>
        )
    }
}

export default Boxes