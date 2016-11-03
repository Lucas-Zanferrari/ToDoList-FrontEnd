import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

class AddToDo extends Component {
	state = {
		modalOpen: false
	}
	
	closeModal() {
		this.setState({
			modalOpen: false
		});
	}

	openModal() {
		this.setState({
			modalOpen: true
		});
	}

	render() {
		const style = {
			position: 'fixed',
			right: 50,
			bottom: 50
		}
		
		return (
			<div>
				<FloatingActionButton style={style} onClick={this.openModal.bind(this)}>
					<AddIcon />
				</FloatingActionButton>
				
				<Dialog title="Nova lista" open={this.state.modalOpen} onRequestClose={this.closeModal.bind(this)}>
				</Dialog>
			</div>
		);
	}
} 

export default AddToDo;