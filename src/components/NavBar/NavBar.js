import React from 'react';
import { FaUser } from 'react-icons/fa';
import { BsFillCartFill, BsSearch } from 'react-icons/bs';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <span className='navbar__span'>Eris Store</span>
            <div className='navbar__search'>
                <input className='navbar__searcher' type="text" placeholder="Buscar productos.."></input>
                <a className='navbar__lupa' href='#'><BsSearch className='navbar__lupa'/></a>
            </div>
            </div>
        <div className='navbar__container'>
            <ul className='navbar__categorias'>
                <li className='navbar__categoria'><a href='#' className='navbar__a'>PS5</a></li>
                <li className='navbar__categoria'><a href='#' className='navbar__a'>Xbox</a></li>
                <li className='navbar__categoria'><a href='#' className='navbar__a'>PC</a></li>
            </ul>
            <div className='navbar__icons'>
                <a className='navbar__a' href='#'><FaUser className='navbar__icon'/></a>
                <a className='navbar__a' href='#'><BsFillCartFill className='navbar__icon'/></a>   
            </div>
        </div>
    </div>
  )
}

export default NavBar