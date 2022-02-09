import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
    {id: nanoid(), name: 'Замена аккумулятора', price: 4000},
    {id: nanoid(), name: 'Замена микрофона', price: 2500},
]

function serviceListReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const {id, name, price} = action.payload;
            if (id) {
                return state.map(o => {
                    if (o.id === id) {
                        return {id: id, name: name, price: Number(price)};
                    }
                    return o;
                })
            } 
            return [...state, {
                id: nanoid(), 
                name,
                price: Number(price)
            }];
        case REMOVE_SERVICE:
            const {itemId} = action.payload;
            return state.filter(service => service.id !== itemId);
        default:
            return state;
    }
}

export default serviceListReducer;