import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

class List extends Component {
	
	renderItems() {
		return this.props.items.map(item => {
			return <ListItem key={item.id} description={item.descricao} />
		});
	}
	
	render() {
		return (
			<ul type="none" className="todo-list">
				{this.renderItems()}
			</ul>
		);
	}
}

List.propTypes = {
	items: PropTypes.array.isRequired
};

export default List;