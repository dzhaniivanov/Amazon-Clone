import React, { createContext, useContext, useReducer } from 'react';

/* preparing data layer */
export const StateContext = createContext();
/* wrap componnents,provide the provider */
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
/* this is how we can use it inside of a component */
export const useStateValue = () => useContext(StateContext);