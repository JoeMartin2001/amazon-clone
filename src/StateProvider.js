import React, { createContext, useReducer, useContext } from 'react'

const StateContext = createContext()

export const ItemContext = () => useContext(StateContext)

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
