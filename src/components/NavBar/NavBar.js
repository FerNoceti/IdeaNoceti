import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './NavBar.css';
import '../CartWidget/CartWidget.js'
import CartWidget from '../CartWidget/CartWidget.js';
function NavBar() {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <span className='navbar__span'>Eris Store</span>
            <div className='navbar__search'>
                <input className='navbar__searcher' type="text" placeholder="Buscar productos.."></input>
                <a href='#'><BsSearch className='navbar__lupa'/></a>
            </div>
            </div>
        <div className='navbar__container'>
            <ul className='navbar__categorias'>
                <li className='navbar__categoria'><a href='#' className='navbar__a'>PS5</a></li>
                <li className='navbar__categoria'><a href='#' className='navbar__a'>Xbox</a></li>
                <li className='navbar__categoria'><a href='#' className='navbar__a'>PC</a></li>
            </ul>
            <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar