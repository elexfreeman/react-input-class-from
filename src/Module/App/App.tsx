import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import { connect, ConnectedProps } from 'react-redux';
import * as Product from './Product';
import { StoreStateI } from '../Store/Store';
import { ReactClassForm } from '../Base/ReactClassForm';
var createReactClass = require('create-react-class');


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
  vProduct: React.ReactNode;
}

export class App extends React.Component<PropsI, StateI> {

  pProduct: ReactClassForm | null;

  constructor(props: PropsI) {
    super(props);
    this.pProduct = null;
    this.state = {
      vProduct: (<Fragment></Fragment>),
    }
  }

  async componentDidMount() {
    const pProduct = new Product.Product();
    this.setState({
      vProduct: pProduct.fGetEditForm(),
    });
    const vData = await pProduct.faGetEditedData();
    console.log(vData.fGetState());

  }




  render() {
    return (
      <div className="container">
        {this.state.vProduct}
      </div>
    )
  }
}


export default connector(App);
