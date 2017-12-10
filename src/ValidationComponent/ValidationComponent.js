import React from 'react';

const validationComponent = ( props ) => {
    let validationMessage = 'Text long enough';
    
    if (props.inputLength <= 5){
        validationMessage = 'Text too short';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validationComponent;