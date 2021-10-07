import React, { Component, Fragment } from 'react';
import { ReactClassForm, BasePropsI, BaseStateI, fLoadState } from '../Base/ReactClassForm';

export interface PropsI extends BasePropsI {
  sName: string;
}

export interface StateI extends BaseStateI {
  sName: string;
}

class Cmp extends React.Component<PropsI, StateI> {

  constructor(props: PropsI) {
    super(props);
    fLoadState(props, this.state);
  }

  render() {
    return (
      <div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(event) => { this.setState({ sName: event.target.value }) }}
            type="text"
            className="form-control"
            placeholder=""
          />
          <button onClick={() => { this.props.fOnChange(this.state) }} type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
    )
  }

}

export class Product extends ReactClassForm {

  state: StateI = {
    sName: '',
  };


  fGetEditForm(): React.ReactNode {
    return (<Cmp fOnChange={this.fOnChangeData} {...this.state} />);
  }

}
