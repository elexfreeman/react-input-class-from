import React, {Component, Fragment} from 'react';

export interface PropsI {}

export interface StateI {
}

export default class App extends React.Component<PropsI, StateI> {


  constructor(props: PropsI) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
  }

  render() {
    return (
      <div className="container">
      </div>
    )
  }
}


