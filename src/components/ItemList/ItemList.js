
import { Component } from 'react'
import './ItemList.css'


class ItemList extends Component{

    constructor(props){
        super(props);
        this.items = [];

        const promesa = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(console.log("bandera"))
                },2000)
            })
        }

        promesa().then(()=>{
            this.items = [props.items]
        })
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