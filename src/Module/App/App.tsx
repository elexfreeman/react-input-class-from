import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, HashRouter, Route, Link} from "react-router-dom";
import {connect, ConnectedProps} from 'react-redux';


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

export interface StateI {}

export class App extends React.Component<PropsI, StateI> {

	constructor(props: PropsI) {
		super(props);
		this.state = {}
	}

	async componentDidMount() {

	}


	render() {
		return (
			<div></div>

		)
	}
}


export default connector(App);
