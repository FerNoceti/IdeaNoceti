import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
  
function ItemListContainer() {
    return (
        <div className='itemListContainer'>
            <span className='itemListContainer__titulo'>Ejemplo de Futuro Catálogo</span>
            <span className='itemListContainer__subtitulo'>Contador con botón</span>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
  }


export default ItemListContainer