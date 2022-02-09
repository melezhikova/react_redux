import { EDIT_ITEM, CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD } from '../actions/actionTypes';

const initialState = {
    name: '', 
    price: ''
};

function serviceAddReducer (state = initialState, action) {
    switch (action.type) {
        case EDIT_ITEM:
            const {itemName, itemPrice} = action.payload;
            return {name: itemName, price: itemPrice};
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case CLEAR_SERVICE_FIELD:
            return initialState;
        default:
            return state;
    }
}

export default serviceAddReducer;