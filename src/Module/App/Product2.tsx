import React, {Component, Fragment, useState} from 'react';
import * as F from '../Base/FormCmp';


export interface StateI {
  sName: string;
}

interface EditFormI {
  vData: StateI;
  fCommit: (vData: StateI) => void;
}

const EditForm = (props: EditFormI) => {
  const [sName, setName] = useState(props.vData.sName);
  return (
    <div>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          onChange={(event) => {setName(event.target.value)}}
          type="text"
          className="form-input"
          placeholder=""
        />
        <button
          onClick={() => {props.fCommit({sName: sName})}}
          type="button"
          className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default class Cmp extends F.FormCmp<StateI> { 
  static fInit(vData: StateI) {
    const v =  new Cmp(vData);
    v.fSetEditFrom(<Fragment>
        <EditForm vData={v.vData} fCommit={v.fCommit} />
      </Fragment>);
    return v; 
  } 
}

