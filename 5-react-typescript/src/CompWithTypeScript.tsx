import React from "react";

/**
 * Component Props Model
 */
interface CompProps {
  fName: string; // First of string type
  lName: string; // Last Name of string type
  age: number; // Age like number
  // on change event having Input as HTMLInputelement and return type as void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Component State Model
 */
interface CompState {}

class CompWithTypeScript extends React.Component<CompProps, CompState> {
  render() {
    const { fName, lName, age, onChange } = this.props;
    return (
      <>
        <label>
          Name:- {fName + " " + lName} &nbsp; Age:- {age}
        </label>
        <br />
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          onChange={onChange}
          value={fName}
        />
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          onChange={onChange}
          value={lName}
        />
        <input
          type="text"
          name="age"
          placeholder="Age (number)"
          onChange={onChange}
          value={age}
        />
      </>
    );
  }
}

export default CompWithTypeScript;
