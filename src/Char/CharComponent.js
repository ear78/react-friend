import React from 'react';

const charComponent = ( props ) => {
    const charStyle = {
        display: 'inline-block',
        padding: '20px',
        margin: '10px auto',
        border: '1px solid gainsboro',
        textAlign: 'center'
    }
    return (
        <div style={charStyle} onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default charComponent;