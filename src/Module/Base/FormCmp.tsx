import React, {Component, Fragment, useState} from 'react';
import {Subject} from 'rxjs';

export class FormCmp<DataT> {

  protected subject = new Subject<DataT>();

  protected vData: DataT;

  protected EditForm:  React.ReactNode;

  constructor(vData: DataT) {
    this.vData = vData;
    this.fCommit = this.fCommit.bind(this);
  }


  protected fSetEditFrom(cmpEditForm: React.ReactNode) {
    this.EditForm = cmpEditForm;
  }

  public fGetInitData(): DataT {
    return this.vData;
  }

  /**
   * завершение редактирования формы
   */
  public fCommit(vData: DataT) {
    this.subject.next(vData);
  }

  fGetEditForm = (): React.ReactNode => {
    return this.EditForm; 
  }


  public faGetData(): Promise<DataT> {
    return new Promise((resolve) => {
      this.subject.asObservable().subscribe((data: DataT) => {
        resolve(data)
      });
    });
  }

}
