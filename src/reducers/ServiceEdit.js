import { CANCEL_EDIT_STATE, BEGIN_EDIT } from "../actions/actionTypes";

const initialState = false;

function serviceEditReducer (state = initialState, action) {
    switch (action.type) {
        case BEGIN_EDIT:
            const id = action.payload;
            return {
                state: true,
                id: id,
            }
        case CANCEL_EDIT_STATE:
            return false;
        default:
            return state;
    }
}

export default serviceEditReducer;