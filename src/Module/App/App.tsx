import React, {Component, Fragment} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StoreStateI} from '../Store/Store';
import * as F from '../Base/FormCtrl';
import Product, {StateI as ProductstateI} from './Product';


// Данные редакса
const mapState = (state: StoreStateI) => ({
});

// ф-и редакса
export const mapDispatchToProps = {
}

/**
 * Типы для редакса
 */
const connector = connect(mapState, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsI = PropsFromRedux & {
}

export interface StateI {
}

export class App extends React.Component<PropsI, StateI> {

  vFormCtrl = new F.FormCtrl<ProductstateI>({sName: ''});

  constructor(props: PropsI) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
    const vData = await this.vFormCtrl.faGetData();
    console.log(vData);
  }

  render() {
    return (
      <div className="container center-content">
        <Product vFormCtrl={this.vFormCtrl} />
      </div>
    )
  }
}


export default connector(App);
