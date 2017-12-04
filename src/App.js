import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './friends';
import Person from './Person/Person';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		title: 'Welcome to Elliot React'
	// 	};
	// }
	state = {
		title: 'Welcome to Elliot React'
	};

	updateTitle(e) {
		this.setState({
			title: e.target.value
		});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{this.state.title}</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload. Type in input box to change title.
					<input type="text" onChange={this.updateTitle.bind(this)} />
				</p>
				<hr />
				<Friends />
				<button>Switch Name</button>
				<Person name="Max" age="28" />
				<Person name="Manu" age="29">
					My Hobbies: Racing!
				</Person>
			</div>
		);
	}
}

export default App;
