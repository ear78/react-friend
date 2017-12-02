import React from 'react';
import Friends2 from './Friends2';

const arr = [
    "lightblue",
    "black",
    "lightyellow",
    "gray",
    "gainsboro",
    "lightgreen"
];
export default class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "I am state gray",
            styleChange: "lightblue"
        }
    }
    toggleColor(){
        if(this.state.color === "I am state gray"){
            this.setState({color: "I am now changed state"})
        } else {
            this.setState({color: "I am state gray"})
        }
        
    }
    
    componentDidMount(){
        let colorPos = 0;
        setInterval(()=>{
            if(arr.length - 1 > colorPos){
                this.setState({
                    styleChange: arr[colorPos]
                });
                colorPos++;
            } else {
                this.setState({
                    styleChange: arr[colorPos]
                });
                colorPos = 0;
            }
        }, 1000)
    }
    
    changeBg(event){
        this.setState({styleChange: event.target.value})
    }
    
    render(){
        const name = 'Elliot';
        const styleObj = {
            backgroundColor: "red"
        }
        const styleChange = {
            backgroundColor: this.state.styleChange
        }
        return(
            <div>
                <h2>Hello World!</h2>
                {/*//style set via js variable*/}
                <h2 style={styleObj}>Styling This With Js</h2>
                {/*/style set by css*/}
                <p className="light-gray">This is a paragraph</p>
                {/*/ name set by js variable*/}
                <p>Print {name}</p>
                {/*/function toggleColor above*/}
                <p onClick={this.toggleColor.bind(this)}>Print {this.state.color}</p>
                <h4 style={styleChange}>
                    <input value={this.state.styleChange} onChange={this.changeBg.bind(this)}/>
                </h4>
                <Friends2 name="Elliot"/>
                <Friends2 name="Johnny"/>
                <Friends2 name="Leroy"/>
            </div>
        )
    }
}

