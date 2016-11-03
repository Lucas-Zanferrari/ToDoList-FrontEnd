import React, { Component, PropTypes } from 'react';
import '../css/SearchField.css';

class SearchField extends Component {
	
	handleKeyUp(event) {
		this.props.onSearch(event.target.value);
	}
	
	render() {
		return (
			<form className="search-field">
				<input type="search" placeholder={this.props.placeHolderText} onKeyUp={this.handleKeyUp.bind(this)} />
			</form>
		);
	}
}

SearchField.propTypes = {
	placeHolderText: PropTypes.string.isRequired
};

export default SearchField;