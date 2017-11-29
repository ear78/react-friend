import React from 'react';
import Friends2 from './Friends2';

export default class Friends extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.setState(
    //         {username: 'Elliot'}
    //     )
    // }
    
    
    render(){
        const name = 'Elliot';
        return(
            <div>
                <h2>Hello World!</h2>
                <p>This is a paragraph</p>
                <p>Print {name}</p>
                <Friends2 name="Elliot"/>
                <Friends2 name="Johnny"/>
                <Friends2 name="Leroy"/>
            </div>
        )
    }
}

