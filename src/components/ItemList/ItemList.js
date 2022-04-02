import { Component } from 'react'
import './ItemList.css'


class ItemList extends Component{

    constructor(props){
        super(props);
        this.items = [props.items];      

    }

    render(){
        
        return(
            <div className='itemlist'>
                {this.items.map(i => i)}
            </div>
        )
    }
}

export default ItemList