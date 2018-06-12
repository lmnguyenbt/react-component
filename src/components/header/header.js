import React, { Component } from "react";

import Title from "../../components/header/title";

class Header extends React.Component {
	render() {
		return (
			<Title title={this.props.title} />
		);
	}
}

export default Header;