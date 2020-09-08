import React from 'react'
import { ItemContext } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Styles/Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = ItemContext()

    return (
        <div className='checkout'>
            <div className='checkout__sub'>
                <div className='checkout__subEmpty'></div>
                <div className='checkout__subCon'>
                    <Subtotal />
                </div>
            </div>
            {basket.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty!</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" 
                    next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2>Your Shopping Basket!</h2>
                    {basket.length ? basket.map(item => <CheckoutProduct 
                    key={item.id} id = {item.id} title = {item.title}  
                    image = {item.image} price={item.price} rating={item.rating}
                    />) : ''}
                </div>
            )
            }
        </div>
    )
}

export default Checkout
