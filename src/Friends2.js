import React from 'react';
import StateLess from './StateLess';

class Friends2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultStyle: {
                color: "tomato"
            }
        }
    }
    render(){
        let txt = this.props.txt;
        return(
            <div>
            <h3>This is Friends {this.props.name}</h3>
            <p>I am a variable <span style={this.state.defaultStyle}>{txt}</span></p>
            <StateLess />
            </div>
        )
        
    }
};

Friends2.defaultProps = {
    txt: "This is the default prop"
}

export default Friends2;