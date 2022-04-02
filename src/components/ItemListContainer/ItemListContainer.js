import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';

function ItemListContainer() {

    function addCart(){
        console.log(`se agrego al carrito`);
    }

    const items = [
        <Item id="1" title={"Remera"} img={"https://canova.com.ar/img/remera_corta_azul.jpg"} price={"10"}/>,
        <Item id="2" title={"Gorra"} img={"https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/W/3/W306NY004U-550_0.jpg"} price={"20"}/>,
        <Item id="3" title={"Zapatillas"} img={"https://d3ugyf2ht6aenh.cloudfront.net/stores/467/469/products/gero-tucson-51-9d0da9c49df89e184416167632957489-1024-1024.jpg"} price={"10"}/>,
        <Item id="4" title={"Short"} img={"https://www.lavanguardia.com/files/image_948_465/uploads/2020/08/22/5faa5b9aaa15a.jpeg"} price={"30"}/>,
        <Item id="5" title={"Conjunto"} img={"https://sporting.vteximg.com.br/arquivos/ids/261671-1500-1500/6FS6571-000-1.jpg?v=637521219325130000"} price={"70"}/>
    ]

    const promesa = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(items)
            },2000)
        })
    }

    const [listaDeItems, setListaDeItems] = useState([])
    useEffect(() => {
        promesa().then(response =>{
            console.log(response);
            setListaDeItems(response);
        })
    }, [])


    return (
        <div className='itemListContainer'>
            <span className='itemListContainer__titulo'>Ejemplo de Futuro Catálogo</span>
            <ItemList items={listaDeItems}/>
            <button onClick={() => {console.log("click"); setListaDeItems(items)}}>Cargar Items</button>
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