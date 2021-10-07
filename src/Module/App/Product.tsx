import React, {Component, Fragment} from 'react';
import * as F from '../Base/FormCtrl';


export interface StateI extends F.BaseDataI {
  sName: string;
}

export interface PropsI {
  vFormCtrl: F.FormCtrl<StateI>;
}


export default class Cmp extends React.Component<PropsI, StateI> {

  constructor(props: PropsI) {
    super(props);
    let that: any = this;
    that.state = {...this.props.vFormCtrl.fGetInitData() }
  }

  render() {
    return (
      <div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(event) => {this.setState({sName: event.target.value})}}
            type="text"
            className="form-control"
            placeholder=""
          />
          <button
            onClick={() => {this.props.vFormCtrl.fCommit(this.state)}}
            type="button"
            className="btn btn-primary">Submit</button>
        </div>
      </div>
    )
  }

}

