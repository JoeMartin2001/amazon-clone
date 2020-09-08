export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

export const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.payload
            }
        case 'ADD_TO_BASKET': { 
                const num = state.basket.findIndex((item) => item.id === action.payload.id)
                if(num >= 0) {
                    console.log(`Item ${action.payload.title} already exists!`)
                } else {
                    console.log(`Item ${action.payload.title} has been added to the basket!`)
                    return {
                        ...state,
                        basket: [...state.basket, action.payload],
                    }
                }
        }
        case 'REMOVE_FROM_BASKET': {
                let newBasket = [...state.basket] 
                const index = state.basket.findIndex((item) => item.id === action.payload)

                if(index >= 0) {
                    newBasket.splice(index, 1)
                }

                return {...state, basket: newBasket}
        }
        default: 
            return state
    }
}
