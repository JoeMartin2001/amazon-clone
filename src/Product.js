import React from 'react'
import './Styles/Product.css'
import { ItemContext } from './StateProvider'

function Product({title, image, rating, price, id}) {
    const [{basket}, dispatch] = ItemContext()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: { id, title, image, rating, price }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <h3>{title}</h3>
                <p className='product__price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i} role='img' aria-label='Star'>⭐</span>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket} className='product__button'>Add to basket</button>
        </div>
    )
}

export default Product
