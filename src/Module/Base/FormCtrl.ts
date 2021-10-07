import {Subject} from 'rxjs';

export interface BaseDataI { }

export interface BasePropsI {
  vFormCtrl: FormCtrl<BaseDataI>;
}


export class FormCtrl<DataT> {

  protected subject = new Subject<DataT>();

  protected vData: DataT;

  constructor(vData: DataT) {
    this.vData = vData;
  }

  public fGetInitData(): DataT {
    return this.vData;
  }

  fCommit = (vData: DataT) => {
    this.subject.next(vData);
  }


  public faGetData(): Promise<DataT> {
    return new Promise((resolve) => {
      this.subject.asObservable().subscribe((data: DataT) => {
        resolve(data)
      });
    });
  }

}
