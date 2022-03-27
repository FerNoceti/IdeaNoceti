import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer() {

    function addCart(){
        const cantidad = document.getElementById("cantidad").innerHTML;
        console.log(`añadido ${cantidad} al carrito`);
    }

    return (
        <div className='itemListContainer'>
            <span className='itemListContainer__titulo'>Ejemplo de Futuro Catálogo</span>
            <span className='itemListContainer__subtitulo'>Contador con botón</span>
            <div>
                Item 1
                <ItemCount stock={5} initial={0} onAdd={addCart}/>
            </div>
            <div>
                Item 2
                <ItemCount stock={10} initial={2} onAdd={addCart}/>
            </div>
            <div>
                Item 3
                <ItemCount stock={0} initial={0} onAdd={addCart}/>
            </div>
            <div>
                Item 4
                <ItemCount stock={5} initial={5} onAdd={addCart}/>
            </div>            
        </div>
    )
  }


export default ItemListContainer