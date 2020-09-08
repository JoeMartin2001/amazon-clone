import React from 'react'
import './Styles/CheckoutProduct.css'
import {ItemContext} from './StateProvider'

function CheckoutProduct({id, title, image, rating, price}) {
    const [{basket}, dispatch] = ItemContext()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <div className='checkoutProduct__left'>
                <img className='checkoutProduct__img' src={image} alt='' />
                <div className='checkoutProduct__info'>
                    <h2>{title}</h2>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkoutProduct__rating'>
                        {Array(rating)
                        .fill()
                        .map((_, i) => ( 
                            <span key={i} role='img' aria-label='Star'>⭐</span>
                        ))
                        }
                    </div>
                    <button onClick={removeFromBasket} className='checkoutProduct__btn'>Remove from basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
