import React, { Component, PropTypes } from 'react';
import List from './List';
import '../css/Card.css';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<h2>{this.props.title}</h2>
				<List items={this.props.items} />
			</div>
		);
	}
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
};

export default Card;