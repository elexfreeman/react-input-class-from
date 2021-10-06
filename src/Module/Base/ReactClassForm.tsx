import React, {Component, Fragment} from 'react';

import {Subject} from 'rxjs';
import store from '../Store/Store';
import ConstantsModal from '../StoreModal/Constants'


// тип события клика
export type ftOnEditDone = (vProduct: ReactClassForm) => void;

export interface BasePropsI {}

export interface BaseStateI {}


export class ReactClassForm extends React.Component<BasePropsI, BaseStateI> {


	protected subject = new Subject<ReactClassForm>();


	// бробрасываемый метод события клика
	protected fOnEditDone: ftOnEditDone | null = null;

	constructor(props: BasePropsI) {
		super(props);
	}


	public fSetOnEditDone(pFn: ftOnEditDone) {
		this.fOnEditDone = pFn;
	}

	public fGetEditForm(): React.ReactNode {
		return <Fragment></Fragment>
	}

	/**
	 * клип по кнопке редактирование завершено
	 */
	fEditDoneClick() {
		if (this.fOnEditDone) {
			this.fOnEditDone(this);
		}
	}


	/**
	 * Вызов формы редактирования полей класса 
	 * @returns Promice<TstProduct>
	 */
	public faGetEditedData(): Promise<TstProduct> {

		return new Promise((resolve, reject) => {

			store.dispatch({
				type: ConstantsModal.sSetData,
				payload: {
					bShowModal: true,
					vModalContent: this.fGetEditForm(),
					fOnBtnClick: () => {this.subject.next(this);},
				}
			});

			this.subject.asObservable().subscribe((data: ReactClassForm) => {
				store.dispatch({
					type: ConstantsModal.sSetData,
					payload: {
						bShowModal: false,
						fOnBtnClick: () => {},
					}
				});
				// завершаем обещани
				resolve(data)
			});

		});

	}

}
