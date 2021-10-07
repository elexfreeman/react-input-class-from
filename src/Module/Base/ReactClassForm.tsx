import React, { Component, Fragment } from 'react';

import { Subject } from 'rxjs';


// тип события клика
export type ftOnEditDone = (vProduct: ReactClassForm) => void;

export interface BasePropsI {
  fOnChange: (data: any) => void;
}

export interface BaseStateI { }

/**
 * загрузчик стейта для рекат компонента
 * @param props 
 * @param state 
 */
export const fLoadState = (props: any, state: any) => {
  state = {};
  for (let k in props) {
    if (k !== 'fOnChange') {
      state[k] = props[k]
    }
  }
}

export class ReactClassForm {

  protected state: BaseStateI = {};

  protected subject = new Subject<ReactClassForm>();

  constructor() {
  }

  // бробрасываемый метод события клика
  protected fOnEditDone(self: ReactClassForm) {
    this.subject.next(self);
  }


  protected fOnChangeData = (data: any) => {
    let state: any = this.state;
    for (let k in data) {
      state[k] = data[k];
    }
    this.fOnEditDone(this);
  }


  public fGetEditForm(): React.ReactNode {
    return (<Fragment></Fragment>);
  }

  /**
   * Вызов формы редактирования полей класса 
   * @returns Promice<TstProduct>
   */
  public faGetEditedData(): Promise<ReactClassForm> {
    return new Promise((resolve) => {
      this.subject.asObservable().subscribe((data: ReactClassForm) => {
        resolve(data)
      });
    });
  }


  public fGetState(): BaseStateI {
    return this.state;
  }


}
