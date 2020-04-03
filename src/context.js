import React, { Component } from 'react';

const Context = React.createContext();

const initialContacts = [
    {
        id: '1',
        firstname: 'John',
        lastname: 'Doe'
    },
    {
        id: '2',
        firstname: 'Karen',
        lastname: 'Williams'
    }
];


const reducer = (state, action) => {
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

export class Provider extends Component {
    state = {
        items: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    componentDidMount = () => {
        this.setState({
            items: initialContacts
        });
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
export { Context };
