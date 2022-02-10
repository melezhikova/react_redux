import { createStore, combineReducers } from "redux";
import serviceListReducer from "../reducers/ServiceList";
import serviceAddReducer from "../reducers/ServiceAdd";
import serviceEditReducer from "../reducers/ServiceEdit";
import serviceFilterReducer from "../reducers/ServiceFilter";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    isEditing: serviceEditReducer,
    filter: serviceFilterReducer,
});

const store = createStore(reducer);

export default store;