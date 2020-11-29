import React, {Component} from 'react'
import './Box.css'

class Box extends Component{
    static defaultProps = {
        colors: ['red', 'green', 'blue', 'orange', 'yellow', 'purple']
    }
    
    constructor(props){
        super(props);
        this.state = {
            color: this.changeColor(this.props.colors)
        }
    }

    changeColor = (arr) => {
        return arr[Math.floor(Math.random()*arr.length)]
    }
    
    pickColor = (arr) => {
        let randomColor; 
        do { randomColor = arr[Math.floor(Math.random()*arr.length)]
        } while (randomColor === this.state.color)
        return randomColor
    }

    handleClick = () => {
        this.setState({color: this.pickColor(this.props.colors)})
    }

    render(){
        return(
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
        )
    }
}

export default Box