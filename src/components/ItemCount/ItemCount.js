import { Component } from 'react'
import './ItemCount.css'

class ItemCount extends Component{
    constructor(props){
        super(props);
        this.state = { count: this.props.initial }
        this.stock = props.stock
    }
    

    removeItem = () =>{

        if (this.state.count != 0){
            this.setState({
                count: this.state.count - 1
            })
            }
        }

        
    
    addItem = () =>{

        if (this.state.count < this.stock){
            this.setState({
                count: this.state.count + 1
            })
        }

    }

    render() {
        return (
        <div className='itemcount'>
            <button onClick={this.removeItem} className='itemcount__button'>-</button>
            <span className='itemcount__cantidad'>{this.state.count}</span>
            <button onClick={this.addItem} className='itemcount__button'>+</button>
        </div>
        )
    }
}

export default ItemCount