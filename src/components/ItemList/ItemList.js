
import { Component } from 'react'
import './ItemList.css'

//No ocnsigo entender como incorporarla

function promesa(i){
    
    var promise = new Promise( (resolve, reject) => {
        setTimeout(resolve(i), 2000)        
     });

    promise.then(res => res)
}


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