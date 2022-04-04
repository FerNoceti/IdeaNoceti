import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {

    const texto = 'Dispositivo liberado para que elijas la compañía telefónica que prefieras.Pantalla Dynamic AMOLED de 6.1". Tiene 3 cámaras traseras de 16Mpx/12.2Mpx/12Mpx. Cámara delantera de 10Mpx. Batería de 3400mAh. Memoria interna de 128GB. Resistente al agua. Con reconocimiento facial y sensor de huella dactilar.'

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(<ItemDetail image="https://http2.mlstatic.com/D_NQ_NP_2X_914989-MLA31578002339_072019-F.webp" name= "Galaxy S10" price="500" description ={texto}/>)
            },2000)
        })
    }        

    const [item, setItem] = useState()
    useEffect(() => {
        getItem().then(response =>{
            setItem(response);
        })
    }, [])

    return (
        <div className='itemDetailContainer'>
            <h1>Ejemplo de detalles de un producto</h1>
            {item}
        </div>
    )
  }

export default ItemDetailContainer