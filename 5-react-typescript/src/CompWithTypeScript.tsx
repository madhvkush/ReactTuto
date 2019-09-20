import React from 'react';

interface compProps
{
    fName:string;
    lName:string;
    age:number;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}



class CompWithTypeScript extends React.Component<compProps,{}> // 1st is Props Type & 2nd is state Type
{      

    render()
    {
        return(
            <>
            <label>Name:- {this.props.fName + ' '+ this.props.lName} &nbsp; Age:- {this.props.age}</label><br/>
            <input type="text" name="fName" placeholder="First Name" onChange={this.props.onChange} value={this.props.fName}/>
            <input type="text" name="lName" placeholder="Last Name" onChange={this.props.onChange} value={this.props.lName} />
            <input type="text" name="age" placeholder="Age (number)" onChange={this.props.onChange} value={this.props.age} />
            </>
        );
    }
}

export default CompWithTypeScript;