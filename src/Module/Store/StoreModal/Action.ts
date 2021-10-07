import { ReducerPayloadI } from "../ReduxI";
import Constants from "./Constants";
import { StoreStateI } from "./Reducer";



export type PayloadT = (param: ReducerPayloadI<StoreStateI>) => void;

/**
 * показать скрыть модалку 
 */
export const fShowModal = (bShowModal: boolean) => async (dispatch: PayloadT) => {

    dispatch({
        type: Constants.sSetData,
        payload: {
            bShowModal: bShowModal,
        }
    });
}

export const fSetModalData = (sTitle: string, sButtonTitle: string) => async (dispatch: PayloadT) => {

    dispatch({
        type: Constants.sSetData,
        payload: {
            sTitle: sTitle,
            sButtonTitle: sButtonTitle,
        }
    });
}



