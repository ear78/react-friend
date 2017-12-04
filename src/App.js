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
		title: 'Welcome to Elliot React',
		persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }]
	};

	updateTitle(e) {
		this.setState({
			title: e.target.value
		});
	}
	// using es6 doesn't require .bind(this) in the click handler
	handleSwitchName = () => {
		this.setState({
			persons: [
				{ name: 'Maximilian', age: 28 },
				{ name: 'Manu', age: 26 }
			]
		});
	};

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
				<button onClick={this.handleSwitchName}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>
					My Hobbies: Racing!
				</Person>
			</div>
		);
	}
}

export default App;
