import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ToDoGrid from './components/ToDoGrid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
		<MuiThemeProvider>
		  <div className="App">
			<Navbar title="To-do list" />
			{this.props.children}
		  </div>
		</MuiThemeProvider>
    );
  }
}

export default App;
