import React, { Component } from 'react';
import SearchField from './SearchField';
import Card from './Card';
import AddToDo from './AddToDo';

class ToDoGrid extends Component {
	
	state = {
		toDoList: [],
		searchValue: ''
	};

	componentDidMount() {
		fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
		.then(response => response.json())
		.then(response => {
			this.setState({
				toDoList: response
			});
		});
	}
	
	renderCards() {
		var toDosFilter = this.state.toDoList;
		
		toDosFilter = toDosFilter.filter(toDo => {
			return toDo.titulo.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1;
		});
		
		return toDosFilter.map(function(toDo){
			return <Card key={toDo.id} items={toDo.itens} title={toDo.titulo} />
		});
	}
	
	handleSearch(text) {
		//console.log(text);
		this.setState({
			searchValue: text	
		});
		
	}

	render() {
		return (
			<div>
				<SearchField placeHolderText="Search..." onSearch={this.handleSearch.bind(this)} />
				{this.renderCards()}
				
				<AddToDo />
			</div>
		);
	}
}

export default ToDoGrid;