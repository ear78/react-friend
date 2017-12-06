import React from 'react';

const userOutput = props => {
	return (
		<div>
			{/* PASSED FROM APP.JS */}
			<p onClick={props.click}>paragraph 1</p>
			{/* COMING IN FROM STATE.USERNAME */}
			<p>paragraph 2 is full of {props.username}</p>
		</div>
	);
};

export default userOutput;
