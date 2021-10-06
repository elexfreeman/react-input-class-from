import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as StoreModal, StoreStateI as ModalStateI } from "./StoreModal/Reducer";

import thunk from 'redux-thunk';

declare let window: any;
/**
 * Описание общего сотояния
 */
export interface StoreStateI {
    StoreModal: ModalStateI,
}

const reducer = combineReducers({
    StoreModal: StoreModal,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

window['store'] = store;


export default store
