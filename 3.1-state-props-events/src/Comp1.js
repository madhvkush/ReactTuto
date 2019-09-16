import React from 'react';

class Comp1 extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state={name:props.name} // initialize the state from the props

        // you also initilize like the below  {Destructuring}
        // this.state=props;
    }

    // handle change event on textbox
    //as state will change the render would be fire.
    handleOnChange=(event)=>{this.setState({name:event.target.value})}

    // on change the state value the render() would be re-Render
    render(){
        return(
            <>
            
            
            <label>{this.state.name}</label> <br/>

            <input type='text' placeholder='Enter your name' onChange={this.handleOnChange} />
            </>
        )
    }
}

export default Comp1;