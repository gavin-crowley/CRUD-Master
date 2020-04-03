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
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(
                    contact =>
                        contact.id === action.payload.id
                            ? (contact = action.payload)
                            : contact
                )
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        itemss: [],
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