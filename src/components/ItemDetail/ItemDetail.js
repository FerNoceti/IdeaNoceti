import React from "react";
import './ItemDetail.css';

function ItemDetail(item){

    return(
        <div className="itemDetail">
            <div className="itemDetail__container">
                <img src={item.image}></img>
            </div>
            <div className="itemDetail__container">
                <span className="itemDetail__nombre">{item.name}</span>
                <span className="itemDetail__precio">Precio: ${item.price}</span>
                <span className="itemDetail__descripcion">Lo que tenés que saber de este producto: <br/>{item.description}</span>
            </div>
        </div>
    )

}

export default ItemDetail