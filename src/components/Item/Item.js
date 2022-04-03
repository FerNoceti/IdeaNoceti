import { Component } from 'react'
import './Item.css'

class Item extends Component{

    constructor(props){
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.img = props.img;
        this.price = props.price
    }


    render(){
        return (
            <div className='item' id={this.id}>
                <span className='item__title'>{this.title}</span>
                <img className='item__image' src={this.img} alt="img item"/>
                <span className='item__precio'>Precio: ${this.price}</span>
            </div>
        )
    }
}

export default Item