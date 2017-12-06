import React from 'react';

const userInput = props => {
	const style = {
		border: '1px solid gainsboro',
		backgroundColor: 'lightblue',
		borderRadius: '3px',
		padding: '8px'
	};
	return (
		<div>
			<input
				style={style}
				type="text"
				onChange={props.changed}
				value={props.currentName}
			/>
		</div>
	);
};

export default userInput;
