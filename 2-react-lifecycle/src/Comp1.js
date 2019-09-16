import React from 'react';

class Comp1 extends React.Component
{
    constructor()
    {
        super();
        console.log('Contructor');
    }

    state={myName:'John'}

    static getDerivedStateFromProps()
    {
        console.log('getDerivedStateFromProps');
        return null; // here you can set the state fields from Props
    }

    componentDidMount()
    {
        console.log("componentDidMount");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }
    handleClick=()=>{console.log('On click Button'); this.setState({myName:'Maria'})}
    render()
    {
        console.log("render");
        return(
            <>
            <h3>React LifeCycle</h3>
            <button onClick={this.handleClick}>OK</button>
            </>
        )
    }

}

export default Comp1;