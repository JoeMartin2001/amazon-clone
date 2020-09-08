import React from 'react'
import './Styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { ItemContext } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{basket}] = ItemContext()
    return (
        <div className='subtotal'>
        <CurrencyFormat 
            renderText = {(value) => (
                <>
                    {basket.length > 1 ? 
                        <p>Subtotal ({basket.length} items): <strong>{`${value}$`}</strong></p> :
                        <p>Subtotal ({basket.length} item): <strong>{`${value}$`}</strong></p>
                    } 
                    <small className='subtotal__gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
