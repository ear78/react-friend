import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './friends';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
	state = {
		title: 'Welcome to Elliot React',
		persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }],
		username: 'Aligators'
	};

	updateTitle(e) {
		this.setState({
			title: e.target.value
		});
	}
	// using es6 doesn't require .bind(this) in the click handler
	// passing in newName to setState
	handleSwitchName = newName => {
		this.setState({
			persons: [{ name: newName, age: 28 }, { name: 'Manu', age: 26 }]
		});
	};

	//two way binding example with method passed through props to person component
	nameChangeHandler = event => {
		this.setState({
			persons: [
				{ name: event.target.value, age: 28 },
				{ name: 'Manu', age: 29 }
			]
		});
	};

	changeStatePara = newUsername => {
		this.setState({
			username: 'Eagles'
		});
	};

	render() {
		const style = {
			backgroundColor: '#222',
			textTransform: 'uppercase',
			padding: '8px',
			border: '1px solid gainsboro',
			color: 'white',
			borderRadius: '3px',
			cursor: 'pointer'
		};
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
				{/*this syntax is not as efficient for rendering, use bind*/}
				<button
					style={style}
					onClick={() => this.handleSwitchName('Maximilian!!')}
				>
					Switch Name
				</button>
				<Person
					changed={this.nameChangeHandler}
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				{/* handleSwitch method passed property named anything we want,
				passing argument with bind(this, parameter)*/}
				<Person
					click={this.handleSwitchName.bind(this, 'Maximus!')}
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>
					My Hobbies: Racing!
				</Person>

				<UserInput />
				<UserOutput
					click={this.changeStatePara}
					username={this.state.username}
				/>
			</div>
		);
	}
}

export default App;
