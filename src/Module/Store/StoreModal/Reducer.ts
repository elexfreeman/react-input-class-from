import { ReducerPayloadI } from "../ReduxI";
import Constants from "./Constants";

export interface StoreStateI {
    bShowModal?: boolean;
    vModalContent?: any;
    sTitle?: string;
    fOnCloseClick?: () => void;
    sButtonTitle?: string;
    fOnBtnClick?: () => void;
}

//=================================
const initialState: StoreStateI = {
    bShowModal: false,
    vModalContent: null,
    sTitle: '',
    fOnCloseClick: () => {},
    sButtonTitle: '',
    fOnBtnClick: () => {},
}


export const reducer = (state: StoreStateI = initialState, R: ReducerPayloadI<StoreStateI>) => {
    switch (R.type) {
        case Constants.sSetData:
            return {
                ...state,
                ...R.payload
            };
        default:
            return state;
    }
};

