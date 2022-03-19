import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import './CartWidget.css';
  
class CartWidget extends React.Component {
    render() {
        return (
            <div className='cart'>
                <BsFillCartFill className='cart__icon'/>
                <span className='cart__number' id='cartNum'>0</span>
            </div>
          );
        }
}

export default CartWidget