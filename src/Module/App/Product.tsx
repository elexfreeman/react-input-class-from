import React, {Component, Fragment} from 'react';
import {ReactClassForm, BasePropsI, BaseStateI} from '../Base/ReactClassForm';

export interface StateI extends BaseStateI {
  sName: string;
}

export class Product extends ReactClassForm {

  state: StateI;

  constructor(props: BasePropsI) {
    super(props);
    this.state = {
      sName: '',
    }
  }


}
