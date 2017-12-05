import React from 'react';

const userOutput = props => {
	return (
		<div>
			<p onClick={props.click}>paragraph 1</p>
			<p>paragraph 2 is full of {props.username}</p>
		</div>
	);
};

export default userOutput;
