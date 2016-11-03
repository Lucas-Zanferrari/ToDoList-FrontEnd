import React, { Component, PropTypes } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<header className="navbar">
				<h4>{this.props.title}</h4>
			</header>
		);
	}
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

export default Navbar;