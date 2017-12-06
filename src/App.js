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
		persons: [
			{ id: 'assdf', name: 'Max', age: 28 },
			{ id: 'fdsa12', name: 'Manu', age: 29 }
		],
		username: 'Aligators',
		showPersons: false
	};

	updateTitle(e) {
		this.setState({
			title: e.target.value
		});
	}

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	//two way binding example with method passed through props to person component
	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons
		});
	};

	changeStatePara = newUsername => {
		this.setState({
			username: 'Eagles'
		});
	};

	usernameChangedHandler = e => {
		this.setState({ username: e.target.value });
	};

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
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

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								key={person.id}
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								changed={event =>
									this.nameChangeHandler(event, person.id)
								}
							/>
						);
					})}
					{/*<Person
						changed={this.nameChangeHandler}
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
					/>*/}
					{/* handleSwitch method passed property named anything we want,
					passing argument with bind(this, parameter)*/}
					{/*<Person
						click={this.handleSwitchName.bind(this, 'Maximus!')}
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
					>
						My Hobbies: Racing!
					</Person>*/}
				</div>
			);
		}
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{this.state.title}</h1>
				</header>
				<p className="App-intro">
					Type in input box to change title.
					<input type="text" onChange={this.updateTitle.bind(this)} />
				</p>
				<hr />
				<Friends />
				{/*this syntax is not as efficient for rendering, use bind*/}
				<button style={style} onClick={this.togglePersonHandler}>
					Switch Name
				</button>
				{persons}

				{/* PASSING PROPS TO COMPONENT */}
				<UserInput
					changed={this.usernameChangedHandler}
					currentName={this.state.username}
				/>
				<UserOutput
					click={this.changeStatePara}
					username={this.state.username}
				/>
			</div>
		);
	}
}

export default App;
