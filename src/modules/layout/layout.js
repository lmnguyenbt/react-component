import React, { Component } from "react";

import Header from "../../components/header/header";
import Container from '../../components/container/container';
import Footer from "../../components/footer/footer";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome React Component"
		};
	}

	render() {
		return (
			<div>
				<Header title={this.state.title} />
                <Container/>
				<Footer/>
			</div>
		);
	}
}

export default Layout;