import React from 'react'
import './ItemList.css'


function ItemList(props){     

        return(
            <div className='itemlist'>
                {props.items.map(i => i)}
            </div>
        )

}

export default ItemList