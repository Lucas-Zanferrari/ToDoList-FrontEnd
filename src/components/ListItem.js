import React, { Component, PropTypes } from 'react';

class ListItem extends Component {
	render() {
		return (
			<li className="listItem">
				<label>
					<input type="checkbox" />
					{this.props.description}
				</label>
			</li>
		);
	}
}

ListItem.propTypes = {
	description: PropTypes.string.isRequired
};

export default ListItem;