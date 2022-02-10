import { EDIT_FILTER } from '../actions/actionTypes';

const initialState = {
    filter: ''
};

function serviceFilterReducer (state = initialState, action) {
    switch (action.type) {
        case EDIT_FILTER:
            const {filter} = action.payload;
            return {filter: filter};
        
        default:
            return state;
    }
}

export default serviceFilterReducer;