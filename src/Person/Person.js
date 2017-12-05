import React from 'react';
import Person from './Person.css';

// SIMPLE FUNCTIONAL COMPONENT passing props from the component and children from in between the closing component tag

const person = props => {
	return (
		<div>
			<p className="person-para">
				I am a Person named, {props.name} and I am {props.age} years
				old.
			</p>
			{/* switch handle referenced method passed with props*/}
			<p onClick={props.click}>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
