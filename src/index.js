import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import "./index.css";
import App from "./App";

let initialState = {
    items: [{
        id: '1',
        firstname: 'John',
        lastname: 'Doe'
    },
    {
        id: '2',
        firstname: 'Karen',
        lastname: 'Williams'
    }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(
                    item => item.id !== action.payload
                )
            };
        case 'ADD_ITEM':
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
};

const store = createStore(reducer, initialState)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

