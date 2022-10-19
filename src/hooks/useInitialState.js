import React, { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    const addtoBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });

    }

    const getTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    }

    return {
        addToCart,
        removeFromCart,
        addtoBuyer,
        getTotal,
        addNewOrder,
        state
    }
}

export default useInitialState;
