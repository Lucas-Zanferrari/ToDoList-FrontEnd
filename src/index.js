import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchField from './components/SearchField';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ToDoGrid from './components/ToDoGrid';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
		<IndexRoute component={ToDoGrid} />
		<Route path="/search" component={SearchField} />
	</Route>
  </Router>,
  document.getElementById('root')
);
